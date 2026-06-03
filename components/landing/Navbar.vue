<script setup>
const leftItems = [
  { title: "Inicio", path: "/" },
  { title: "Nosotros", path: "/about" },
  { title: "Servicios", path: "/#servicio" },
];
const rightItems = [
  { title: "Proyectos", path: "/#proyectos" },
  { title: "Clientes",  path: "/#clientes" },
  { title: "Contacto",  path: "/contact" },
];
const allItems = [...leftItems, ...rightItems];
const open = ref(false);
</script>

<template>
  <!-- Global Defs for Navbar SVGs (Prevents rendering bugs with display:none in Safari/iOS) -->
  <svg class="absolute w-0 h-0 pointer-events-none" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <radialGradient id="planetSphereNav" cx="42%" cy="38%" r="65%" fx="32%" fy="28%">
        <stop offset="0%" stop-color="#A0F0DF" />
        <stop offset="25%" stop-color="#70C3D4" />
        <stop offset="65%" stop-color="#3474BE" />
        <stop offset="100%" stop-color="#1D4088" />
      </radialGradient>
      <linearGradient id="planetRingNav" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#70C3D4" />
        <stop offset="50%" stop-color="#A0F0DF" />
        <stop offset="100%" stop-color="#3474BE" />
      </linearGradient>
      <filter id="neonGlowNav" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="8" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  </svg>

  <div class="sticky top-0 z-50 navbar-glass transition-all duration-500">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      
      <!-- Desktop Split Centered Navigation -->
      <div class="hidden lg:grid grid-cols-3 w-full items-center py-5 relative">
        
        <!-- Left Side: Links -->
        <div class="flex justify-end items-center gap-8 pr-12">
          <a v-for="item of leftItems" :key="item.title" :href="item.path"
            class="text-white hover:text-[#A0F0DF] font-extrabold transition-colors duration-300 text-sm tracking-wider uppercase relative nav-link-hover">
            {{ item.title }}
          </a>
        </div>

        <!-- Center: Floating Planet Logo Container -->
        <div class="flex justify-center items-center relative">
          <a href="/" 
             class="logo-circle-container relative z-20 flex items-center justify-center w-20 h-20 rounded-full border-2 border-[#3474BE] bg-[#060D1E] hover:border-[#A0F0DF] hover:shadow-neon-glow transition-all duration-300 transform hover:scale-105">
            <!-- Dynamic Brand Planet SVG Logo -->
            <svg class="w-13 h-13 transition-transform duration-500 hover:rotate-[12deg]" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="100" cy="172" rx="55" ry="8" fill="#02040A" opacity="0.85" />
              <g transform="rotate(-18, 100, 100)">
                <path d="M 22 100 A 78 20 0 0 1 178 100" stroke="url(#planetRingNav)" stroke-width="11" stroke-linecap="round" opacity="0.85" />
              </g>
              <circle cx="100" cy="100" r="48" fill="url(#planetSphereNav)" stroke="#1D4088" stroke-width="2.5" />
              <g transform="rotate(-18, 100, 100)">
                <path d="M 178 100 A 78 20 0 0 1 22 100" stroke="url(#planetRingNav)" stroke-width="11" stroke-linecap="round" />
              </g>
              <circle cx="86" cy="80" r="10" fill="#A0F0DF" filter="url(#neonGlowNav)" opacity="0.5" pointer-events="none" />
              <circle cx="84" cy="78" r="4" fill="#FFFFFF" opacity="0.8" pointer-events="none" />
            </svg>
          </a>
        </div>

        <!-- Right Side: Links -->
        <div class="flex justify-start items-center gap-8 pl-12">
          <a v-for="item of rightItems" :key="item.title" :href="item.path"
            class="text-white hover:text-[#A0F0DF] font-extrabold transition-colors duration-300 text-sm tracking-wider uppercase relative nav-link-hover">
            {{ item.title }}
          </a>
        </div>
      </div>

      <!-- Mobile Navigation Bar -->
      <div class="flex lg:hidden justify-between items-center py-5 w-full">
        <a href="/" class="flex items-center gap-2 group">
          <!-- Tiny Planet SVG Logo -->
          <svg class="w-8 h-8 transition-transform duration-500 group-hover:rotate-[12deg]" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="100" cy="172" rx="55" ry="8" fill="#02040A" opacity="0.85" />
            <g transform="rotate(-18, 100, 100)">
              <path d="M 22 100 A 78 20 0 0 1 178 100" stroke="url(#planetRingNav)" stroke-width="11" stroke-linecap="round" opacity="0.85" />
            </g>
            <circle cx="100" cy="100" r="48" fill="url(#planetSphereNav)" stroke="#1D4088" stroke-width="2.5" />
            <g transform="rotate(-18, 100, 100)">
              <path d="M 178 100 A 78 20 0 0 1 22 100" stroke="url(#planetRingNav)" stroke-width="11" stroke-linecap="round" />
            </g>
            <circle cx="86" cy="80" r="10" fill="#A0F0DF" filter="url(#neonGlowNav)" opacity="0.5" pointer-events="none" />
            <circle cx="84" cy="78" r="4" fill="#FFFFFF" opacity="0.8" pointer-events="none" />
          </svg>
          <span class="text-lg font-serif font-bold text-white tracking-tight">EcoInfinity</span>
        </a>
        
        <button @click="open = !open" class="text-white hover:text-[#A0F0DF] focus:outline-none transition-colors p-2 rounded-lg hover:bg-white/10">
          <svg class="w-6 h-6 transition-transform duration-300" :class="{ 'rotate-90': open }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!open" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Mobile Dropdown Menu -->
      <nav v-show="open" class="lg:hidden mt-2 pb-4 overflow-hidden border-t border-white/5 transition-all duration-300">
        <ul class="flex flex-col gap-1 mt-2">
          <li v-for="item of allItems" :key="item.title">
            <a :href="item.path" @click="open = false"
              class="block px-4 py-2.5 rounded-lg text-white hover:text-[#A0F0DF] hover:bg-white/5 font-bold transition-all text-sm tracking-wider uppercase">
              {{ item.title }}
            </a>
          </li>
        </ul>
      </nav>

    </div>
  </div>
</template>

<style scoped>
.navbar-glass {
  background: rgba(4, 9, 21, 0.96); /* Deeper space obsidian for high contrast */
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 2.5px solid rgba(160, 240, 223, 0.45); /* Brighter glowing brand aquamarine border */
  box-shadow: 0 15px 40px -10px rgba(0, 0, 0, 0.8), 0 2px 25px rgba(160, 240, 223, 0.12); /* Stronger drop shadow separation */
}
.logo-circle-container {
  box-shadow: 0 0 15px rgba(52, 116, 190, 0.4), inset 0 0 10px rgba(160, 240, 223, 0.1);
  /* Make it overlap nicely below the bottom border */
  position: absolute;
  top: 50%;
  transform: translateY(-30%);
}
.nav-link-hover::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 2px;
  background: #A0F0DF;
  transform: scaleX(0);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.nav-link-hover:hover::after {
  transform: scaleX(1);
}
</style>
