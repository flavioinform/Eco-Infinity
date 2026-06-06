<template>
  <!--
    ═══════════════════════════════════════════════════
    HERO  ·  Eco-Infinity Futuristic Essence Redesign
    ═══════════════════════════════════════════════════
  -->
  <main class="hero-root relative overflow-hidden py-16 lg:py-24 min-h-screen w-full flex items-center">
    
    <!-- Ambient tech grid and neon background blur glow -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      <div class="absolute top-[25%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#A0F0DF]/15 to-[#70C3D4]/5 blur-[90px] opacity-75"></div>
      
      <!-- Decorative Floating Coordinates / Nodes (Ecoinfinity style) -->
      <div class="absolute top-[18%] left-[10%] anim-float-a opacity-40">
        <svg class="w-8 h-8 text-[#70C3D4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="12" cy="12" r="8" stroke-dasharray="4 2" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      </div>
      <div class="absolute bottom-[25%] left-[6%] anim-float-b opacity-30">
        <svg class="w-6 h-6 text-[#A0F0DF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 2v20M2 12h20" stroke-dasharray="2 2" />
        </svg>
      </div>
      <div class="absolute top-[12%] right-[12%] anim-float-c opacity-40">
        <svg class="w-10 h-10 text-[#3474BE]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      </div>
      <div class="absolute bottom-[20%] right-[10%] anim-float-slow opacity-30">
        <svg class="w-8 h-8 text-[#70C3D4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="12" cy="12" r="5" fill="currentColor" fill-opacity="0.2" />
        </svg>
      </div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 place-items-center gap-12 min-h-[80vh]">
      
      <!-- Left: Text Column -->
      <div class="flex flex-col gap-6 items-start text-left lg:order-1">
        <!-- Tech/Eco Badge -->
        <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-md border-l-2 border-l-[#A0F0DF] border-y border-r border-[#70C3D4]/25 bg-[#0C1836]/65 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_4px_12px_rgba(0,0,0,0.4)] select-none hover:border-[#A0F0DF]/50 transition-all duration-300 anim-fade-up">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A0F0DF] opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-[#A0F0DF]"></span>
          </span>
          <span class="text-[9px] font-bold uppercase tracking-[0.22em] text-white/90 font-sans flex items-center gap-1.5">
            <span>Eco-Infinity</span>
            <span class="text-[#70C3D4]/50 font-normal">//</span>
            <span class="text-[#A0F0DF]">Innovación &amp; Sustentabilidad</span>
          </span>
        </div>

        <!-- Title -->
        <h1 class="hero-title anim-fade-up font-serif text-5xl lg:text-7.5xl leading-tight text-white tracking-tight">
          Eco-Infinity<br/>
          <span class="text-shimmer bg-gradient-to-r from-[#1D4088] via-[#3474BE] to-[#70C3D4] bg-clip-text text-transparent">Tech Startup</span>
        </h1>

        <!-- Description -->
        <p class="hero-desc anim-fade-up text-lg lg:text-xl text-white/80 max-w-xl leading-relaxed">
          Eco-Infinity es una startup  que ofrece servicios y venta de tecnologías integrales. Unimos
          <strong class="text-[#A0F0DF] font-bold">Innovación y Sustentabilidad</strong> para diseñar las soluciones del futuro.
        </p>

        <!-- CTA Button -->
        <div class="anim-fade-up mt-4">
          <LandingLink
            href="/contact"
            styleName="primary"
            class="text-md uppercase tracking-wider font-extrabold"
          >
            Contáctanos
          </LandingLink>
        </div>
      </div>

      <!-- Right: Tilted 3D Glowing Planet Showcase -->
      <div class="flex justify-center items-center lg:order-2 w-full max-w-sm sm:max-w-md relative">
        <div class="absolute -inset-4 bg-gradient-to-tr from-[#A0F0DF]/20 to-[#70C3D4]/5 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
        <div class="relative group w-full flex items-center justify-center">
          <!-- Dynamic High-Fidelity Planet SVG -->
          <svg class="w-72 h-72 sm:w-[420px] sm:h-[420px] anim-hero-float drop-shadow-[0_20px_40px_rgba(29,64,136,0.12)] transition-transform duration-700 hover:scale-105" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="planetSphereHero" cx="42%" cy="38%" r="65%" fx="32%" fy="28%">
                <stop offset="0%" stop-color="#A0F0DF" />
                <stop offset="25%" stop-color="#70C3D4" />
                <stop offset="65%" stop-color="#3474BE" />
                <stop offset="100%" stop-color="#1D4088" />
              </radialGradient>
              <linearGradient id="planetRingHero" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#70C3D4" />
                <stop offset="50%" stop-color="#A0F0DF" />
                <stop offset="100%" stop-color="#3474BE" />
              </linearGradient>
              <filter id="neonGlowHero" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="12" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            
            <!-- Base Shadow -->
            <ellipse cx="100" cy="175" rx="60" ry="10" fill="#02040A" opacity="0.9" />
            
            <!-- Ring Back -->
            <g transform="rotate(-18, 100, 100)">
              <path d="M 22 100 A 78 20 0 0 1 178 100" stroke="url(#planetRingHero)" stroke-width="11" stroke-linecap="round" opacity="0.85" />
            </g>
            
            <!-- Planet Body -->
            <circle cx="100" cy="100" r="48" fill="url(#planetSphereHero)" stroke="#1D4088" stroke-width="2.5" />
            
            <!-- Ring Front -->
            <g transform="rotate(-18, 100, 100)">
              <path d="M 178 100 A 78 20 0 0 1 22 100" stroke="url(#planetRingHero)" stroke-width="11" stroke-linecap="round" />
            </g>
            
            <!-- Glowing neon center -->
            <circle cx="86" cy="80" r="10" fill="#A0F0DF" filter="url(#neonGlowHero)" opacity="0.65" pointer-events="none" />
            <circle cx="84" cy="78" r="4" fill="#FFFFFF" opacity="0.85" pointer-events="none" />
          </svg>
        </div>
      </div>

    </div>
  </main>
</template>

<style scoped>
.hero-root {
  background-color: transparent;
}
.hero-badge {
  display: inline-flex;
  align-items: center;
}
.hero-title {
  font-family: 'DejaVu Serif', serif;
  letter-spacing: -0.01em;
}
</style>
