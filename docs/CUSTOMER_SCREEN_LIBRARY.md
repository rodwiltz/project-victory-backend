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
