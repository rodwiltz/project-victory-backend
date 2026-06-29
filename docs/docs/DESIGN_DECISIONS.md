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
Camera Workspace → micro feedback
Focus Card → transition feedback

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

# DD-012 — Capture Decisions Immediately

**Decision**

Once a product, design, or architecture decision is approved, it should be documented and committed before continuing the discussion.

**Reasoning**

Important decisions are easiest to lose immediately after they are made, especially during highly collaborative design sessions.

Capturing decisions immediately ensures that GitHub remains the single source of truth and prevents unfinished ideas from depending on memory.

This workflow keeps Design, Engineering, and Product synchronized while reducing the need to reconstruct past decisions.

Reasoning

Purpose-driven names help Design and Engineering think about customer outcomes instead of implementation details.

# DD-013 — Progress Should Represent Current Effort

Not overall completion.

Current effort.

Reasoning:

Customers manage one task at a time.

Overall progress increases cognitive load without improving decision-making.

The Focus Card should visualize only the work associated with the current task.
# DD-014 — Components Own One Responsibility

**Decision**

Each reusable UI component should have one clearly defined responsibility.

Components should not accumulate unrelated behaviors or compete with neighboring components.

**Reasoning**

Single-purpose components are easier to understand, easier to implement, and easier to evolve.

Examples:

* Experience Header establishes context.
* Focus Card directs attention.
* Camera Workspace confirms interaction.
* Support Actions provides optional assistance.

When a component begins answering multiple unrelated questions, it should be divided into separate components.

# DD-015 — Human Assistance Is the Exception

**Decision**

The application should be designed so that customers can successfully complete their rental without contacting Big W.

Support Actions exist as a recovery path rather than part of the primary experience.

**Reasoning**

The software—not the employee—is the customer's primary guide.

Every successful self-service interaction increases customer confidence while reducing operational interruptions.

Human assistance should always remain available, but it should never become part of the expected workflow.

Customers should leave thinking:

> "Wow... that was easier than expected."

# DD-016 — Recover Before Escalating

**Decision**

The application should always attempt to recover from recoverable problems before directing the customer to contact Big W.

Human assistance is the final recovery layer—not the first.

**Reasoning**

The software often knows why a problem occurred before the customer does.

When possible, the application should diagnose the issue, provide clear guidance, and allow the customer to immediately try again.

Examples include:

* Camera permissions denied
* Camera initialization failed
* QR code not recognized
* Poor lighting
* Temporary network interruptions

Only after reasonable recovery attempts have failed should the application recommend contacting Big W.

---

## Recovery Model

Every problem should follow this sequence:

### 1. Detect

Identify the specific failure.

Example:

> Camera permission denied.

---

### 2. Recover

Provide the customer with the simplest action that is most likely to resolve the problem.

Example:

> Please allow camera access and tap **Try Again**.

---

### 3. Retry

Allow the customer to immediately continue without restarting the experience.

Recovery should feel like a brief interruption—not a failed session.

---

### 4. Escalate

If recovery is unsuccessful, provide access to Support Actions.

When escalating, the application should include as much context as possible so Big W understands the customer's situation before the conversation begins.

---

## Design Principles

Recovery should:

* Preserve customer confidence.
* Minimize interruption.
* Keep the customer inside the guided experience whenever possible.
* Prefer action over explanation.
* Make human assistance the exception rather than the expectation.

---

## Examples

### Camera Permission Denied

Show:

> We need permission to use your camera.

Primary Action:

**Try Again**

Secondary Action:

**Need Help?**

---

### QR Code Not Recognized

Show:

> Try moving closer or improving the lighting.

Continue scanning automatically.

No escalation.

---

### Missing Inventory

The software cannot recover.

Offer:

**Need Help?**

Include the rental and item context when initiating contact.

---

## Why This Decision Exists

Every unnecessary support interaction increases customer frustration and operational effort.

Big W's software should behave like an experienced employee:

Solve what it can.

Guide when it cannot.

Escalate only when necessary.

Not:

> "I'm glad someone answered the phone."

