<script setup>
const show = ref(true);
const fadeOut = ref(false);

onMounted(() => {
  // Lock body scroll while splash screen is active
  document.body.style.overflow = "hidden";
  
  // Start fade out transition after 1.8 seconds
  setTimeout(() => {
    fadeOut.value = true;
    
    // Completely remove from DOM after the fade transition ends (800ms)
    setTimeout(() => {
      show.value = false;
      document.body.style.overflow = "";
    }, 800);
  }, 1800);
});
</script>

<template>
  <div
    v-if="show"
    :class="[
      'fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#060D1E] transition-all duration-800 ease-in-out',
      fadeOut ? 'opacity-0 scale-[1.04] pointer-events-none' : 'opacity-100 scale-100'
    ]"
  >
    <!-- Cosmic background grid elements -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(29,64,136,0.18)_0%,transparent_75%)] pointer-events-none"></div>
    <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:40px_40px] opacity-35 pointer-events-none"></div>

    <!-- Center Content Wrapper -->
    <div class="relative z-10 flex flex-col items-center gap-6">
      
      <!-- Glowing Planet SVG Container -->
      <div class="relative w-36 h-36 sm:w-44 sm:h-44 animate-pulse-slow">
        <!-- SVG Planet Logo -->
        <svg class="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="planetSphereSplash" cx="42%" cy="38%" r="65%" fx="32%" fy="28%">
              <stop offset="0%" stop-color="#A0F0DF" />
              <stop offset="25%" stop-color="#70C3D4" />
              <stop offset="65%" stop-color="#3474BE" />
              <stop offset="100%" stop-color="#1D4088" />
            </radialGradient>
            <linearGradient id="planetRingSplash" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#70C3D4" />
              <stop offset="50%" stop-color="#A0F0DF" />
              <stop offset="100%" stop-color="#3474BE" />
            </linearGradient>
            <filter id="neonGlowSplash" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="10" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          
          <ellipse cx="100" cy="172" rx="55" ry="8" fill="#02040A" opacity="0.85" />
          <g transform="rotate(-18, 100, 100)">
            <path d="M 22 100 A 78 20 0 0 1 178 100" stroke="url(#planetRingSplash)" stroke-width="11" stroke-linecap="round" opacity="0.85" />
          </g>
          <circle cx="100" cy="100" r="48" fill="url(#planetSphereSplash)" stroke="#1D4088" stroke-width="2.5" />
          <g transform="rotate(-18, 100, 100)">
            <path d="M 178 100 A 78 20 0 0 1 22 100" stroke="url(#planetRingSplash)" stroke-width="11" stroke-linecap="round" />
          </g>
          <circle cx="86" cy="80" r="10" fill="#A0F0DF" filter="url(#neonGlowSplash)" opacity="0.5" pointer-events="none" />
          <circle cx="84" cy="78" r="4" fill="#FFFFFF" opacity="0.8" pointer-events="none" />
        </svg>
      </div>

      <!-- Startup Name -->
      <div class="text-center mt-2 flex flex-col items-center">
        <h1 class="text-3.5xl sm:text-4.5xl font-serif font-bold text-white tracking-[0.25em] relative pl-[0.25em]">
          <span class="text-shimmer bg-gradient-to-r from-[#FFFFFF] via-[#A0F0DF] to-[#70C3D4] bg-clip-text text-transparent">ECO-INFINITY</span>
        </h1>
        <p class="text-[9px] font-sans font-bold tracking-[0.25em] text-[#70C3D4] uppercase mt-3.5 opacity-80 flex items-center gap-1.5 animate-pulse">
          <span>Sistemas</span>
          <span class="opacity-40">//</span>
          <span>Tecnología</span>
          <span class="opacity-40">//</span>
          <span>Sustentabilidad</span>
        </p>
      </div>

      <!-- High-tech Loading Progress Indicator -->
      <div class="mt-8 flex flex-col items-center gap-3">
        <div class="w-16 h-0.5 bg-[#1D4088] rounded-full overflow-hidden relative">
          <div class="absolute inset-y-0 left-0 w-1/2 bg-[#A0F0DF] rounded-full animate-progress-glow"></div>
        </div>
        <span class="text-[8px] font-mono tracking-[0.25em] text-[#A0F0DF]/60 uppercase pl-[0.25em]">
          Inicializando...
        </span>
      </div>

    </div>
  </div>
</template>

<style scoped>
.duration-800 {
  transition-duration: 800ms;
}

@keyframes pulseSlow {
  0%, 100% {
    transform: translateY(0px) scale(1);
    filter: drop-shadow(0 0 25px rgba(160, 240, 223, 0.35));
  }
  50% {
    transform: translateY(-6px) scale(1.02);
    filter: drop-shadow(0 0 45px rgba(160, 240, 223, 0.65));
  }
}

.animate-pulse-slow {
  animation: pulseSlow 3s ease-in-out infinite;
}

@keyframes progressGlow {
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(120%);
  }
  100% {
    transform: translateX(250%);
  }
}

.animate-progress-glow {
  animation: progressGlow 1.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}
</style>
