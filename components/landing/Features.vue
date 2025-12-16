<script setup>
const features = [
  {
    title: "Sitios Webs",
    description:
      "Desarrollo de sitios web modernos , responsivos , tecnologías actuales y  enfocados en rendimiento, diseño profesional y experiencia de usuario.",
    icon: "bx:bx-code-alt",
  },
  {
    title: "Area Robotica",
    description:
      "Diseño y creación de robots autónomos y controlados remotamente, integrando sensores, LoRa, microcontroladores y visión computacional para proyectos educativos e industriales.",
    icon: "bx:bxs-bot",
  },
  {
    title: "Big-Data",
    description:
      "Análisis avanzado de grandes volúmenes de datos utilizando pipelines, modelos predictivos, dashboards y visualizaciones para toma de decisiones basada en información real.  ",
    icon: "bx:bx-line-chart",
  },
  {
    title: "Monitoreo en tiempo real ",
    description:
      "Sistemas capaces de capturar, procesar y transmitir datos en tiempo real mediante LoRa, IoT y sensores especializados, con paneles dinámicos y alertas instantáneas.",
    icon: "bx:bx-pulse",
  },
  {
    title: "Productos electronicos",
    description:
      "Desarrollo de hardware personalizado, prototipos electrónicos, sensores, automatización y módulos integrados para soluciones tecnológicas a medida.",
    icon: "bx:bxs-chip",
  },
  {
    title: "Eficiencia",
    description:
      "Optimización de procesos, automatización inteligente y tecnologías que aumentan la eficiencia operativa en industrias, campo, educación y sistemas energéticos.",
    icon: "bx:bxs-bolt",
  },
];
</script>

<template>
  <div class="mt-16 md:mt-0 py-24 bg-white" id="servicio">
    <LandingContainer>
      <div class="text-center mb-16 reveal-on-scroll">
        <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight text-slate-900">
          Nuestros <span class="text-primary-600">Servicios</span>
        </h2>
        <p class="text-lg mt-4 text-slate-600 max-w-2xl mx-auto">
          Eco-Infinity ofrece soluciones integrales en diversas áreas tecnológicas, impulsando la innovación en tu negocio.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(item, index) in features" :key="index" class="reveal-on-scroll bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-100 group relative overflow-hidden" :class="`delay-${(index % 3 + 1) * 100}`">
          <!-- Hover Gradient Background -->
          <div class="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-accent-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div class="relative z-10">
            <div class="bg-primary-50 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-primary-400 transition-all duration-300 shadow-sm group-hover:shadow-md">
              <Icon class="text-primary-600 w-10 h-10 group-hover:text-primary-400 transition-colors duration-300" :name="item.icon" />
            </div>
            <h3 class="font-bold text-2xl text-slate-900 mb-3 group-hover:text-black transition-colors">{{ item.title }}</h3>
            <p class="text-slate-500 leading-relaxed text-lg group-hover:text-slate-700">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </LandingContainer>
  </div>
</template>
