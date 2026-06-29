# CUSTOMER_SCREEN_LIBRARY.md

**Project:** Big W Events Self-Service Platform
**Internal Project Codename:** Project Victory
**Document Owner:** Product Design Team
**Primary Consumers:** Engineering, Product, Design
**Status:** Approved for Sprint 8 Implementation

---

# Purpose

The Customer Screen Library defines every customer-facing screen used throughout the Big W Events self-service rental platform.

Its purpose is to provide Engineering with a single source of truth for customer interactions, screen behavior, navigation, and presentation hierarchy.

This document intentionally focuses on the customer experience.

Business logic remains the responsibility of the backend.

Visual branding may evolve over time.

The customer journey should remain consistent.

---

# Product Philosophy

Big W Events exists to make self-service rentals feel simple, trustworthy, and effortless.

Every screen should reduce uncertainty.

Every interaction should increase customer confidence.

The interface should quietly guide the customer from one completed task to the next without requiring unnecessary decisions.

The application should never make customers wonder:

* Where am I?
* What should I do next?
* How will I know I'm finished?

If those three questions are always answered, the design has succeeded.

---

# Design Principles

Every customer-facing screen follows these principles.

## One Screen. One Decision.

Each screen should ask the customer to make only one meaningful decision.

Avoid presenting multiple competing actions.

---

## Guidance Before Information

Show customers what they should do before showing supporting details.

Actions should always be visually emphasized over statistics.

---

## Show Progress Through Tasks

Customers understand completed tasks better than percentages.

Whenever possible, communicate progress through completed activities instead of numeric completion.

Example:

✓ Tables Loaded

✓ Chairs Loaded

Linens Remaining

instead of:

63% Complete

---

## Automatic Completion

The system should recognize completion automatically.

Customers should never manually indicate that pickup or return is finished when the backend can determine completion.

---

## Calm Through Clarity

The interface should remain visually calm.

Whitespace, hierarchy, illustrations, and concise language should reduce stress instead of adding excitement.

---

## Customers Manage Rentals

Customers never manage inventory.

Customer-facing language should always refer to:

* Your Rental
* Your Items
* Pickup Items
* Return Items

Internal engineering terminology may continue using "Inventory."

---

# Customer Journey

Every screen belongs to one stage of the customer journey.

```
Reservation Confirmed
        │
Pickup Invitation Sent
        │
Welcome
        │
Before You Begin
        │
Pick Up Your Rental
        │
Ready for Your Event
        │
Event Happens
        │
Return Invitation Sent
        │
Return Your Rental
        │
Everything Returned
        │
Agreement Closed
```

No customer-facing screen should exist outside this journey without product approval.

---

# Screen Catalog

| ID | Screen | Journey Stage |
|-----|---------------------------|---------------------------|
| CS-01 | Welcome | Pickup Invitation |
| CS-02 | Before You Begin | Guided Pickup |
| CS-03 | Pick Up Your Rental | Guided Pickup |
| CS-04 | Ready for Your Event | Pickup Complete |
| CS-05 | Return Your Rental | Return Invitation |
| CS-06 | Everything Returned | Agreement Closed |
---

# Global Navigation Rules

The following rules apply throughout the application.

## Entry Point

Customers begin by opening their personalized Pickup or Return Invitation.

The invitation may include future enhancements such as navigation assistance, pickup location details, gate access information, and rental instructions before the customer arrives.

---

## Linear Navigation

Customers move through the rental journey in a logical sequence.

The application should never encourage skipping required steps.

---

## Automatic Advancement

When a task is complete and backend validation succeeds, the application should automatically advance to the next logical screen whenever appropriate.

---

## One Primary Action

Every screen contains one visually dominant action.

Secondary actions should remain available without competing for attention.

---

## Never Leave the Customer Without Direction

Every screen should clearly communicate the next action.

Customers should never reach a screen that lacks an obvious path forward.

---

# Global UI Rules

These standards apply to every customer-facing screen.

* Use concise language.
* Prefer short headings.
* Keep instructional copy under two sentences whenever possible.
* Use illustrations to reassure.
* Use icons to reinforce actions.
* Display only information required for the current step.
* Hide completed complexity whenever possible.
* Never duplicate information already visible elsewhere on the screen.
* Maintain consistent button placement across all screens.
* Preserve visual hierarchy throughout the customer journey.

---

# Screen State Matrix

Every interactive screen should support the following operational states.

| Screen                | Loading | Empty | Error | Success |
| --------------------- | ------- | ----- | ----- | ------- |
| Welcome               | ✓       | —     | —     | —       |
| Identity Verification | ✓       | —     | ✓     | ✓       |
| Pickup Dashboard      | ✓       | ✓     | ✓     | ✓       |
| Pickup Scanner        | ✓       | —     | ✓     | ✓       |
| Return Dashboard      | ✓       | ✓     | ✓     | ✓       |
| Return Scanner        | ✓       | —     | ✓     | ✓       |
| Completion Screens    | —       | —     | —     | ✓       |

---

# Screen Specifications

The following sections define every customer-facing screen in detail.

Each specification follows a standardized format to ensure Engineering can implement every screen consistently.

---
# Detailed Screen Specifications


---

# CS-01 — Welcome

**Journey Stage:** Pickup Invitation

**Status:** Approved for Sprint 8

---

# Purpose

The Welcome screen introduces the customer to the Big W Events self-service pickup experience.

Its purpose is to establish confidence before any rental activity begins.

The screen should reassure first-time customers that they are in the right place and that Big W Events will guide them through the remainder of the pickup process.

This screen intentionally contains very little information.

Reducing cognitive load at the beginning of the experience is more valuable than presenting additional details.

---

# Customer Goal

Begin the pickup experience confidently.

---

# Customer Mindset

The customer has just opened their personalized pickup invitation.

They may be wondering:

* Did I open the correct link?
* Am I in the right place?
* What happens next?
* Is this going to be complicated?

This screen should immediately reduce those concerns.

---

# Success Criteria

The customer confidently selects **Start Pickup** without hesitation.

The customer understands that Big W Events will guide them through the process.

---

# Entry Conditions

Customer opens their secure personalized pickup invitation.

The invitation uniquely identifies the rental.

No additional identity verification is required during Sprint 8.

---

# Exit Conditions

Customer selects **Start Pickup**.

System transitions to # CS-02 — Before You Begin

---

# Required Information

## Illustration

A calm, professional illustration using the Big W illustration style.

Preferred illustration:

Shield with subtle confirmation accent.

Purpose:

Communicate confidence and reassurance.

---

## Heading

Welcome to Big W Events

---

## Supporting Copy

Ready to pick up your rental?

---

## Primary Action

Start Pickup

---

# Optional Information

The following information may be displayed if available.

* Pickup date
* Pickup location
* Pickup window

These details should remain visually secondary.

---

# Visual Hierarchy

1. Illustration
2. Heading
3. Supporting copy
4. Primary action button
5. Optional pickup information

The customer's attention should naturally flow downward.

---

# Components Used

* Welcome Header
* Illustration Panel
* Primary Action Button

---

# Screen States

## Loading

Display application branding while reservation information loads.

Avoid exposing technical loading indicators whenever possible.

---

## Ready

Display the complete Welcome experience.

---

## Invalid Invitation

Display:

**This invitation is no longer available.**

Supporting text:

Please contact Big W Events if you need assistance.

Primary Action:

Contact Big W

---

## Expired Invitation

Display:

**This invitation has expired.**

Supporting text:

Please contact Big W Events for assistance.

Primary Action:

Contact Big W

---

# Accessibility

* Large touch targets.
* High contrast text.
* Screen reader friendly heading structure.
* Illustration should include descriptive alternative text.
* Primary button should remain reachable with one-handed mobile use.

---

# Engineering Notes

The Welcome screen contains no business logic.

Its responsibility is presentation.

Reservation validation occurs before this screen is displayed.

Business logic remains entirely within the backend.

---

# Future Enhancements

Future versions may optionally display:

* Navigation to pickup location
* Weather information
* Gate access reminders
* Estimated pickup duration
* Rental preview illustration

These enhancements should never distract from the primary action.

---

# UX Objectives

This screen should answer three questions immediately.

**Where am I?**

You are beginning your Big W Events pickup.

---

**What should I do next?**

Select **Start Pickup**.

---

**How will I know I'm finished?**

Big W Events will guide you through every remaining step.

---

# Design Notes

The Welcome screen establishes the emotional tone for the entire application.

It should feel:

* Professional
* Calm
* Organized
* Reassuring

The customer should leave this screen thinking:

> "Okay... this looks easy."

If that thought occurs before they press **Start Pickup**, this screen has achieved its purpose.
# CS-02 — Pickup Overview
---

# CS-02 — Before You Begin

**Journey Stage:** Pickup Invitation

**Status:** Approved for Sprint 8

---

# Purpose

The "Before You Begin" screen prepares the customer for the pickup experience.

Rather than presenting reservation details or instructions, this screen establishes confidence by explaining what will happen over the next few minutes.

The objective is to remove uncertainty before the customer begins interacting with their rental.

This screen serves as the transition between opening the invitation and beginning the guided pickup.

---

# Customer Goal

Understand what to expect before starting.

---

# Customer Mindset

The customer has chosen to begin.

They are no longer asking:

*"Did I open the right link?"*

Instead, they are wondering:

* What am I about to do?
* Will this be difficult?
* How long will this take?
* What happens if I make a mistake?

This screen should answer those questions without overwhelming the customer.

---

# Success Criteria

The customer understands the pickup process before scanning their first item.

The customer selects **Continue** with confidence.

---

# Entry Conditions

Customer selected **Start Pickup** on CS-01.

The reservation has already been validated.

---

# Exit Conditions

Customer selects **Continue**.

System transitions to **CS-03 — Pick Up Your Rental**.

---

# Required Information

## Illustration

A calm illustration showing organized rental equipment waiting for pickup.

The illustration should communicate preparation and readiness.

Customers should immediately feel that everything is already organized for them.

---

## Heading

Before You Begin

---

## Supporting Copy

We'll guide you through picking up your rental.

Scan each item as you load it.

When everything is loaded, we'll let you know.

---

## Primary Action

Continue

---

# Optional Information

None.

This screen intentionally avoids introducing reservation details, inventory information, or operational instructions.

Reducing cognitive load is more valuable than displaying additional information.

---

# Visual Hierarchy

1. Illustration
2. Heading
3. Three short instructional statements
4. Primary action button

The customer should read the screen in less than ten seconds.

---

# Components Used

* Welcome Header
* Illustration Panel
* Primary Action Button

---

# Screen States

## Loading

Display the illustration area and heading placeholder while content loads.

---

## Ready

Display the complete experience.

---

## Error

If reservation data cannot be retrieved after validation:

**We couldn't prepare your pickup.**

Please contact Big W Events for assistance.

Primary Action:

**Contact Big W**

---

# Accessibility

* Reading level should remain simple.
* Each instructional statement should occupy its own line.
* Illustration should include descriptive alternative text.
* Continue button should remain visible without scrolling.
* Support screen readers with logical heading order.

---

# Engineering Notes

This screen contains no business logic.

It is informational only.

No customer decisions are recorded on this screen.

Selecting **Continue** advances the customer to the guided pickup experience.

---

# Future Enhancements

Future versions may optionally include:

* Estimated completion time
* Short animated illustration
* Gate access reminder
* Pickup safety reminder

Any future enhancement must remain secondary to the primary objective of reducing customer uncertainty.

---

# UX Objectives

This screen should answer three questions.

**What am I about to do?**

Pick up your rental one item at a time.

---

**Will someone tell me what to do?**

Yes.

Big W Events will guide you through every step.

---

**How will I know when I'm finished?**

The application will automatically recognize when every required item has been picked up.

---

# Design Notes

This screen intentionally avoids technical terminology.

Do not mention:

* QR Codes
* Inventory
* Item IDs
* Backend processing
* Agreements
* Validation

The customer should only think about one thing:

> "This looks simple."

If the customer reaches the next screen believing the process will be easy, this screen has fulfilled its purpose.

# CS-03 — Pick Up Your Rental

**Journey Stage:** Guided Pickup

**Status:** Approved for Sprint 8

---

# Purpose

The "Pick Up Your Rental" screen is the primary working screen of the Big W Events self-service experience.

Its purpose is to quietly guide the customer through loading every assigned rental item without requiring them to decide what to do next.

This screen replaces traditional inventory management with a guided task experience.

The software should feel less like an application and more like a calm employee standing beside the customer.

---

# Customer Goal

Load every assigned rental item.

---

# Customer Mindset

The customer has arrived at the pickup location and is ready to begin loading.

At this moment they should never wonder:

* What should I load first?
* Did that scan work?
* What happens when I'm finished?

The interface should answer these questions naturally through its design.

---

# Success Criteria

The customer completes pickup without assistance.

The customer never manually marks pickup as complete.

The backend automatically recognizes completion and advances to the next screen.

---

# Entry Conditions

Customer selected **Continue** from CS-02.

The reservation has already been validated.

Assigned rental categories and quantities have been retrieved.

The device camera is available and automatically active.

---

# Exit Conditions

All assigned rental items have been successfully scanned.

The backend confirms completion.

The application automatically transitions to **CS-04 — Ready for Your Event**.

---

# Required Information

## Illustration Header

Display the Big W shield illustration.

Purpose:

Reinforce confidence without distracting from the customer's work.

---

## Heading

**Pick Up Your Rental**

---

## Supporting Copy

**Scan each item as you load it.**

---

## Current Task

Display only the customer's current task.

Example:

**Load Tables**

**6 Remaining**

Only one task should ever receive visual emphasis.

Future tasks remain hidden until they become relevant.

---

## Live Camera Workspace

The live camera opens automatically.

The customer never enters a separate scanner mode.

The camera exists as part of the workspace—not as a separate feature.

---

## Need Help

Provide a subtle **Need Help?** action.

Help should always remain secondary to the primary workflow.

---

# Visual Hierarchy

1. Shield illustration
2. Heading
3. Current task
4. Remaining quantity
5. Live camera workspace
6. Help

The customer's eye should naturally flow toward the next item requiring action.

---

# Interaction Rules

Successful scan:

* Remaining quantity updates immediately.
* Brief confirmation appears.
* Confirmation disappears automatically.

Category complete:

* Current task displays a completed state.
* Next task automatically becomes the current task.
* No customer interaction required.

Pickup complete:

* Application automatically advances to CS-04.

---

# Scan Feedback

## Successful Scan

✓ Item Added

Display briefly.

Dismiss automatically.

---

## Duplicate Scan

Already scanned.

Continue loading.

---

## Incorrect Item

This item isn't part of your rental.

Set it aside and continue loading your remaining items.

---

## Camera Unavailable

We couldn't access your camera.

Please check your camera permissions.

Primary Action:

**Contact Big W**

Manual item entry is intentionally not supported.

---

# Screen States

## Loading

Retrieve assigned rental information.

Prepare camera automatically.

---

## Active

Display current task and live camera.

---

## Task Complete

Automatically transition focus to the next task.

---

## Pickup Complete

Automatically transition to CS-04.

---

## Error

Display calm, human language.

Offer one clear recovery action.

Never expose technical terminology.

---

# Accessibility

* Large touch targets.
* High-contrast typography.
* Screen reader announcements for successful scans.
* Camera workspace remains unobstructed.
* All confirmations include both visual and text feedback.

---

# Engineering Notes

The frontend is responsible only for presentation.

Business logic remains entirely within the backend.

The frontend receives:

* Current task
* Remaining quantity
* Scan validation result
* Completion status

The frontend never determines pickup completion.

---

# Future Enhancements

Potential future improvements include:

* Gentle haptic confirmation after successful scans.
* Accessibility voice guidance.
* Offline recovery.
* Subtle completion animations.

Enhancements should reinforce the workflow without introducing additional decisions.

---

# UX Objectives

This screen should continuously answer four questions.

**What should I do?**

Load the highlighted item.

---

**Did that work?**

Immediate scan confirmation.

---

**What's next?**

The application automatically updates the current task.

---

**How will I know I'm finished?**

Big W Events will automatically recognize completion.

---

# Why This Screen Exists

Customers rent tables and chairs—not software.

This screen exists to remove unnecessary decisions so customers can focus entirely on loading their rental.

The application should quietly lead the customer from one completed task to the next until every assigned item has been loaded.

If the customer completes pickup without ever wondering what to do next, this screen has fulfilled its purpose.

---

# CS-04 — Ready for Your Event

**Journey Stage:** Pickup Complete

**Status:** Approved for Sprint 8

---

# Purpose

The "Ready for Your Event" screen confirms that pickup is complete.

Its purpose is to reassure the customer that every assigned rental item has been loaded and that no further pickup action is required.

This screen should feel calm, complete, and lightly celebratory.

---

# Customer Goal

Know that pickup is finished.

---

# Customer Mindset

The customer has finished loading their rental.

They may be wondering:

- Did I get everything?
- Am I done?
- What happens next?

This screen should answer those questions immediately.

---

# Success Criteria

The customer leaves the pickup experience confident that their rental is complete.

---

# Entry Conditions

All assigned pickup items have been scanned.

The backend confirms pickup completion.

---

# Exit Conditions

Customer closes the experience or follows optional next-step guidance.

---

# Required Information

## Illustration

Display a simple Big W illustration showing the rental successfully loaded or ready for the event.

---

## Heading

**Ready for Your Event**

---

## Supporting Copy

Everything has been picked up.

Enjoy your event.

---

# Primary Action

Done

---

# Optional Information

- Return reminder
- Contact Big W
- Pickup summary

Optional information must remain secondary.

---

# Visual Hierarchy

1. Illustration
2. Heading
3. Confirmation message
4. Primary action
5. Optional next-step guidance

---

# Interaction Rules

Do not require the customer to confirm completion.

Do not show detailed inventory counts.

Do not introduce new tasks unless required.

---

# Screen States

## Complete

Display confirmation.

---

## Error

If completion cannot be confirmed:

**We couldn't confirm pickup.**

Please contact Big W Events for assistance.

Primary Action:

**Contact Big W**

---

# Accessibility

- Confirmation must be text-based, not illustration-only.
- Primary action should be easy to reach.
- Screen reader should announce pickup completion.

---

# Engineering Notes

The frontend does not determine pickup completion.

Completion is confirmed by the backend before this screen appears.

---

# Future Enhancements

Future versions may include:

- Return reminder timing
- Calendar reminder
- Rental care instructions
- Event-day support link

---

# UX Objectives

This screen should answer three questions.

**Did I get everything?**

Yes. Everything has been picked up.

---

**Am I done?**

Yes. No further pickup action is required.

---

**What happens next?**

Enjoy your event. Big W will guide the return later.

---

# Why This Screen Exists

This screen exists to close the pickup experience with confidence.

The customer should leave thinking:

> "That was easier than expected."

---

# CS-05 — Return Your Rental

**Journey Stage:** Return Invitation

**Status:** Approved for Sprint 8

---

# Purpose

The "Return Your Rental" screen guides the customer through returning every assigned rental item.

It mirrors the pickup experience so the customer does not need to learn a new process.

The screen should quietly lead the customer one return task at a time.

---

# Customer Goal

Return every rental item confidently.

---

# Customer Mindset

The customer is finished with their event and is ready to return the rental.

They may be tired, busy, or distracted.

They should not have to remember how the pickup process worked.

The return process should feel familiar immediately.

---

# Success Criteria

The customer returns all assigned rental items without assistance.

The backend confirms completion automatically.

---

# Entry Conditions

Customer opens their secure return invitation.

The rental has been validated.

Return items have been retrieved.

The camera is available and automatically active.

---

# Exit Conditions

All assigned return items have been scanned.

The backend confirms return completion.

Application automatically transitions to **CS-06 — Everything Returned**.

---

# Required Information

## Heading

**Return Your Rental**

---

## Supporting Copy

Scan each item as you return it.

---

## Current Task

Display only the current return task.

Example:

**Return Tables**

**6 Remaining**

---

## Live Camera Workspace

The live camera opens automatically.

The customer never enters a separate scanner mode.

---

## Need Help

Provide a subtle **Need Help?** action.

---

# Visual Hierarchy

1. Heading
2. Current task
3. Remaining quantity
4. Live camera workspace
5. Help

---

# Interaction Rules

Successful scans update the remaining quantity immediately.

Completed categories automatically advance to the next category.

Return completion is detected by the backend.

No manual finish button should be shown.

---

# Scan Feedback

## Successful Scan

✓ Item Returned

---

## Duplicate Scan

Already returned.

Continue returning.

---

## Incorrect Item

This item isn't part of your rental.

Set it aside and continue returning your remaining items.

---

## Camera Unavailable

We couldn't access your camera.

Please check your camera permissions.

Primary Action:

**Contact Big W**

Manual item entry is intentionally not supported.

---

# Engineering Notes

Return mirrors pickup.

The frontend presents backend-provided return tasks and scan results.

The frontend never determines return completion.

---

# Why This Screen Exists

This screen exists to make returning feel just as easy as pickup.

The customer should not need to relearn the system.
