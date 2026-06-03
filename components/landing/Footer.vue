<template>
  <footer class="footer-bg border-t border-white/10 pt-12 pb-10">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex flex-col items-center gap-4">
        <!-- Logo with mini planet logo -->
        <a href="/" class="flex items-center gap-2 group mt-1">
          <svg class="w-7 h-7 transition-all duration-500 group-hover:scale-105 group-hover:rotate-[15deg]" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="planetSphereFooter" cx="42%" cy="38%" r="65%" fx="32%" fy="28%">
                <stop offset="0%" stop-color="#A0F0DF" />
                <stop offset="25%" stop-color="#70C3D4" />
                <stop offset="65%" stop-color="#3474BE" />
                <stop offset="100%" stop-color="#1D4088" />
              </radialGradient>
              <linearGradient id="planetRingFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#70C3D4" />
                <stop offset="50%" stop-color="#A0F0DF" />
                <stop offset="100%" stop-color="#3474BE" />
              </linearGradient>
              <filter id="neonGlowFooter" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <ellipse cx="100" cy="172" rx="55" ry="8" fill="#02040A" opacity="0.85" />
            <g transform="rotate(-18, 100, 100)">
              <path d="M 22 100 A 78 20 0 0 1 178 100" stroke="url(#planetRingFooter)" stroke-width="11" stroke-linecap="round" opacity="0.85" />
            </g>
            <circle cx="100" cy="100" r="48" fill="url(#planetSphereFooter)" stroke="#1D4088" stroke-width="2.5" />
            <g transform="rotate(-18, 100, 100)">
              <path d="M 178 100 A 78 20 0 0 1 22 100" stroke="url(#planetRingFooter)" stroke-width="11" stroke-linecap="round" />
            </g>
            <circle cx="86" cy="80" r="10" fill="#A0F0DF" filter="url(#neonGlowFooter)" opacity="0.5" pointer-events="none" />
            <circle cx="84" cy="78" r="4" fill="#FFFFFF" opacity="0.8" pointer-events="none" />
          </svg>
          <span class="text-lg font-serif font-bold text-white">
            EcoInfinity
          </span>
        </a>

        <p class="text-center text-xs text-white/60 hover:text-white transition-colors duration-300 mt-1 tracking-wide font-bold">
          © {{ new Date().getFullYear() }} Eco-Infinity. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-bg { background: transparent; }
</style>
