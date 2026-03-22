---
name: prior-auth-writer
description: Draft medical necessity letters for insurance prior authorization requests, appeals, and peer-to-peer preparation
triggers:
  - prior authorization
  - prior auth
  - insurance authorization
  - PA letter
  - medical necessity letter
  - insurance appeal
---

# prior-auth-writer

Drafts a medical necessity letter for insurance prior authorization or appeals. Uses clinical language that aligns with standard payer review criteria. Dramatically reduces provider time on administrative burden.

> **This is a documentation drafting aid. All clinical decisions and final documentation are the responsibility of the licensed provider. Provider must review all content for accuracy before submission to any payer.**

## How to Invoke

Provide the clinical details and the skill builds the letter. Example:

```
/prior-auth-writer

Request type: New prior auth
Patient: 38yo female
Diagnosis: Moderate-to-severe Crohn's disease (K50.10)
Requested treatment: Adalimumab (Humira) 160mg SC x1, then 80mg at week 2, then 40mg every other week
Payer: BlueCross BlueShield
What was tried: Mesalamine — inadequate response after 6 months. Azathioprine — discontinued due to elevated LFTs.
Clinical findings: CRP 42, fecal calprotectin 890, colonoscopy (3 months ago) showed deep ulcerations involving terminal ileum and right colon
```

## Workflow

### Step 1 — Identify Request Type

- **New prior authorization**: First-time request for a treatment, medication, or procedure
- **Appeal of denial**: Payer denied; provider believes denial was incorrect
- **Peer-to-peer preparation**: Talking points for a physician-to-physician call with the insurance medical director

### Step 2 — Collect Clinical Information

Required inputs:
- **Patient demographics**: Age, sex (do not include name or DOB in AI-generated drafts — provider adds PHI before submission)
- **Diagnosis**: Condition name and ICD-10 code
- **Requested service**: Medication (generic name + brand), procedure (CPT code), or durable medical equipment (HCPCS code)
- **Clinical indication**: Why this patient needs this treatment specifically
- **Relevant history**: Disease course, severity, prior flares, hospitalizations, functional impact
- **Step therapy documentation**: What has been tried before, doses used, duration, and outcome (inadequate response, intolerance, contraindication)
- **Supporting objective data**: Labs, imaging, pathology, validated disease severity scores (e.g., Harvey-Bradshaw, CDAI, PHQ-9, CHADS₂-VASc)

### Step 3 — Frame Around Payer Criteria

Structure the clinical argument around the three pillars most payers use:

1. **Medical necessity**: This specific patient has a documented clinical need that cannot be adequately met by the requested alternative
2. **Standard of care**: Clinical practice guidelines (ACG, ADA, ACC, AHA, etc.) support this treatment for this diagnosis and severity
3. **Step therapy / alternatives inadequate**: Prior treatments have been tried (list each with dose, duration, outcome) and have failed, been contraindicated, or are not clinically appropriate for this patient

### Step 4 — Assemble the Letter

**Header**
- Date
- Payer name and address
- Plan/member ID: [PROVIDER TO INSERT]
- Re: Prior Authorization Request for [Treatment]
- Patient: [PROVIDER TO INSERT NAME AND DOB BEFORE SUBMISSION]

**Section 1: Diagnosis and Clinical Summary**
Concise clinical narrative: diagnosis, disease course, severity, functional impact, objective findings.

**Section 2: Requested Service and Clinical Rationale**
- Name the requested treatment, dose, frequency, and duration
- Explain why it is medically necessary for this patient specifically
- Cite relevant clinical guideline(s) supporting this as appropriate treatment

**Section 3: Supporting Objective Evidence**
- Labs, imaging, biopsy results, validated scoring tools
- Placeholder brackets for provider to insert actual values: `[INSERT: CRP value and date]`

**Section 4: Step Therapy and Prior Treatment Failures**
- Table or numbered list: Drug → Dose → Duration → Outcome
- For each failure: inadequate response, adverse effect, contraindication

**Section 5: Prognosis Without Authorization**
- Clinical consequences of denial — disease progression, risk of hospitalization, complications
- Keep clinical, objective, and evidence-based

**Section 6: Closing Request**
- Formal request for authorization
- Offer to provide additional documentation or participate in peer-to-peer review
- Provider signature line: `[PROVIDER NAME, CREDENTIALS, NPI, DATE]`

### Step 5 — Peer-to-Peer Talking Points

If requested, generate a structured prep sheet for the peer-to-peer call:

- **Open**: State your name, credentials, and the patient's clinical situation in 2–3 sentences
- **Key clinical facts**: The 3–4 most compelling data points (severity score, failed therapies, objective findings)
- **Guideline reference**: Name the specific guideline supporting your choice
- **Step therapy argument**: Explain why alternatives failed or are not appropriate
- **Ask**: Request approval; be prepared to negotiate (duration of auth, step-down plan)
- **If denied on the call**: Ask for the specific clinical criteria used to deny and the name/credentials of the reviewer

## Example Output

**Input:** Humira for moderate Crohn's, failed mesalamine and azathioprine

---

**[Date]**

Medical Review Department
[Payer Name]
[Payer Address]

**Re: Prior Authorization Request — Adalimumab (Humira)**
Member/Plan ID: [PROVIDER TO INSERT]
Patient: [PROVIDER TO INSERT PATIENT NAME AND DATE OF BIRTH BEFORE SUBMISSION]
Requesting Provider: [PROVIDER NAME, MD/DO/NP/PA, NPI: ________]

---

**To Whom It May Concern:**

I am writing to request prior authorization for adalimumab (Humira) for the above-referenced patient, a 38-year-old female with moderate-to-severe Crohn's disease (ICD-10: K50.10).

**Clinical Summary**

This patient has a documented history of Crohn's disease with involvement of the terminal ileum and right colon confirmed by colonoscopy performed [INSERT DATE]. Colonoscopic findings included deep ulcerations. Objective inflammatory markers are significantly elevated: C-reactive protein (CRP) [INSERT VALUE AND DATE], fecal calprotectin [INSERT VALUE AND DATE]. The patient's disease course has been [INSERT: duration of illness, prior flares, hospitalizations if applicable], with substantial impact on [INSERT: work/daily functioning if applicable].

**Requested Treatment**

I am requesting authorization for:
- Adalimumab (Humira) 160 mg subcutaneous at Week 0, 80 mg at Week 2, then 40 mg subcutaneously every other week for maintenance

This regimen is consistent with current ACG (American College of Gastroenterology) Clinical Guidelines for Crohn's disease, which recommend biologic therapy with an anti-TNF agent for patients with moderate-to-severe disease who have failed conventional therapy.

**Step Therapy Documentation**

The following treatments have been tried and failed prior to this request:

| Drug | Dose | Duration | Outcome |
|------|------|----------|---------|
| Mesalamine | [INSERT dose] | 6 months | Inadequate clinical response — persistent symptoms and elevated inflammatory markers |
| Azathioprine | [INSERT dose] | [INSERT duration] | Discontinued due to elevated liver function tests (hepatotoxicity) — contraindicated for continued use |

**Supporting Objective Data**

- Colonoscopy [INSERT DATE]: Deep ulcerations, terminal ileum and right colon involvement
- CRP: [INSERT VALUE] (normal <5 mg/L)
- Fecal calprotectin: [INSERT VALUE] (normal <50 µg/g)
- [INSERT any additional labs, imaging, or disease activity scores]

**Prognosis Without Authorization**

Without effective biologic therapy, this patient is at significant risk for disease progression, including bowel complications (stricture, fistula, abscess), requirement for surgical intervention, and repeated hospitalizations. Anti-TNF therapy with adalimumab represents the medically appropriate and guideline-supported next step in her care.

**Request**

I respectfully request approval of the above medication. I am available for a peer-to-peer discussion with your medical director if needed. Please feel free to contact my office at [PROVIDER PHONE NUMBER].

Sincerely,

[PROVIDER NAME, CREDENTIALS]
[NPI NUMBER]
[PRACTICE NAME]
[PRACTICE PHONE / FAX]

---

**PEER-TO-PEER TALKING POINTS**

*Open (15 seconds):* "I'm [Name], [specialty] at [practice]. I'm calling about a 38-year-old with moderate-to-severe Crohn's — terminal ileal and right colonic involvement on colonoscopy, CRP [value], fecal calprotectin [value]. She failed mesalamine after 6 months and had to stop azathioprine due to elevated LFTs."

*Key arguments:*
1. Objective evidence of moderate-to-severe disease (colonoscopy + biomarkers)
2. Two prior therapies tried and failed — one failure, one contraindication
3. ACG guidelines recommend anti-TNF for this population
4. Surgical risk is the alternative if this fails

*If reviewer cites formulary preference for another biologic:* "I'm open to discussing, but adalimumab has the strongest evidence base for this patient's phenotype and I've been using it successfully in similar patients. What specific criterion makes the preferred agent more appropriate here?"

*Close:* "What additional documentation would help you approve this? I can have my office fax records today."

---

> **DRAFT — Provider must review, verify all clinical details, insert all [PLACEHOLDER] information, and sign before submission. Do not submit this document with placeholders unfilled. PHI (patient name, DOB, member ID) must be added by the provider — never include PHI in prompts to AI tools.**
