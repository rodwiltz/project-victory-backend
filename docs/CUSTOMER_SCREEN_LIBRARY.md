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
Identity Verification
        │
Pickup Dashboard
        │
Guided Pickup
        │
Pickup Complete
        │
Event Happens
        │
Return Invitation Sent
        │
Return Dashboard
        │
Guided Return
        │
Return Complete
        │
Agreement Closed
```

No customer-facing screen should exist outside this journey without product approval.

---

# Screen Catalog

| ID   | Screen                | Journey Stage         |
| ---- | --------------------- | --------------------- |
| S-01 | Welcome               | Pickup Invitation     |
| S-02 | Identity Verification | Identity Verification |
| S-03 | Pickup Dashboard      | Guided Pickup         |
| S-04 | Pickup Scanner        | Guided Pickup         |
| S-05 | Pickup Complete       | Rental Complete       |
| S-06 | Return Dashboard      | Return Invitation     |
| S-07 | Return Scanner        | Guided Return         |
| S-08 | Return Complete       | Agreement Closed      |

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

> Placeholder for Sprint 8 customer screen specifications.

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

System transitions to **CS-02 — Pickup Overview**.

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
