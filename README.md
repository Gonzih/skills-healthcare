# skills-healthcare

Claude Code skill suite for healthcare providers — physicians, nurse practitioners, physician assistants, and nurses.

## Install

```bash
npm install @gonzih/skills-healthcare
```

The installer copies skill files into `~/.claude/skills/` so they are immediately available in any Claude Code session.

## Skills

### `/clinical-note-draft`

**Triggers:** clinical note, SOAP note, progress note, chart note, visit note, clinical documentation

Produces a structured SOAP or progress note draft from provider bullet points or free dictation. Saves documentation time while ensuring completeness.

- Accepts shorthand clinical language ("T2DM", "BID", "NAD", etc.)
- Generates S/O/A/P sections with vitals table and numbered problem list
- Suggests ICD-10 codes (provider must verify)
- Flags missing information
- Copy-paste ready for EHR

### `/patient-education`

**Triggers:** patient education, explain diagnosis, patient handout, health education, explain condition, patient instructions

Generates plain-language patient education materials written at a 6th-grade reading level.

- Condition explanations, medication instructions, discharge instructions, lifestyle guides
- Tailored to health literacy level (low / average / high)
- Clear numbered action steps, warning signs, FAQs
- Brief (1-page) or detailed format
- Provider customization notes included

### `/prior-auth-writer`

**Triggers:** prior authorization, prior auth, insurance authorization, PA letter, medical necessity letter, insurance appeal

Drafts a medical necessity letter for insurance prior authorization or appeal using clinical language aligned with standard payer review criteria.

- New prior auth, appeal of denial, or peer-to-peer prep
- Frames argument around medical necessity, standard of care, and step therapy
- Full letter structure with placeholders for provider to insert PHI and specifics
- Peer-to-peer talking points included

### `/research-digest`

**Triggers:** clinical research, medical research, research summary, journal summary, CME research, literature summary, evidence-based update

Transforms a clinical research abstract into a structured clinical digest.

- PICO summary, population, intervention vs. control
- NNT/NNH calculation when data is available
- Evidence strength rating (Strong / Moderate / Weak / Inconclusive)
- Practice implications: who this applies to, whether to change practice
- CME documentation note

## Disclaimer

All skills are documentation drafting aids. Clinical decisions and final documentation are the responsibility of the licensed provider. No skill output constitutes a medical record, a clinical recommendation, or a substitution for professional clinical judgment.

Do not include patient PHI (name, date of birth, MRN, etc.) in prompts. Providers add PHI to drafts before submission or distribution.

## License

MIT — Copyright (c) 2026 Maksim Soltan
