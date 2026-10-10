---
version: alpha
name: ZenSys Skyway
description: A clear, bright product-marketing system for ZenSys shop and garage software, adapted from the Aeline reference.
colors:
  primary: "#122841"
  secondary: "#4A637A"
  sky: "#1378AD"
  tertiary: "#D9F66B"
  tertiary-strong: "#536E09"
  neutral: "#E6F3F8"
  canvas: "#F5FAFC"
  surface: "#FFFFFF"
  on-surface: "#122841"
  border: "#D2E2E9"
  error: "#8B3348"
typography:
  display:
    fontFamily: Segoe UI
    fontSize: 88px
    fontWeight: 700
    lineHeight: 1.01
    letterSpacing: -0.045em
  headline-lg:
    fontFamily: Segoe UI
    fontSize: 54px
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: -0.04em
  headline-md:
    fontFamily: Segoe UI
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: -0.03em
  body-lg:
    fontFamily: Segoe UI
    fontSize: 19px
    fontWeight: 400
    lineHeight: 1.65
  body-md:
    fontFamily: Segoe UI
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Segoe UI
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: Segoe UI
    fontSize: 13px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0.02em
  label-caps:
    fontFamily: Segoe UI
    fontSize: 11px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0.14em
  caption:
    fontFamily: Segoe UI
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.45
rounded:
  none: 0px
  sm: 5px
  md: 12px
  lg: 22px
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  4xl: 96px
components:
  page:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
  hero:
    backgroundColor: "{colors.sky}"
    textColor: "{colors.surface}"
    typography: "{typography.body-md}"
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.primary}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "{spacing.md}"
    height: 52px
  button-primary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
  button-secondary:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    height: 48px
  input-error:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.error}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
  chip:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.full}"
    padding: "{spacing.sm}"
  tooltip:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
  metadata:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.secondary}"
    typography: "{typography.caption}"
  accent-text:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.tertiary-strong}"
    typography: "{typography.label}"
  divider:
    backgroundColor: "{colors.border}"
    height: 1px
---

# ZenSys Skyway

## Overview

ZenSys Skyway adapts the bright blue stage, compact navigation, lime action, and generous whitespace of the supplied Aeline reference. The product remains the subject: POS and garage screenshots replace generic AI claims and invented metrics. Navy comes from the ZenSys mark; the sky field gives the site an open, approachable first impression. Lime is reserved for the primary demo action. This direction trades the restraint of a mostly-white brochure for stronger color and more immediate product discovery.

## Colors

The palette combines navy and cyan from the ZenSys mark with the vivid blue field and lime action visible in the Aeline reference. The blue field is darkened so white copy remains readable. Lime has one job: identify the primary demo action. Cyan remains a small brand detail; navy carries text and structure.

- **Primary (#122841): Night-sky ink** — the dark blue in the ZenSys mark; headings, body text, footer, and hover states.
- **Secondary (#4A637A): Blue-grey type** — muted copy and metadata.
- **Sky (#1378AD): Open blue** — the Aeline-inspired hero field; white text retains accessible contrast.
- **Tertiary (#D9F66B): Citrus lime** — the sole high-energy signal, reserved for the primary demo action.
- **Tertiary strong (#536E09): Olive leaf** — contrast-safe small lime-family labels when needed.
- **Neutral (#E6F3F8): Mist blue** — quiet grouping surfaces.
- **Canvas (#F5FAFC): Daylight paper** — the main page ground, gently cool rather than pure white.
- **Surface (#FFFFFF): Screen white** — product surfaces and form fields sit one value brighter than the page.
- **On-surface (#122841): Night-sky ink** — high-contrast text on pale surfaces.
- **Border (#D2E2E9): Cloud edge** — rules and input outlines in place of decorative shadows.
- **Error (#8B3348): Muted berry** — form errors, paired with clear labels and text.

## Typography

Segoe UI and its system fallbacks provide a clear, familiar sans voice across headings and interface copy, matching the Aeline reference without adding a remote font dependency. Display headings use 700 weight and tight tracking; body copy stays at a readable 60–70 character measure. Uppercase navigation is small and tracked; forms retain sentence case for clarity.

## Layout

Use a 12-column fluid desktop grid with a 1240px content maximum. The home page opens with a centered message and two actions inside a blue stage; product pages use a copy-and-screenshot split. Contact forms sit below their short blue introduction so fields stay wide and easy to scan. On mobile, recompose into a single column and keep the main action near the page introduction. The spacing system uses an 8px base with a 4px half-step. Vary section rhythm by importance.

## Elevation & Depth

The site is mostly flat. Separate content with whitespace, tonal shifts, and cool borders. Reserve a soft blue-tinted shadow for screenshot panels and the open mobile navigation; ordinary content groupings rely on spacing and borders.

## Shapes

Use pill shapes for the primary action as a defining detail from the reference. Inputs stay modestly rounded; screenshot panels and product groupings use larger but restrained radii. Do not wrap every paragraph or feature in a card. Avoid decorative gradients and glass effects.

## Components

Primary buttons use lime with navy text; on hover they switch to navy with white text and move only a pixel. Secondary links remain unboxed and use a small directional arrow. Inputs use a pale surface, thin border, and visible blue focus ring. Error messages include text and a border marker, never color alone. Screenshot figures use a consistent frame and useful caption. Navigation remains simple and exposes a keyboard-operable mobile disclosure.

## Do's and Don'ts

- Do use the supplied logo colors as the source for the site palette; sample and tune the CSS values if the original pixel values differ.
- Do reserve lime for the primary demo action; use sky blue for the opening stage and cyan only as a small logo-derived detail.
- Do use real product screenshots as the main visual proof and preserve the relevant UI inside responsive crops.
- Do honor reduced-motion preferences and animate only state changes or a small amount of entrance emphasis.
- Don't add purple, decorative multi-color gradients, or another bright accent.
- Don't invent customer counts, quantified outcomes, testimonials, or unsupported product behavior.
- Don't use a card for every content block or add icon tiles to feature lists.
- Don't animate every section as it scrolls into view or make the user wait for text to become readable.
