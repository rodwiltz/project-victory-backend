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
- Support Actions

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

* Support Actions
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

---

# BC-06 — Camera Workspace

## Purpose

The Camera Workspace provides the live scanning environment used during guided pickup and guided return.

Its purpose is to help customers confidently scan rental items while keeping their attention on the physical work rather than the software.

The Camera Workspace should remain visually quiet and free from unnecessary interface elements.

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

**Interaction Zone**

The Camera Workspace occupies the Interaction Zone immediately beneath the Focus Card.

---

## Behavior

The Camera Workspace automatically activates when the Guided Work screen opens.

Customers should never need to manually enter a scanning mode.

The workspace continuously scans until the current task is complete or the customer exits the experience.

---

## Visual Elements

The Camera Workspace contains:

* Live camera preview
* Rounded corner scanning guides
* Temporary scan feedback overlays

No permanent interface elements should obstruct the live camera image.

---

## Scan Feedback

### Successful Scan

Display:

✓ Item Added

The confirmation should appear briefly near the center of the camera preview before fading automatically.

---

### Duplicate Scan

Display:

Already scanned.

Continue loading.

The message should reassure without interrupting the workflow.

---

### Incorrect Item

Display:

This item isn't part of this rental.

Set it aside and continue loading.

The customer should immediately understand that the workflow can continue.

---

### Camera Unavailable

Display:

We couldn't access your camera.

Please check your camera permissions.

Primary Action:

**Contact Big W**

Manual item entry is intentionally not supported.

---

## Attention Model

During scanning, customer attention naturally shifts toward the camera.

Routine scan confirmation should therefore appear within the Camera Workspace.

The Camera Workspace should not celebrate progress or announce category completion.

Those responsibilities belong to the Focus Card.

---

## Accessibility

* Camera guides should remain visible without obscuring QR codes.
* Scan feedback should be presented visually and through screen reader announcements when appropriate.
* Motion should respect reduced-motion preferences.
* Camera permission failures should always provide a clear recovery path.

---

## Engineering Notes

The backend determines scan validity.

The frontend is responsible for:

* Displaying the live camera preview
* Detecting scan events
* Presenting scan feedback
* Maintaining continuous scanning

The Camera Workspace should not determine inventory state or workflow progression.

---

## Future Enhancements

Future versions may support:

* Flashlight control
* Automatic zoom assistance
* Improved low-light guidance
* Multiple camera selection

Enhancements should improve scanning without distracting from the customer's task.

---

## UX Objectives

The Camera Workspace should continuously answer three questions.

**Can the system see my item?**

Yes.

The live preview confirms camera readiness.

---

**Did my scan work?**

Immediate scan feedback confirms the result.

---

**Should I keep scanning?**

Yes.

Unless the Focus Card transitions to a new task.

---

## Why This Component Exists

The customer should never wonder whether the system recognized their scan.

The Camera Workspace quietly confirms each interaction while allowing the customer to remain focused on loading or returning rental items.

It exists to make scanning feel reliable, predictable, and nearly invisible.
---

# BC-03 — Support Actions

## Purpose

Support Actions provide the customer with a clear path to human assistance when the application cannot reasonably recover from a problem.

Support Actions are intentionally absent from the normal guided experience.

Their presence indicates that the application has exhausted its available recovery strategies.

---

## Used By

Recovery states across all customer-facing templates.

Support Actions are not tied to a specific screen.

They are displayed only when recovery is unsuccessful or when the application encounters a non-recoverable condition.

---

## Zone

**Support Zone**

The Support Zone appears only during recovery experiences.

It should never compete visually with the Primary Action during normal workflow.

---

## Behavior

Support Actions remain hidden during successful customer experiences.

They become available only after:

* Automatic recovery fails
* Guided recovery fails
* A non-recoverable operational issue is detected

Examples include:

* Missing inventory
* Storage access problems
* Repeated recovery failures
* Unexpected system errors

---

## Available Actions

Primary support option:

**Need Help?**

Selecting the action begins the Big W support experience.

Whenever possible, the application should include relevant context before initiating customer contact.

---

## Attention Model

Support Actions intentionally remain outside the customer's normal attention.

The application should first:

1. Detect
2. Recover
3. Guide

Only then should Support Actions become visible.

This preserves the customer's confidence in the guided experience while ensuring assistance remains available when genuinely needed.

---

## Accessibility

* Easily discoverable when displayed.
* Large touch target.
* Clear screen reader label.
* Never rely solely on color to indicate availability.

---

## Engineering Notes

Support Actions are state-driven.

Visibility is controlled by application state rather than individual screens.

The backend or workflow engine determines when recovery has failed.

The frontend is responsible only for rendering the component when requested.

---

## Future Enhancements

Future versions may support:

* Pre-filled support messages
* Automatic diagnostic information
* Screenshot attachment
* Messenger integration
* Live support availability indicators

Future enhancements should reduce customer effort without increasing operational complexity.

---

## UX Objectives

Support Actions answer one question.

**What do I do if the software cannot help me?**

The answer should always be immediate, simple, and reassuring.

---

## Why This Component Exists

Big W believes software should solve problems before people do.

Support Actions exist to ensure that when human assistance becomes necessary, customers always know the next step.
