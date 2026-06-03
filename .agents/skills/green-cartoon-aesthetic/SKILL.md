---
name: green-cartoon-aesthetic
description: Design and develop UI components utilizing the Wroth-inspired retro cartoon style. Features a soft green/cream color palette, bold outlines, and playful paper-based mascot characters.
---

# Wroth-Inspired Green Cartoon Aesthetic Skill

This skill guides the agent in implementing web interfaces following the playful, cozy, and highly engaging "Wroth" design system. The aesthetic combines clean retro outlines, pastel sage green backgrounds, warm cream accents, and custom yellow cartoon paper characters.

## When to Use This Skill
- When designing landing pages, layouts, and custom web components that require a unique, high-end, and friendly aesthetic.
- When creating UI components that need to look polished but interactive, utilizing playful illustrations or card-based layouts.
- When configuring theme styles in projects using Tailwind CSS, Nuxt, or custom stylesheets to match this exact aesthetic.

---

## Design System Specifications

### 1. Color Palette
To maintain the cozy, premium feel, adhere to the following color codes:

| Name | Hex Code | Tailwind Representation | Purpose |
| :--- | :--- | :--- | :--- |
| **Forest Teal** | `#0D3A40` | `text-[#0D3A40]`, `bg-[#0D3A40]` | Primary text, borders, high-contrast buttons, solid shadows |
| **Pastel Sage** | `#D4E5D4` | `bg-[#D4E5D4]`, `text-[#D4E5D4]` | Hero backgrounds, major section highlights, soft overlays |
| **Warm Cream** | `#F9F9F6` | `bg-[#F9F9F6]` | General page background, clean canvas elements |
| **Mascot Yellow** | `#FFE875` | `bg-[#FFE875]`, `text-[#FFE875]` | Accent call-outs, cartoon mascot body fill, energetic highlights |
| **Paper White** | `#FFFFFF` | `bg-white` | Card bodies, inputs, clean containers |

### 2. Layout & Borders (Retro Cartoon Style)
- **Outlines**: Use bold, distinct borders to give elements a hand-drawn or illustrated feel. Use `border-2 border-[#0D3A40]` for main elements.
- **Shadows**: Implement solid, offset shadows (Neo-brutalist style but softer).
  - *Tailwind class*: `shadow-[4px_4px_0px_0px_#0D3A40]` or `shadow-[6px_6px_0px_0px_#0D3A40]`
  - *CSS representation*: `box-shadow: 4px 4px 0px 0px #0D3A40;`
- **Transitions**: When hovering, elements should translate slightly and change shadow offset for a tactile feel:
  - *Hover effect*: `hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#0D3A40] transition-all duration-200`
- **Edges**: Use gentle rounding. For cards, use `rounded-xl` or `rounded-2xl` (12px to 16px). For badges/pills, use `rounded-full`.

### 3. Typography
- **Headings**: Use bold, solid, uppercase or heavy-titlecase typography.
  - Recommended fonts: `Outfit`, `Clash Display`, or `Cabinet Grotesk`.
  - Heading styles: `font-bold tracking-tight text-[#0D3A40] uppercase`
- **Body Text**: Use clean, highly-readable sans-serif typography like `Inter` or `Plus Jakarta Sans`.

---

## Mascot & Asset Design
The signature mascot **must strictly be** a retro-style, 1930s rubber-hose inspired cartoon sheet of paper.

### Mascot Character Traits:
- **Strict Shape Requirement**: The character must always be a rectangular sheet of paper (with straight or slightly hand-drawn borders, notepad lines, or page guidelines). It **must not** have any other shape (such as circular blobs, stars, animals, or generic devices).
- **Physical Features**: A sheet of paper with a folded corner (usually top-right) or a red binder clip/paper clip at the top.
- **Limbs & Face**: Big, expressive cartoon eyes (pie-cut eyes or black eyes with white pupils), white cartoon gloves (rubber-hose style), and thin black limbs/boots.
- **Color**: Bright yellow body color (`#FFE875` / `#FFDC33`).
- **Poses**: Typing on a laptop, looking through a magnifying glass, pointing at lists, checking boxes.
- You can find the reference mascot asset under `resources/mascot.png`.

---

## Code Templates & Implementations

### 1. Wroth-Style Card Component (Tailwind / Vue)
```vue
<template>
  <div class="bg-white border-2 border-[#0D3A40] rounded-2xl p-6 shadow-[4px_4px_0px_0px_#0D3A40] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#0D3A40] transition-all duration-200 text-[#0D3A40]">
    <div class="flex items-center justify-between mb-4">
      <span class="bg-[#D4E5D4] text-xs font-bold px-3 py-1 rounded-full border border-[#0D3A40] uppercase">
        Feature
      </span>
      <span class="text-sm font-semibold">01</span>
    </div>
    <h3 class="text-xl font-bold mb-2 uppercase tracking-wide">
      Smart Content Creation
    </h3>
    <p class="text-sm text-gray-700 leading-relaxed mb-4">
      Generate high-quality, structured articles quickly using our intelligent AI writing assistance tools.
    </p>
    <div class="flex justify-end">
      <button class="text-xs font-bold underline hover:text-[#FFE875] transition-colors">
        Learn More
      </button>
    </div>
  </div>
</template>
```

### 2. Retro-brutalist CTA Button
```html
<button class="bg-[#0D3A40] text-[#F9F9F6] font-bold py-3 px-6 rounded-xl border-2 border-[#0D3A40] shadow-[3px_3px_0px_0px_#FFE875] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#FFE875] transition-all duration-100 uppercase tracking-wider text-sm">
  Get Started
</button>
```

### 3. Hero Section Wrapper
```html
<div class="bg-[#F9F9F6] border-b-2 border-[#0D3A40] py-20 px-6 relative overflow-hidden flex flex-col items-center text-center">
  <!-- Wavy pattern overlay or cartoon elements -->
  <div class="absolute inset-0 bg-[radial-gradient(#D4E5D4_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-40"></div>
  
  <div class="relative z-10 max-w-3xl">
    <slot />
  </div>
</div>
```

---

## Best Practices
1. **Never use generic pure black**: Always use Forest Teal (`#0D3A40` or `#072A2E`) for borders and text to keep the cozy aesthetic.
2. **Combine light Sage and light Cream**: Alternating between section backgrounds of Sage Green and Warm Cream creates a premium, calm, and readable flow.
3. **Mascot Placement**: Place cartoon mascots dynamically around boundaries, overlapping cards, or peeking from the side of the screen to give the page "life" and break strict grid layouts.
4. **Mascot Shape Constraint**: Always use a rectangular sheet of paper for the mascot character. Avoid any other characters, organic shapes, or mascot styles that deviate from the rectangular paper format.

