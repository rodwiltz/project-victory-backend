# UI Component Library

## Purpose

The UI Component Library defines the reusable building blocks that make up the Big W Events customer experience.

Components should be designed once and reused consistently throughout the application.

The goal is to create a calm, predictable experience where customers immediately recognize familiar patterns as they move through the application.

Every component should reduce uncertainty, reinforce confidence, or guide the customer toward their next action.

---

# Component Architecture
The Big W Events customer experience is built from three reusable screen templates.

## Template A — Introduction

Components:

- Experience Header
- Primary Action

Used by:

- CS-01 Welcome
- CS-02 Before You Begin

---

## Template B — Guided Work

Components:

- Experience Header
- Focus Card
- Camera Workspace
- Status Message
- Secondary Action

Used by:

- CS-03 Pick Up Your Rental
- CS-05 Return Your Rental

---

## Template C — Completion

Components:

- Completion Panel
- Primary Action

Used by:

- CS-04 Ready for Your Event
- CS-06 Everything Returned

## Component Categories

- Foundation Components
- Workflow Components
- Feedback Components

# Screen Zones
---
## Experience Zone

**Purpose**

The Experience Zone introduces the current customer moment.

Its responsibility is to create confidence before the customer takes action.

**Contains**

* Experience Header

---

## Work Zone

**Purpose**

The Work Zone presents the customer's current objective.

Only the information required to complete the next task should appear here.

**Contains**

* Focus Card

---

## Interaction Zone

**Purpose**

The Interaction Zone is where customers perform work.

Components in this zone should always support the current task without introducing unnecessary decisions.

**Contains**

* Camera Workspace

---

## Feedback Zone

**Purpose**

The Feedback Zone communicates the system's response to customer actions.

Feedback should be immediate, brief, and reassuring.

**Contains**

* Status Message

---

## Support Zone

**Purpose**

The Support Zone provides optional assistance without interrupting the customer's workflow.

Support should always remain secondary to the customer's current task.

**Contains**

* Secondary Action
* Contact Big W
* Need Help


# BC-01 — Experience Header

## Purpose

The Experience Header establishes confidence before the customer takes action.

It introduces the current moment in the customer journey using a consistent combination of illustration, heading, and supporting copy.

The Experience Header should help customers immediately understand where they are and what they are about to do.

Its primary responsibility is reassurance—not navigation.

---

## Used By

**Template A — Introduction**

* CS-01 — Welcome
* CS-02 — Before You Begin

**Template B — Guided Work**

* CS-03 — Pick Up Your Rental
* CS-05 — Return Your Rental

---

## Template

* Introduction
* Guided Work

---

## Zone

**Experience Zone**

The Experience Header always occupies the Experience Zone at the top of the screen.

No other component may appear above it.

---

## Behavior

The Experience Header always contains three elements:

1. Illustration
2. Heading
3. Supporting Copy

The component does not contain buttons, progress indicators, or customer actions.

Supporting copy should remain brief and reinforce the customer's next step without repeating information displayed elsewhere.

---

## Variants

### Welcome

Used when introducing the experience.

### Preparation

Used before beginning a guided workflow.

### Guided Work

Used while the customer is actively completing a task.

The structure remains identical across all variants.

Only the content changes.

---

## Accessibility

* The heading must use semantic heading structure.
* Illustrations must include descriptive alternative text.
* Supporting copy should remain readable at common mobile text sizes.
* Color must never be the only method of communicating meaning.

---

## Engineering Notes

The Experience Header is a reusable presentation component.

Business logic should never determine its layout.

Engineering should pass:

* Illustration
* Heading
* Supporting copy

The component should render them consistently across all supported screens.

---

## Future Enhancements

Future versions may support:

* Seasonal illustrations
* Light animation
* Brand campaigns

Enhancements should never change the structure or distract from the customer's task.

---

## Why This Component Exists

Customers should immediately feel that Big W Events is guiding them.

---

# BC-02 — Primary Action

## Purpose

The Primary Action represents the customer's next and most important decision.

Its purpose is to move the customer confidently from one stage of the experience to the next.

Every Primary Action should clearly communicate what happens next without requiring additional explanation.

---

## Used By

**Template A — Introduction**

* CS-01 — Welcome
* CS-02 — Before You Begin

**Template C — Completion**

* CS-04 — Ready for Your Event
* CS-06 — Everything Returned

---

## Template

* Introduction
* Completion

---

## Zone

**Experience Zone**

The Primary Action appears immediately after the Experience Header or Completion Panel.

It should remain visually dominant.

---

## Behavior

Only one Primary Action may appear on a screen.

The button label should describe the customer's next step.

Examples include:

* Start Pickup
* Continue
* Done

Primary Actions should never compete with other actions for attention.

---

## Variants

### Start

Begins an experience.

Example:

**Start Pickup**

---

### Continue

Advances the customer to the next stage.

Example:

**Continue**

---

### Finish

Closes the current experience.

Example:

**Done**

---

## Accessibility

* Large touch target suitable for one-handed mobile use.
* High color contrast.
* Clear focus indicator for keyboard navigation.
* Action text should always describe the outcome.

---

## Engineering Notes

The Primary Action is a reusable presentation component.

Engineering should pass:

* Button label
* Action handler
* Enabled/disabled state

Business logic determines availability.

The component determines presentation.

---

## Future Enhancements

Future versions may support:

* Loading state
* Subtle haptic confirmation
* Gentle transition animation

Enhancements should reinforce confidence without delaying the customer's progress.

---

## Why This Component Exists

Customers should never wonder what to do next.

The Primary Action provides one clear path forward.

When present, it should always represent the single best next decision.


The Experience Header creates that feeling before any work begins.

Every customer journey starts with confidence.
---

# BC-05 — Focus Card

## Purpose

The Focus Card is the primary working component of the Big W Events customer experience.

Its purpose is to direct the customer's attention toward one clearly defined task at a time.

Rather than presenting lists, dashboards, or multiple simultaneous objectives, the Focus Card quietly narrows the customer's attention to the single task that matters right now.

The Focus Card is the centerpiece of the Guided Work template.

Every other workflow component exists to support it.

---

## Used By

**Template B — Guided Work**

* CS-03 — Pick Up Your Rental
* CS-05 — Return Your Rental

---

## Template

**Guided Work**

---

## Zone

**Work Zone**

The Focus Card is the primary element of the Work Zone.

No other work-related component should compete with it for visual emphasis.

---

## Attention Model

The Focus Card manages customer attention throughout repetitive work.

Before work begins, it answers:

**What should I do first?**

During repetitive work, it answers:

**How much of this task remains?**

When a category is completed, it redirects attention toward the next task through a subtle transition.

Routine scan confirmation occurs within the Camera Workspace because the customer's attention is already there.

The Focus Card becomes visually active only when the customer's focus should change.

---

## Behavior

The Focus Card always displays:

* Current task
* Remaining quantity
* Current-task progress indicator

The progress indicator represents only the active task.

It never represents overall rental completion.

When the active category changes, the progress indicator resets for the next task.

---

## Variants

### Pickup

Example:

Load Chairs

44 Remaining

---

### Return

Example:

Return Chairs

44 Remaining

The layout remains identical.

Only the language changes.

---

## Feedback Model

### Routine Scan

The Focus Card updates the remaining quantity immediately.

Routine scan confirmation is displayed by the Camera Workspace.

The Focus Card should remain visually stable during repetitive scanning.

---

### Category Complete

When the final item within a category is scanned:

* The progress indicator completes.
* A subtle completion state appears.
* The Focus Card gently transitions to the next task.
* The next task becomes the customer's new focus.

Transition feedback should feel reassuring rather than celebratory.

Its purpose is to reorient attention—not reward behavior.

---

## Accessibility

* High contrast between the active task and supporting information.
* Remaining quantity should remain readable at a glance.
* Progress should never rely on color alone.
* Screen readers should announce task transitions.
* Motion should remain subtle and respect reduced-motion preferences.

---

## Engineering Notes

The Focus Card is a presentation component.

The backend supplies:

* Current task
* Remaining quantity
* Total quantity for the active category
* Progress state
* Category completion event

The frontend is responsible for:

* Rendering the current task
* Displaying progress for the current category
* Transitioning smoothly between categories

The frontend never determines which task comes next.

---

## Future Enhancements

Future versions may support:

* Gentle haptic feedback on category completion
* Accessibility voice guidance
* Optional sound themes
* Personalized illustrations

Future enhancements should reinforce focus without increasing cognitive load.

---

## UX Objectives

The Focus Card should continuously answer four questions.

**What should I do?**

Display the current task.

---

**How much work remains?**

Display remaining quantity and current-task progress.

---

**Did my work change?**

Provide subtle transition feedback when a category is completed.

---

**What happens next?**

Automatically present the next task.

---

## Why This Component Exists

The customer should never have to decide what deserves their attention.

The Focus Card makes that decision for them.

By reducing every moment to one clearly defined objective, the Focus Card transforms inventory management into a guided customer experience.

It is the component that most clearly represents Big W Events' commitment to calm, confident, self-service.
