---
name: eco-infinity-essence
description: Guides the agent in applying Eco-Infinity's visual essence and design system. Features a glowing planet logo theme with dark/medium blue, turquoise rings, and bright aquamarine neon highlights.
---

# Eco-Infinity Visual Essence & Design System

This skill guides the agent in implementing web interfaces that reflect the tech-ecological, clean, and futuristic essence of **Eco-Infinity**. The design features a modern cosmic harmony combining rich blues, glowing neon aquamarine lights, clean white canvases, and soft blueish-gray shadows.

---

## Brand Colors & Design System

To represent the essence of Eco-Infinity, always adhere to the following color palette:

| Name | Hex Code | Tailwind Representation | Design Purpose |
| :--- | :--- | :--- | :--- |
| **Dark Blue** (Azul Oscuro) | `#1D4088` | `bg-[#1D4088]`, `text-[#1D4088]`, `border-[#1D4088]` | Borders, text, high-contrast structures, dark buttons, depth/contrast |
| **Medium Blue** (Azul Medio) | `#3474BE` | `bg-[#3474BE]`, `text-[#3474BE]` | Transition colors, main body highlights, primary actions |
| **Cyan / Turquoise** (Cian) | `#70C3D4` | `bg-[#70C3D4]`, `text-[#70C3D4]` | Planet ring element, secondary accents, borders, icons |
| **Bright Aquamarine** (Brillante) | `#A0F0DF` | `bg-[#A0F0DF]`, `text-[#A0F0DF]` | Point of light, glow effects, neon indicators, premium focus states |
| **Light Blueish Gray** (Gris) | `#D8E2F0` | `bg-[#D8E2F0]`, `border-[#D8E2F0]` | Base shadows, subtle border highlights, soft section backgrounds |
| **White** (Blanco) | `#FFFFFF` | `bg-white`, `text-white` | Solid clean canvas background, crisp card bodies |

---

## Logo & Visual Assets

The logo of **Eco-Infinity** is a futuristic glowing planet: a blue sphere with a tilted cyan/turquoise ring, a neon aquamarine glow in the center, and a soft base shadow.

### Dynamic SVG Logo Implementation
Use this responsive SVG representation for logos, icons, and hero graphic elements:

```xml
<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
  <defs>
    <!-- Planet Radial Gradient for volume, depth, and glow -->
    <radialGradient id="planetSphere" cx="42%" cy="38%" r="65%" fx="32%" fy="28%">
      <stop offset="0%" stop-color="#A0F0DF" />
      <stop offset="25%" stop-color="#70C3D4" />
      <stop offset="65%" stop-color="#3474BE" />
      <stop offset="100%" stop-color="#1D4088" />
    </radialGradient>
    
    <!-- Ring Gradient -->
    <linearGradient id="planetRing" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#70C3D4" />
      <stop offset="50%" stop-color="#A0F0DF" />
      <stop offset="100%" stop-color="#3474BE" />
    </linearGradient>
    
    <!-- Glow Filter for Neon effect -->
    <filter id="neonGlow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <!-- Base Projected Shadow -->
  <ellipse cx="100" cy="172" rx="55" ry="8" fill="#D8E2F0" opacity="0.8" />

  <!-- Ring Back Arc (renders behind planet) -->
  <g transform="rotate(-18, 100, 100)">
    <path d="M 22 100 A 78 20 0 0 1 178 100" stroke="url(#planetRing)" stroke-width="11" stroke-linecap="round" opacity="0.85" />
  </g>

  <!-- Main Planet Body -->
  <circle cx="100" cy="100" r="48" fill="url(#planetSphere)" stroke="#1D4088" stroke-width="2.5" />

  <!-- Ring Front Arc (renders in front of planet to complete 3D effect) -->
  <g transform="rotate(-18, 100, 100)">
    <path d="M 178 100 A 78 20 0 0 1 22 100" stroke="url(#planetRing)" stroke-width="11" stroke-linecap="round" />
  </g>

  <!-- Central Light / Neon Spot Glow -->
  <circle cx="86" cy="80" r="10" fill="#A0F0DF" filter="url(#neonGlow)" opacity="0.5" pointer-events="none" />
  <circle cx="84" cy="78" r="4" fill="#FFFFFF" opacity="0.8" pointer-events="none" />
</svg>
```

---

## Tailwind Configuration Integration

To support this design system, extend your `tailwind.config.ts` as follows:

```typescript
export default {
  theme: {
    extend: {
      colors: {
        ecoinfinity: {
          dark: '#1D4088',       // Azul Oscuro
          medium: '#3474BE',     // Azul Medio
          cyan: '#70C3D4',       // Cian/Turquesa
          neon: '#A0F0DF',       // Aguamarina Brillante
          gray: '#D8E2F0',       // Gris Azulado Claro
          white: '#FFFFFF',      // Blanco
        }
      },
      boxShadow: {
        'neon-glow': '0 0 15px rgba(160, 240, 223, 0.4), 0 0 30px rgba(112, 195, 212, 0.2)',
        'soft-depth': '0 10px 25px -5px rgba(29, 64, 136, 0.08), 0 8px 10px -6px rgba(29, 64, 136, 0.04)',
        'planet-shadow': '0 20px 40px -15px rgba(29, 64, 136, 0.15)'
      },
      animation: {
        'orbit-slow': 'spin 25s linear infinite',
        'float-planet': 'floatPlanet 6s ease-in-out infinite',
        'neon-pulse': 'neonPulse 2.5s ease-in-out infinite'
      },
      keyframes: {
        floatPlanet: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(2deg)' }
        },
        neonPulse: {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 5px #A0F0DF)' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 15px #A0F0DF)' }
        }
      }
    }
  }
}
```

---

## UI Component Templates & Guidelines

### 1. Premium Button Component
Use sleek outlines or clean gradients with smooth transition glows.

```vue
<!-- components/landing/Button.vue -->
<template>
  <button
    :class="[
      'font-bold rounded-xl tracking-wide transition-all duration-300 transform active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-[#70C3D4]',
      styleName === 'primary' ? 'bg-[#1D4088] text-white hover:bg-[#3474BE] hover:shadow-neon-glow' : '',
      styleName === 'neon' ? 'bg-[#A0F0DF] text-[#1D4088] hover:bg-[#70C3D4] hover:text-white shadow-md' : '',
      styleName === 'outline' ? 'bg-transparent text-[#1D4088] border-2 border-[#1D4088] hover:bg-[#D8E2F0]' : '',
      size === 'md' ? 'px-6 py-2.5 text-sm' : 'px-8 py-3.5 text-base'
    ]"
  >
    <slot />
  </button>
</template>
```

### 2. Glassmorphism Card (Soft Depth & Accent Glow)
Use subtle borders, soft shadows, and light up borders on hover using the turquoise/aquamarine colors.

```vue
<!-- components/landing/Card.vue -->
<template>
  <div class="group bg-white/80 backdrop-blur-md border border-[#D8E2F0] rounded-2xl p-6 shadow-soft-depth hover:border-[#70C3D4] hover:shadow-neon-glow hover:-translate-y-1 transition-all duration-300">
    <div class="w-12 h-12 rounded-xl bg-[#D8E2F0]/50 flex items-center justify-center text-[#1D4088] group-hover:bg-[#A0F0DF] group-hover:text-[#1D4088] transition-colors duration-300 mb-5">
      <!-- Icon slot or SVG -->
      <slot name="icon" />
    </div>
    <h3 class="text-lg font-bold text-[#1D4088] mb-2 group-hover:text-[#3474BE] transition-colors">
      <slot name="title" />
    </h3>
    <p class="text-sm text-[#1D4088]/80 leading-relaxed">
      <slot name="description" />
    </p>
  </div>
</template>
```

### 3. Hero Section Wrapper
The Hero Section should use clean backgrounds with abstract grid lines or glowing light sources matching the logo planet's central glow.

```vue
<!-- components/landing/Hero.vue -->
<template>
  <div class="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-white py-20">
    <!-- Subtle technical grid background -->
    <div class="absolute inset-0 bg-[linear-gradient(rgba(216,226,240,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(216,226,240,0.4)_1px,transparent_1px)] [background-size:40px_40px] opacity-40"></div>
    
    <!-- Radiant ambient glow centered on the page, mimicking the logo light -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#A0F0DF]/15 to-[#70C3D4]/5 blur-[80px] pointer-events-none"></div>

    <div class="container mx-auto px-6 relative z-10 text-center max-w-4xl">
      <slot />
    </div>
  </div>
</template>
```

---

## Best Practices

1. **Avoid Harsh Solid Blacks**: Never use `#000000` for text or borders. Use Dark Blue `#1D4088` for primary text and structural borders to maintain a harmonious, integrated aesthetic.
2. **Neon Accents sparingly**: Use the Bright Aquamarine `#A0F0DF` and Cyan `#70C3D4` for badges, points of emphasis, active buttons, or glowing indicators. Overusing them will dilute their glowing, premium effect.
3. **Smooth Micro-animations**: Always include slight translate transformations (`hover:-translate-y-1`) combined with shadow transitions (`transition-all duration-300`) to give components a tactile, modern feel.
4. **Volume & Shadows**: Utilize Light Blueish Gray `#D8E2F0` for shadows, dividing lines, and subtle background shapes to ground elements without introducing high-contrast dark noise.
