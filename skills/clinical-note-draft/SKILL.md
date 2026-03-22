---
name: clinical-note-draft
description: Draft structured SOAP or progress notes from provider bullet points or free dictation
triggers:
  - clinical note
  - SOAP note
  - progress note
  - chart note
  - visit note
  - clinical documentation
---

# clinical-note-draft

Produces a structured SOAP or progress note draft from provider bullet points or free dictation. Saves documentation time while ensuring completeness. Provider reviews and finalizes — this is a drafting aid, not a medical record.

> **This is a documentation drafting aid. All clinical decisions and final documentation are the responsibility of the licensed provider.**

## Live Data Sources

- **NIH ICD-10 API** — clinicaltables.nlm.nih.gov — Autocomplete and lookup for ICD-10-CM codes. Use to verify suggested diagnosis codes in the Assessment section before provider attestation.
- **CPT Code Lookup** — AMA CPT code patterns for common procedure codes. Reference standard E/M visit code families (99202–99215 for office visits) and procedure-specific codes when documenting the Plan section.

## How to Invoke

Invoke this skill by describing your visit. You can use shorthand bullets, abbreviated clinical language, or free dictation — whatever is fastest for you. Example:

```
/clinical-note-draft

45yo M, follow-up T2DM + HTN
CC: here for labs, doing well
HPI: no hypoglycemic episodes, checking BG QD at home ~110-130 fasting
Meds: metformin 1g BID, lisinopril 10mg QD, adherent
ROS: denies polyuria, polydipsia, chest pain, SOB, HA, vision changes
Vitals: BP 128/76, HR 72, Wt 198lb, BMI 28.4
Exam: NAD, regular rate, lungs CTA, abd soft NT, no edema
A: T2DM controlled, HTN controlled, A1c pending
P: continue current meds, A1c result pending — if >7.5 adjust metformin, recheck labs 3mo, RTC 3 months
```

## Workflow

### Step 1 — Identify Visit Type

Classify the encounter to set the appropriate note structure:
- **New patient** — full H&P format
- **Follow-up** — focused SOAP
- **Urgent care / acute visit** — chief-complaint-centered SOAP
- **Telehealth** — note telehealth modality; exam findings limited
- **Procedure note** — indication, technique, findings, disposition
- **Discharge summary** — hospital course, discharge condition, follow-up plan

### Step 2 — Collect Provider Input

Accept any combination of:
- Patient demographics (age, sex)
- Chief complaint
- HPI bullets or dictation
- Relevant history (PMH, PSH, meds, allergies, social/family Hx)
- Review of systems (pertinent positives and negatives)
- Vitals
- Physical exam findings
- Assessment (diagnoses or working diagnoses)
- Plan bullets (meds, labs, referrals, follow-up)

Shorthand is welcome: "BID", "QD", "NAD", "BRBPR", "SOB", "HTN", "T2DM", etc.

### Step 3 — Build SOAP Structure

**S — Subjective**
- Chief complaint in patient's words (or provider's paraphrase)
- HPI narrative with chronology: onset, location, duration, character, aggravating/relieving factors, associated symptoms
- Pertinent PMH, PSH, medications, allergies
- Relevant social/family history
- Review of systems (pertinent positives and negatives grouped by system)

**O — Objective**
- Vitals table: BP | HR | RR | Temp | SpO₂ | Wt | BMI
- Physical exam: organ system by organ system, pertinent positives and negatives
- Pending or resulted labs/imaging (clearly labeled as pending vs. resulted)

**A — Assessment**
- Numbered problem list
- ICD-10 code suggestions in brackets — e.g., Type 2 diabetes mellitus without complications [E11.9]
- **Provider must verify all ICD-10 codes before submission**

**P — Plan**
- Per-problem plan, numbered to match Assessment
- Medications: generic name, dose, route, frequency, quantity, refills
- Orders: labs, imaging, referrals (specify urgency)
- Patient education topics addressed
- Return precautions ("return to ED if…")
- Follow-up timing

### Step 4 — Format for EHR

Output is clean, structured, and copy-paste ready:
- Clear section headers (S / O / A / P)
- Vitals in a simple table
- Numbered problem list in Assessment
- Per-problem plan numbered to match
- Flag any missing information the provider should supply: `[MISSING: allergy list]`, `[MISSING: last A1c value]`

### Step 5 — Disclaimer

Every note draft ends with:

> **DRAFT — Provider review required before signing. This document is not a medical record until reviewed, edited as needed, and attested by the treating provider. ICD-10 codes are suggestions only and must be verified. Do not use this draft as a standalone clinical record.**

## Example Output

**Input from provider:**
> 45yo M, follow-up T2DM + HTN. Doing well, no symptoms. BG fasting ~110-130. On metformin 1g BID, lisinopril 10mg QD. Vitals: BP 128/76 HR 72 wt 198 BMI 28.4. Exam normal. A1c pending. Continue meds, f/u 3mo.

**Draft output:**

---

**SUBJECTIVE**

Chief Complaint: Follow-up visit for Type 2 diabetes mellitus and hypertension.

HPI: Mr. [Last Name] is a 45-year-old male presenting for routine follow-up of Type 2 diabetes mellitus and hypertension. He reports good compliance with his current medication regimen. Fasting blood glucose at home has been running approximately 110–130 mg/dL. He denies episodes of hypoglycemia, polyuria, polydipsia, blurred vision, chest pain, or shortness of breath.

Medications: Metformin 1000 mg PO BID, Lisinopril 10 mg PO QD

Allergies: [MISSING: allergy list — please add]

ROS: Negative for hypoglycemic symptoms, polyuria, polydipsia, vision changes, chest pain, shortness of breath, headache, lower extremity edema.

**OBJECTIVE**

| BP | HR | RR | Temp | SpO₂ | Wt | BMI |
|----|----|----|------|------|----|-----|
| 128/76 mmHg | 72 bpm | [not documented] | [not documented] | [not documented] | 198 lb | 28.4 |

Physical Exam:
- General: No acute distress
- Cardiovascular: Regular rate and rhythm, no murmurs [inferred from "exam normal" — provider verify]
- Pulmonary: Clear to auscultation bilaterally [inferred — provider verify]
- Abdomen: Soft, non-tender [inferred — provider verify]
- Extremities: No edema [inferred — provider verify]
- Neurologic: [MISSING: foot exam documentation recommended for diabetes follow-up]

Labs: HbA1c — **PENDING**

**ASSESSMENT**

1. Type 2 diabetes mellitus without complications [E11.9] — currently controlled per home glucose log; A1c pending
2. Essential hypertension [I10] — blood pressure at goal today (128/76)

**PLAN**

1. Type 2 diabetes mellitus:
   - Continue Metformin 1000 mg PO BID
   - A1c result pending — if ≥7.5%, reassess medication regimen at next visit
   - Repeat HbA1c and CMP in 3 months
   - [MISSING: confirm nephropathy screening / urine microalbumin status]

2. Essential hypertension:
   - Continue Lisinopril 10 mg PO QD
   - Blood pressure at goal; no medication changes at this time

Patient education: Reviewed importance of home glucose monitoring and medication adherence. Reviewed low-sodium dietary measures for blood pressure control.

Return precautions: Patient instructed to return to clinic or seek emergency care for blood glucose <70 mg/dL unresponsive to treatment, blood glucose >300 mg/dL, chest pain, or severe headache.

Follow-up: 3 months, or sooner if concerns arise.

---

> **DRAFT — Provider review required before signing. This document is not a medical record until reviewed, edited as needed, and attested by the treating provider. ICD-10 codes are suggestions only and must be verified. Do not use this draft as a standalone clinical record.**
