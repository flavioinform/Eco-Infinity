<template>
  <div class="cta-bg py-24 relative overflow-hidden">
    <!-- Cosmic ambient glow -->
    <div class="absolute inset-0 bg-transparent pointer-events-none" aria-hidden="true"></div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <div class="reveal-scale mx-auto max-w-4xl rounded-3xl px-8 sm:px-16 py-16 text-center bg-white/5 border border-white/10 text-white shadow-planet-shadow relative overflow-hidden group">
        
        <!-- Abstract cosmic orbits/grid line decoration inside the CTA card -->
        <div class="absolute inset-0 pointer-events-none opacity-20 z-0">
          <svg class="w-full h-full" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="700" cy="300" r="250" stroke="#A0F0DF" stroke-width="1.5" stroke-dasharray="8 4" />
            <circle cx="700" cy="300" r="180" stroke="#70C3D4" stroke-width="1" />
            <circle cx="700" cy="300" r="100" stroke="#A0F0DF" stroke-width="2" />
          </svg>
        </div>

        <div class="relative z-10 flex flex-col items-center">
          <!-- Tech/Eco Badge -->
          <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-md border-l-2 border-l-[#A0F0DF] border-y border-r border-[#70C3D4]/25 bg-[#0C1836]/65 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_4px_12px_rgba(0,0,0,0.4)] select-none hover:border-[#A0F0DF]/50 transition-all duration-300 mb-8">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A0F0DF] opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-[#A0F0DF]"></span>
            </span>
            <span class="text-[9px] font-bold uppercase tracking-[0.22em] text-white/90 font-sans flex items-center gap-1.5">
              <span>Eco-Infinity</span>
              <span class="text-[#70C3D4]/50 font-normal">//</span>
              <span class="text-[#A0F0DF]">Empieza Hoy</span>
            </span>
          </div>

          <!-- Title -->
          <h2 class="text-white font-serif text-3xl sm:text-5xl lg:text-6xl leading-tight tracking-tight">
            Trabaja con nosotros de la<br class="hidden sm:inline" /> forma más
            <span class="text-shimmer bg-gradient-to-r from-[#A0F0DF] to-[#70C3D4] bg-clip-text text-transparent">rápida y eficiente.</span>
          </h2>
          
          <!-- CTA Action -->
          <div class="flex justify-center mt-10">
            <LandingLink href="/contact" styleName="inverted"
              class="uppercase tracking-wider font-extrabold text-sm px-8 py-3.5">
              Contacto
            </LandingLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cta-bg {
  background-color: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
