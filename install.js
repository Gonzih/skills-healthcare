#!/usr/bin/env node

/**
 * skills-healthcare installer
 *
 * Copies skill files into the Claude Code skills directory so they are
 * available as /clinical-note-draft, /patient-education,
 * /prior-auth-writer, and /research-digest.
 *
 * Install locations checked in order:
 *   1. $CLAUDE_SKILLS_DIR (environment override)
 *   2. $HOME/.claude/skills/
 */

const fs = require("fs");
const path = require("path");

const SKILLS = [
  "clinical-note-draft",
  "patient-education",
  "prior-auth-writer",
  "research-digest",
];

function getSkillsDir() {
  if (process.env.CLAUDE_SKILLS_DIR) {
    return process.env.CLAUDE_SKILLS_DIR;
  }
  const home = process.env.HOME || process.env.USERPROFILE;
  if (!home) {
    console.error(
      "ERROR: Cannot determine home directory. Set CLAUDE_SKILLS_DIR to override."
    );
    process.exit(1);
  }
  return path.join(home, ".claude", "skills");
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function main() {
  const skillsDir = getSkillsDir();
  const packageRoot = __dirname;

  console.log(`\nskills-healthcare: installing to ${skillsDir}\n`);

  let installed = 0;
  for (const skill of SKILLS) {
    const src = path.join(packageRoot, "skills", skill);
    const dest = path.join(skillsDir, skill);

    if (!fs.existsSync(src)) {
      console.warn(`  WARN: source not found — ${src}`);
      continue;
    }

    try {
      copyDir(src, dest);
      console.log(`  ✓  /${skill}`);
      installed++;
    } catch (err) {
      console.error(`  ✗  /${skill} — ${err.message}`);
    }
  }

  console.log(
    `\n${installed}/${SKILLS.length} skills installed.\n`
  );

  if (installed > 0) {
    console.log("Usage in Claude Code:");
    for (const skill of SKILLS) {
      console.log(`  /${skill}`);
    }
    console.log(
      "\nAll skills are documentation drafting aids. Clinical decisions\n" +
        "and final documentation remain the responsibility of the licensed provider.\n"
    );
  }
}

main();
