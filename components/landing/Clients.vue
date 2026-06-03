<template>
  <!-- 
    ===================================================
    CLIENTS SECTION  ·  Eco-Infinity Created Showcase
    ===================================================
  -->
  <div class="clients-bg py-24 relative overflow-hidden" id="clientes">
    <!-- Subtle technical grid background -->
    <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:50px_50px] opacity-25 pointer-events-none" aria-hidden="true"></div>
    
    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center mb-16 reveal-on-scroll flex flex-col items-center">
        <!-- Tech/Eco Badge -->
        <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-md border-l-2 border-l-[#A0F0DF] border-y border-r border-[#70C3D4]/25 bg-[#0C1836]/65 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_4px_12px_rgba(0,0,0,0.4)] select-none hover:border-[#A0F0DF]/50 transition-all duration-300 mb-5">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A0F0DF] opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-[#A0F0DF]"></span>
          </span>
          <span class="text-[9px] font-bold uppercase tracking-[0.22em] text-white/90 font-sans flex items-center gap-1.5">
            <span>Eco-Infinity</span>
            <span class="text-[#70C3D4]/50 font-normal">//</span>
            <span class="text-[#A0F0DF]">Casos de Éxito</span>
          </span>
        </div>

        <h2 class="text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight">
          Nuestros <span class="text-[#3474BE]">Clientes</span>
        </h2>
        
        <p class="text-md mt-4 text-white/75 max-w-2xl mx-auto leading-relaxed">
          Proyectos y plataformas digitales desarrollados a medida que optimizan la presencia y operatividad de nuestros aliados.
        </p>
      </div>

      <!-- Clients Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(item, index) in clients"
          :key="item.name"
          class="ecoinfinity-card overflow-hidden group flex flex-col justify-between reveal-scale"
          :style="`animation-delay:${index * 80}ms`"
        >
          <!-- Screenshot Container -->
          <div>
            <div class="aspect-[16/10] overflow-hidden relative border-b border-[#D8E2F0] bg-[#D8E2F0]/20 flex items-start justify-center">
              <img 
                :src="item.screenshot" 
                :alt="`Captura de pantalla de ${item.name}`" 
                class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 filter contrast-[98%] brightness-[99%]" 
                loading="lazy"
              />
              <div class="absolute inset-0 bg-[#1D4088]/5 group-hover:bg-transparent transition-all duration-300"></div>
            </div>

            <!-- Content Area -->
            <div class="p-6">
              <!-- Header -->
              <div class="flex items-center justify-between mb-3.5">
                <span class="px-2.5 py-0.5 bg-[#D8E2F0]/60 text-[#1D4088] text-[10px] font-bold uppercase tracking-wider rounded-md border-l border-l-[#3474BE]">
                  {{ item.badge }}
                </span>
              </div>

              <h3 class="text-xl font-serif font-bold text-[#1D4088] group-hover:text-[#3474BE] transition-colors duration-300 mb-2">
                {{ item.name }}
              </h3>

              <p class="text-[#1D4088]/80 text-xs leading-relaxed font-semibold">
                {{ item.description }}
              </p>
            </div>
          </div>

          <!-- Footer Button -->
          <div class="p-6 pt-0 mt-auto">
            <LandingLink 
              :href="item.url" 
              target="_blank" 
              rel="noopener noreferrer"
              styleName="outlineDark"
              size="md"
              class="w-full text-xs uppercase tracking-wider font-extrabold flex items-center justify-center gap-1.5"
            >
              <span>Visitar sitio</span>
              <Icon class="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" name="lucide:external-link" />
            </LandingLink>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import imgMelschile from "~/assets/clientes/melschile.png";
import imgClubmaster from "~/assets/clientes/clubmaster.png";
import imgElectrix from "~/assets/clientes/electrix.png";

const clients = [
  {
    name: "MEL'S Chile",
    badge: "Sitio Web Corporativo",
    screenshot: imgMelschile,
    url: "https://www.melschile.cl/",
    description: "Plataforma web comercial y de catálogo electrónico optimizada para una navegación fluida, destacando los servicios y productos de la empresa con alta velocidad de carga."
  },
  {
    name: "Club Master Iquique",
    badge: "Plataforma Deportiva",
    screenshot: imgClubmaster,
    url: "https://www.clubmasteriquique.cl/",
    description: "Portal institucional y de gestión para el Club Master Iquique, facilitando la publicación de eventos, inscripciones, noticias locales y vinculación con los socios."
  },
  {
    name: "Electrix 2.0",
    badge: "Plataforma SaaS de Control",
    screenshot: imgElectrix,
    url: "https://electrix-2-0.vercel.app/login",
    description: "Sistema web avanzado orientado al monitoreo de consumo eléctrico y eficiencia energética en tiempo real, provisto de dashboards interactivos y control de accesos."
  }
];
</script>

<style scoped>
.clients-bg {
  background-color: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
</style>
