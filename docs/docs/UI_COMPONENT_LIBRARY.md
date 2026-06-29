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
