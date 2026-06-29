# DESIGN_DECISIONS.md

**Project:** Big W Events Self-Service Platform

This document records major product and UX decisions that define the Big W customer experience.

Future design decisions should remain consistent with these principles unless intentionally superseded.

---

# DD-001 — Focus Beats Progress

**Decision**

Customers should always see their next task before they see overall progress.

**Reasoning**

Progress is informative.

Focus is actionable.

By highlighting only the current task, customers spend less time interpreting the interface and more time completing their rental.

---

# DD-002 — The Software Quietly Leads

**Decision**

The interface should always know what the customer needs to do next and confidently present only that action.

**Reasoning**

Customers should never need to decide what comes next.

The system quietly guides them from one completed task to the next.

---

# DD-003 — Eliminate Redundant Instructions

**Decision**

If the interface already communicates the next action, supporting instructional text should be removed.

**Reasoning**

Additional words increase cognitive load without increasing clarity.

The cleanest interface is the one that communicates through structure instead of explanation.

---

# DD-004 — The Camera Is Part of the Workspace

**Decision**

QR scanning is not a separate mode or screen.

The live camera is always available while the customer is actively loading or returning rental items.

**Reasoning**

Removing transitions keeps customers focused on their work instead of the software.

---

# DD-005 — Mistake-Proof by Design

**Decision**

Whenever possible, the system should prevent customer mistakes rather than asking customers to recover from them.

**Examples**

- Scan instead of typing
- Automatic completion
- No manual inventory identification
- Automatic progression between tasks

---

# DD-006 — One Screen. One Question.

**Decision**

Every screen should answer one primary customer question.

**Examples**

- CS-01 — Am I in the right place?
- CS-02 — What happens next?
- CS-03 — What should I do right now?

Future screens should follow the same philosophy.

---

# DD-007 — The Software Disappears Behind the Work

**Decision**

The customer should focus on loading their rental, not operating software.

**Reasoning**

Technology should quietly support the task rather than become the task itself.

# DD-008 — Build Patterns, Not Pages

**Decision**

The customer experience should be built from reusable interaction patterns rather than individually designed screens.

New features should reuse existing templates, screen zones, and UI components whenever possible.

**Reasoning**

Customers build confidence by recognizing familiar interaction patterns.

Consistent patterns reduce learning, lower cognitive load, and make future features feel immediately familiar.

For Engineering, reusable patterns simplify implementation and reduce long-term maintenance.

When introducing a new screen, the first question should be:

> "Can this be built from an existing template?"

Only when the answer is no should a new pattern be introduced.

# DD-009 — One Primary Decision

Decision

Every customer screen should present at most one primary action.

If a screen requires multiple equally prominent actions, the screen should be redesigned.

Reasoning

Every additional primary action creates another decision for the customer.

Big W reduces uncertainty by presenting one clear next step.

# DD-010 — Celebrate Transitions, Not Progress

**Decision**

Use subtle positive feedback when the customer's task changes—not after every successful action.

**Reasoning**

Repeated confirmations quickly become background noise.

Meaningful transitions deserve slightly greater emphasis because they naturally re-engage the customer's attention and prepare them for the next task.

Celebration should mark a change in context rather than every incremental action.

---

## Examples

### Appropriate

* Final table scanned
* Transition from Tables to Chairs
* Transition from Chairs to Linens

### Not Appropriate

* Every successful scan
* Every quantity update
* Every camera recognition

The objective is not to celebrate progress.

The objective is to help customers recognize that the nature of their work has changed.
DD-011 — Name Components by Purpose

Decision

Components should be named after the customer outcome they create, not the UI element they resemble.

Examples

Experience Header (not Page Header)
Focus Card (not Task Card)
Camera Workspace (not Scanner)
Completion Panel (not Success Screen)

Reasoning

Purpose-driven names help Design and Engineering think about customer outcomes instead of implementation details.
