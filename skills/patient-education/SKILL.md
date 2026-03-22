---
name: patient-education
description: Generate plain-language patient education materials — condition explanations, medication instructions, discharge instructions, and lifestyle guides
triggers:
  - patient education
  - explain diagnosis
  - patient handout
  - health education
  - explain condition
  - patient instructions
---

# patient-education

Generates plain-language patient education materials written at a 6th-grade reading level. Covers condition explanations, medication instructions, discharge instructions, and lifestyle modification guides. Available in brief (1-page) or detailed format.

> **This is a documentation drafting aid. All clinical decisions and final documentation are the responsibility of the licensed provider.**

## Live Data Sources

- **MedlinePlus Connect API** — medlineplus.gov/connect/service.html — Maps diagnosis codes (ICD-10-CM) and drug codes (RxNorm) to curated patient education content from the National Library of Medicine. Use to pull authoritative, plain-language topic summaries aligned to the patient's diagnosis.
- **NIH Health Topics** — health.nih.gov — Condition-specific health information from NIH institutes (NIDDK, NHLBI, NCI, etc.). Reference for evidence-based lifestyle and disease management content included in handouts.

## How to Invoke

Tell the skill what you need to explain and for whom. Examples:

```
/patient-education
Topic: New diagnosis Type 2 diabetes
Patient: 67-year-old, average health literacy
Format: 1-page handout
```

```
/patient-education
Topic: Starting metformin — what to expect
Patient: Adult, low health literacy, prefers simple words
```

```
/patient-education
Topic: Colonoscopy prep instructions
Patient: 55-year-old, average literacy
```

## Workflow

### Step 1 — Identify Topic

Choose the category:
- **Diagnosis**: What is [condition], why it matters, what to do
- **Medication**: What it does, how to take it, side effects, what to watch for
- **Procedure**: What to expect before, during, and after
- **Lifestyle**: Diet, exercise, weight, smoking cessation, stress management
- **Discharge instructions**: After hospital stay or ED visit — activity, diet, medications, follow-up, warning signs

### Step 2 — Patient Profile

Tailor content to the individual:
- **Age**: Adjust examples and relevance (e.g., A1c targets for elderly)
- **Health literacy**:
  - *Low*: Short sentences, common words only, no medical jargon at all, numbered steps
  - *Average*: Plain language, define medical terms on first use, moderate detail
  - *High*: May include more mechanism detail, statistics, clinical context
- **Language preference**: Default is English. Note if translation is needed — provider should have material professionally translated before distributing; AI translation is a starting point only, not a substitute for certified medical translation.

### Step 3 — Generate Content

Every handout includes these sections, scaled to the topic:

**What is [condition / medication / procedure]?**
- Simple, jargon-free definition (1–3 sentences)
- Use an analogy when helpful ("Your pancreas is like a factory that makes insulin — a key that lets sugar into your cells")

**Why does it matter?**
- Consequences of not addressing it — stated clearly but without alarming language
- What good management looks like

**What to do — Your Action Steps**
- Numbered list, one action per step
- Specific and concrete ("Take 1 metformin tablet with breakfast every morning" not "Take as directed")
- Include dose/timing/route for medications

**Warning signs**
- When to call the office (non-urgent)
- When to go to the emergency room or call 911 (urgent)
- Written as a simple checklist

**Common questions (3–5 FAQs)**
- Anticipate the questions patients actually ask
- Direct, honest answers in plain language

### Step 4 — Format for Readability

Apply these formatting rules:
- Short paragraphs (2–4 sentences max)
- Bulleted or numbered lists for steps and warning signs
- Bold the most important phrases
- Clear section headers
- No dense walls of text
- Large-print friendly: content works at 14pt or larger
- Avoid abbreviations (write "two times a day" not "BID")

### Step 5 — Provider Customization Notes

At the end, include a section for the provider:

```
--- PROVIDER CUSTOMIZATION NOTES ---
Insert before distributing:
• [CLINIC PHONE NUMBER] — add your clinic's number in the "When to call us" section
• [FOLLOW-UP DATE] — fill in the patient's specific follow-up appointment
• Verify dosing instructions match this patient's prescribed regimen
• If patient speaks [language], professional medical translation is recommended
```

## Example Output

**Input:** New T2DM diagnosis, 67-year-old patient, average literacy, 1-page format

---

# What Is Type 2 Diabetes?

**Type 2 diabetes** means your body has trouble using sugar (glucose) the right way. Think of insulin as a key that unlocks your cells so sugar can get in for energy. With Type 2 diabetes, the key doesn't work as well as it should.

This is very common — millions of people have it. And with the right steps, you can live well with diabetes.

---

## Why Does It Matter?

When blood sugar stays too high for too long, it can damage your:
- **Heart and blood vessels**
- **Kidneys**
- **Eyes**
- **Nerves** (especially in your feet)

The good news: keeping your blood sugar in a healthy range can protect all of these.

---

## Your Action Steps

1. **Take your medicines** exactly as your doctor prescribed — every day, even when you feel fine.
2. **Check your blood sugar** at home as often as your doctor recommends. Write down the numbers.
3. **Eat balanced meals**: more vegetables, less sugar and white bread, reasonable portions.
4. **Move your body**: a 20–30 minute walk most days makes a real difference.
5. **Go to your follow-up appointments** — your doctor will check your blood sugar control with a test called an A1c every 3–6 months.
6. **Check your feet** every day for cuts, sores, or redness.

---

## Warning Signs

**Call our office at [CLINIC PHONE NUMBER] if you have:**
- [ ] Blood sugar above [provider to insert target] two days in a row
- [ ] Unusual thirst, frequent urination, or blurred vision that won't go away
- [ ] A sore on your foot that isn't healing

**Go to the Emergency Room or call 911 if you have:**
- [ ] Blood sugar below 70 that doesn't get better after eating sugar
- [ ] Confusion, shaking, or passing out
- [ ] Chest pain or trouble breathing

---

## Common Questions

**"Do I have to give myself shots?"**
Not necessarily. Many people with Type 2 diabetes start with pills. Your doctor will talk with you about the best treatment for you.

**"Can I still eat foods I enjoy?"**
Yes — this is about balance, not perfection. A registered dietitian can help you plan meals that work for you.

**"Will this go away?"**
Type 2 diabetes is a long-term condition, but some people improve their blood sugar a lot through weight loss and lifestyle changes. Your doctor can talk about what's realistic for your situation.

**"What's an A1c?"**
The A1c test shows your average blood sugar over the past 3 months. Your doctor will explain what your number means and what the goal is for you.

---

*Follow-up appointment: [FOLLOW-UP DATE]*
*Questions? Call us: [CLINIC PHONE NUMBER]*

---

> **DRAFT — Provider review required before distributing. Verify all dosing, targets, and instructions match this patient's specific care plan. Professional translation required for non-English-speaking patients.**

---

*(--- PROVIDER CUSTOMIZATION NOTES ---)*
*Insert before distributing:*
- *[CLINIC PHONE NUMBER] — add in the "Warning Signs" section*
- *[FOLLOW-UP DATE] — add the patient's appointment*
- *[target] — insert blood sugar threshold for calling the office (e.g., 250 mg/dL)*
- *Confirm metformin dose and any other medications match what was prescribed*
