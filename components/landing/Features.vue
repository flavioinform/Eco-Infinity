<script setup>
const features = [
  {
    title: "Sitios Webs",
    description:
      "Desarrollo de sitios web modernos, responsivos, tecnologías actuales y enfocados en rendimiento, diseño profesional y experiencia de usuario.",
    icon: "bx:bx-code-alt",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Area Robotica",
    description:
      "Diseño y creación de robots autónomos y controlados remotamente, integrando sensores, LoRa, microcontroladores y visión computacional para proyectos educativos e industriales.",
    icon: "bx:bxs-bot",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Big-Data",
    description:
      "Análisis avanzado de grandes volúmenes de datos utilizando pipelines, modelos predictivos, dashboards y visualizaciones para toma de decisiones basada en información real.",
    icon: "bx:bx-line-chart",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Monitoreo en tiempo real",
    description:
      "Sistemas capaces de capturar, procesar y transmitir datos en tiempo real mediante LoRa, IoT y sensores especializados, con paneles dinámicos y alertas instantáneas.",
    icon: "bx:bx-pulse",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Productos electronicos",
    description:
      "Desarrollo de hardware personalizado, prototipos electrónicos, sensores, automatización y módulos integrados para soluciones tecnológicas a medida.",
    icon: "bx:bxs-chip",
    image: "https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Eficiencia",
    description:
      "Optimización de procesos, automatización inteligente y tecnologías que aumentan la eficiencia operativa en industrias, campo, educación y sistemas energéticos.",
    icon: "bx:bxs-bolt",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
  },
];
</script>

<template>
  <div class="features-bg py-24 relative overflow-hidden" id="servicio">
    <!-- Subtle technical grid background decoration -->
    <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:40px_40px] opacity-40 pointer-events-none" aria-hidden="true"></div>

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
            <span class="text-[#A0F0DF]">Servicios</span>
          </span>
        </div>

        <h2 class="text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight">
          Lo que <span class="text-[#3474BE]">podemos hacer</span> por ti
        </h2>
        
        <p class="text-md mt-4 text-white/75 max-w-2xl mx-auto leading-relaxed">
          Soluciones tecnológicas diseñadas para impulsar tu negocio
        </p>
      </div>

      <!-- Services Cards Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(item, index) in features"
          :key="index"
          class="relative h-[420px] rounded-2xl overflow-hidden group transition-all duration-300 reveal-scale border border-white/10 hover:border-[#70C3D4]/50 hover:shadow-neon-glow hover:-translate-y-1"
          :style="`animation-delay:${index * 60}ms`"
        >
          <!-- Background Image -->
          <img :src="item.image" :alt="item.title" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-90 brightness-95" />
          
          <!-- Dark Overlay Gradient -->
          <div class="absolute inset-0 bg-gradient-to-t from-[#060D1E] via-[#060D1E]/60 to-transparent z-10"></div>
          
          <!-- Card Content (positioned over gradient at the bottom) -->
          <div class="absolute inset-x-0 bottom-0 p-6 z-20 flex flex-col items-start text-left">
            
            <!-- Icon Box -->
            <div class="w-10 h-10 rounded-lg bg-white/15 backdrop-blur-md flex items-center justify-center mb-4 text-[#A0F0DF] border border-white/10 group-hover:bg-[#A0F0DF] group-hover:text-[#1D4088] transition-all duration-300">
              <Icon class="w-5 h-5 transition-transform duration-300 group-hover:scale-110" :name="item.icon" />
            </div>

            <!-- Title -->
            <h3 class="font-serif font-bold text-2xl text-white mb-2">
              {{ item.title }}
            </h3>
            
            <!-- Description -->
            <p class="text-white/80 leading-relaxed text-sm mb-5 font-medium line-clamp-3">
              {{ item.description }}
            </p>

            <!-- Action Button Capsule -->
            <a href="/contact" class="flex items-center gap-1.5 px-4.5 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 text-white font-bold text-xs rounded-full uppercase tracking-wider transition-all duration-300">
              <span>Contacto</span>
              <Icon name="uil:arrow-right" class="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<style scoped>
.features-bg {
  background-color: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
</style>
