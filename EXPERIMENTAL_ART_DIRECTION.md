# Coralz V4 — Experimental Art Direction

The portfolio now treats motion as part of the identity rather than decoration.

## Project worlds

Each project scene can have its own visual language:
- scene 01: cinematic image + rounded frame
- scene 02: asymmetric frame + angled perspective grid
- scene 03: contrasting frame + alternate visual treatment

These are intentionally data-compatible with the existing project model. Additional project-specific media can be added later without changing the interaction architecture.

## Fluid layer

`FluidCanvas` provides a dependency-free WebGL-like atmosphere using Canvas 2D:
- pointer-reactive field
- animated particles
- radial energy
- device-pixel-ratio aware rendering

## Motion typography

`VelocityText` skews display text according to scroll velocity, creating a restrained kinetic-editorial effect.

## Page choreography

`SceneTransition` creates route-level visual continuity for internal links.

## Accessibility

All decorative effects respect `prefers-reduced-motion`.
