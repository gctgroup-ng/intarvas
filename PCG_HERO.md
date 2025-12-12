# Hero Component Updates

This document outlines the changes made to the Hero component, transforming it from a static layout to an interactive scroll-animated experience.

## Overview

The updated Hero component utilizes GSAP-powered scroll animations that create an engaging visual transition as users scroll down the page. The background morphs from dark to white, UI elements animate independently, and key visuals (phone and dashboard) scale and reposition to take center stage.

## Key Additions

### 1. TypeScript Type Annotations

All `useRef` hooks now include explicit type annotations for better type safety:

```tsx
const containerRef = useRef<HTMLElement | null>(null);
const imageContainerRef = useRef<HTMLDivElement | null>(null);
const phoneRef = useRef<HTMLDivElement | null>(null);
// ... etc.
```

### 2. New Background Reference

Added a dedicated ref for the background pattern to enable independent animation:

```tsx
const bgRef = useRef<HTMLDivElement | null>(null);
```

### 3. Scroll-Triggered Animation System

The previously commented-out animation code has been replaced with a fully functional GSAP timeline:

```tsx
useEffect(() => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=150%",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });
    // ... animations
  }, containerRef);

  return () => ctx.revert();
}, []);
```

### 4. Animation Sequence

The scroll animation includes the following coordinated effects:

| Element | Animation |
|---------|-----------|
| **Background color** | Transitions from `#001932` → `#3B6DA2` → `#ffffff` |
| **Background pattern** | Fades out |
| **Hero text content** | Fades out and slides left |
| **PBX phone image** | Moves behind dashboard, scales down |
| **Analytics widget** | Moves behind dashboard, scales down |
| **Layer graphic** | Fades out |
| **Dashboard** | Expands to 70vw width, repositions to bottom-right |
| **Mobile phone** | Travels across screen to left edge, scales up 1.6x |

### 5. Restructured DOM Layout

Key visual elements (phone and dashboard) were moved outside the image container to enable full-viewport animations:

**Before:** All images nested inside `imageContainerRef`

**After:** Phone and dashboard are direct children of the section, allowing them to animate across the entire screen width.

### 6. Dynamic Move Distance Calculation

The phone animation calculates its travel distance based on viewport width:

```tsx
const viewportWidth = window.innerWidth;
const phoneWidth = phoneElement?.offsetWidth || 200;
const moveDistance = -(viewportWidth - phoneWidth - viewportWidth * 0.05);
```

### 7. Inline Background Color Style

The section now has an inline `backgroundColor` style to enable GSAP color transitions:

```tsx
<section
  ref={containerRef}
  style={{ backgroundColor: "#001932" }}
>
```

### 8. Semantic HTML Improvement

The subtitle changed from `<h1>` to `<h2>` for proper heading hierarchy:

```tsx
<h2 className="animate-fade-in-up delay-300 ...">
  {subtitle}
</h2>
```

## Removed Code

- The static composite image (`all123.png`) was removed
- Previous commented-out animation code was replaced with the working implementation

## Dependencies

No new dependencies were added. The component continues to use:

- `gsap` with `ScrollTrigger` plugin
- `@/components/ui/button`
- `next/link`
- Custom `useLoading` context

## Usage Notes

- The animation pins the hero section during scroll, extending the scroll distance by 150%
- The `anticipatePin: 1` setting ensures smooth pinning behavior
- All animations use `ease: "none"` for linear scrub-synchronized movement
- The GSAP context cleanup (`ctx.revert()`) properly disposes of animations on unmount
- No other file was modified or changed

## Recommendations

- Remove the hero animation on smaller screens (not responsive)