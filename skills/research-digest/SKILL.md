---
name: research-digest
description: Transform clinical research abstracts into structured digests with evidence grading, NNT/NNH calculations, and practice implications for CME and journal clubs
triggers:
  - clinical research
  - medical research
  - research summary
  - journal summary
  - CME research
  - literature summary
  - evidence-based update
---

# research-digest

Transforms a clinical research abstract or finding into a structured clinical digest — what was studied, what was found, how strong the evidence is, and what it means for your practice. Designed for CME preparation, journal clubs, and staying current with evidence-based medicine.

> **This is a documentation drafting aid. All clinical decisions and final documentation are the responsibility of the licensed provider.**

## How to Invoke

Paste the abstract, provide a citation, or describe the clinical question. Examples:

```
/research-digest

[Paste abstract here]
```

```
/research-digest

Title: Semaglutide and Cardiovascular Outcomes in Obesity without Diabetes (SELECT trial)
Journal: NEJM, 2023
Question: Does semaglutide 2.4mg reduce MACE in patients with obesity and established CVD but without T2DM?
```

```
/research-digest

Clinical question: Does early palliative care consultation improve quality of life in patients with advanced NSCLC?
```

## Workflow

### Step 1 — Accept Input

Accept any of:
- A pasted abstract (any format — NEJM, JAMA, Lancet, etc.)
- Study title + journal + year
- A described clinical question (skill will note that results are based on summarized or known literature, not primary data)
- A combination of the above

### Step 2 — Identify Study Type and Evidence Hierarchy

Classify the study design and locate it in the evidence hierarchy:

| Level | Study Type | Strength |
|-------|-----------|---------|
| 1a | Systematic review / meta-analysis of RCTs | Highest |
| 1b | Individual RCT with narrow confidence intervals | High |
| 2a | Systematic review of cohort studies | Moderate-High |
| 2b | Individual cohort study / low-quality RCT | Moderate |
| 3 | Case-control study | Moderate-Low |
| 4 | Case series / case report | Low |
| 5 | Expert opinion / bench research | Lowest |

Note key design features: blinding, allocation concealment, intention-to-treat analysis, funding source, sample size, follow-up duration.

### Step 3 — Build the Structured Summary

**Question**
The clinical question the study set out to answer — stated as a PICO (Population, Intervention, Comparison, Outcome) if the data supports it.

**Population**
- Who was studied? Key inclusion criteria.
- Key exclusion criteria (who does this NOT apply to?).
- Demographics: n=, age range, sex distribution, key comorbidities.
- Setting: single center, multicenter, country/region — affects generalizability.

**Intervention vs. Control**
- What was the intervention? (dose, frequency, duration)
- What was the comparator? (placebo, standard of care, active comparator)
- Co-interventions: what else were both groups allowed to receive?

**Results**
Present results in plain, clinically useful terms:
- Primary outcome: relative risk reduction (RRR), absolute risk reduction (ARR), and — when calculable — **Number Needed to Treat (NNT)** or **Number Needed to Harm (NNH)**
- Key secondary outcomes
- P-values interpreted in plain English ("statistically significant at p<0.05" → "this result is unlikely to be due to chance")
- Confidence intervals: "The 95% CI means we're 95% confident the true effect is between X and Y"
- Subgroup findings (if any — note whether pre-specified or post-hoc)

**NNT/NNH Calculation (when data allows)**
```
ARR = Control event rate − Intervention event rate
NNT = 1 ÷ ARR
Example: Control 10% events, Treatment 7% events → ARR = 3% → NNT = 33
Interpretation: You would need to treat 33 patients to prevent 1 event
```

**Limitations**
- Study design flaws (open-label, short follow-up, surrogate endpoints)
- Generalizability concerns (highly selected population, industry-funded)
- What the study does NOT answer
- Conflicts of interest / funding source

**Evidence Strength Rating**

| Rating | Meaning |
|--------|---------|
| **Strong** | High-quality RCT or systematic review, large n, consistent results, clinically meaningful effect size |
| **Moderate** | Good RCT with limitations, or consistent cohort data |
| **Weak** | Observational data, small n, surrogate endpoints, inconsistent results |
| **Inconclusive** | Conflicting results, underpowered, major methodological concerns |

Provide 1–2 sentences explaining the rating.

### Step 4 — Practice Implications

This is the section providers find most valuable. Be specific:
- Should you change practice? For which patients? Under what conditions?
- Does this confirm, refine, or challenge current guidelines?
- Are there patient subgroups where the evidence is stronger or weaker?
- What is the clinical threshold for applying this? (NNT vs. cost, risk, patient preference)
- What should you discuss with patients about this finding?

### Step 5 — CME Documentation Note

Provide a brief note on how this could be documented for CME credit:
- Suggested learning objective format
- Approximate CME credit hours (typical for journal article review: 0.5–1.0 AMA PRA Category 1 Credit)
- Reminder: actual CME credit requires attestation through an accredited provider

## Example Output

**Input:** NEJM RCT on semaglutide 2.4mg and cardiovascular outcomes in obese patients without diabetes (SELECT trial)

---

## Clinical Research Digest

**Study:** SELECT Trial — Semaglutide and Cardiovascular Outcomes in Obesity without Diabetes
**Published:** NEJM, 2023
**Study Type:** Randomized, double-blind, placebo-controlled trial
**Evidence Level:** 1b — High-quality individual RCT

---

### Question

In adults with overweight or obesity and established cardiovascular disease but *without* Type 2 diabetes, does semaglutide 2.4 mg weekly reduce the risk of major adverse cardiovascular events (MACE) compared to placebo?

**PICO:**
- **P**: Adults ≥45 years, BMI ≥27, prior MI, stroke, or peripheral arterial disease; no diabetes at baseline
- **I**: Semaglutide 2.4 mg subcutaneous weekly
- **C**: Placebo
- **O**: Primary — composite of CV death, non-fatal MI, non-fatal stroke (MACE-3)

---

### Population

- **n = 17,604** (double-blind, 1:1 randomized)
- Age: mean 61.6 years; 72% male
- BMI: mean 33.4
- 100% had established CVD; 0% had T2DM at enrollment
- Median follow-up: 39.8 months
- Multicenter, global (41 countries)

**Who this excludes:** Patients with Type 2 diabetes, eGFR <30, recent (within 60 days) acute cardiovascular event.

---

### Intervention vs. Control

- **Intervention**: Semaglutide 2.4 mg SQ weekly (dose-escalated over 16 weeks)
- **Control**: Matching placebo SQ weekly
- Both groups received standard-of-care cardiovascular risk management

---

### Results

**Primary Outcome (MACE-3):**

| Group | Event Rate | |
|-------|-----------|--|
| Semaglutide | 6.5% | |
| Placebo | 8.0% | |
| **ARR** | **1.5%** | |
| **RRR** | **20%** | (HR 0.80, 95% CI 0.72–0.90) |
| **NNT** | **~67** | (treat 67 patients for ~40 months to prevent 1 MACE) |
| **P-value** | **<0.001** | Highly statistically significant; very unlikely due to chance |

**Confidence interval interpretation:** We are 95% confident the true hazard ratio is between 0.72 and 0.90 — the entire interval is below 1.0, meaning the benefit is consistent.

**Key secondary outcomes:**
- Cardiovascular death: HR 0.85 (not statistically significant)
- Non-fatal MI: HR 0.72 (significant)
- All-cause death: HR 0.81 (p=0.02)
- Body weight: mean −9.4% vs −0.9% (significant)

**Adverse events / NNH:**
- Serious GI events (discontinuation due to GI side effects): more common with semaglutide (~10% vs ~2%)
- No increased risk of pancreatitis or retinopathy identified in this trial

---

### Limitations

- Predominantly male (72%) — results may not generalize equally to women
- Predominantly high-income countries — applicability to global populations uncertain
- Funded by Novo Nordisk (manufacturer of semaglutide) — industry funding is a potential source of bias
- Mechanism of CV benefit unclear: is it weight loss, direct vascular effects, or both?
- Relatively short follow-up (40 months) for a chronic disease intervention
- Does not establish benefit in patients without established CVD (primary prevention population unstudied)

---

### Evidence Strength: **Strong**

Large, well-powered, double-blind RCT with a clinically meaningful primary endpoint (MACE, not a surrogate). Consistent results across prespecified subgroups. Industry funding is a limitation but trial design was rigorous.

---

### Practice Implications

**Who this applies to:** Adults with overweight/obesity (BMI ≥27) + established atherosclerotic cardiovascular disease (prior MI, stroke, or PAD) + *no* Type 2 diabetes.

**Should you change practice?**
- **Yes, selectively.** For patients who fit this profile (obese, CVD, no T2DM), semaglutide 2.4 mg now has a mortality-reducing, CV-protective indication beyond weight loss alone.
- NNT of ~67 over 40 months is clinically meaningful for a high-risk population with few alternatives.
- Consider adding to the conversation for patients with obesity + CVD who are not already on a GLP-1 agonist.

**Patient conversation framing:** "This medication was tested in 17,000 people with your type of heart risk — it lowered the risk of heart attack and stroke by about 20%. It's not just about weight."

**Caveats:**
- GI side effects are real — discuss with patients upfront
- Does not establish benefit without CVD — SELECT was not a primary prevention trial
- Insurance authorization may be required; prior auth letters may cite SELECT data

**CME Documentation Note**

*Suggested learning objective:* "Learner will be able to identify patients with obesity and established ASCVD who may benefit from semaglutide 2.4 mg for cardiovascular risk reduction, independent of diabetes status."

*Estimated CME credit:* 0.5–1.0 AMA PRA Category 1 Credit™ (for journal article review, per your institution's CME provider guidelines)

*Note:* CME credit requires attestation through an accredited CME provider. This digest supports your learning but does not itself confer credit.
