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
