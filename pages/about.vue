<script setup>
import imgFlavio   from "~/assets/integrantes/flavio.jpeg";
import imgLuciano  from "~/assets/integrantes/luciano.png";
import imgRene     from "~/assets/integrantes/rene.jpeg";
import imgFranco   from "~/assets/integrantes/franco2.jpeg";

definePageMeta({
  layout: "landing",
});

useHead({
  title: "Nosotros",
});

useSeoMeta({
  description: "Conoce al equipo multidisciplinario de ingenieros detrás de Eco-Infinity y nuestra visión de conectar el mundo físico y digital mediante sustentabilidad e innovación.",
});

const team = [
  {
    name: "Flavio Ocampo Chavez",
    title: "Desarrollador de Software",
    degree: "Ingeniería Civil Informática",
    avatar: { src: imgFlavio,  pos: "center 15%" },
  },
  {
    name: "Luciano Alfaro Cataldo",
    title: "Gestor de Proyectos",
    degree: "Ingeniería Civil Industrial",
    avatar: { src: imgLuciano, pos: "center top" },
  },
  {
    name: "Rene Castro Mamani",
    title: "Coordinador de Procesos",
    degree: "Ingeniería Civil Industrial",
    avatar: { src: imgRene,    pos: "center 20%" },
  },
  {
    name: "Franco Davalos Ramirez",
    title: "Encargado de Sistemas Electrónicos",
    degree: "Ingeniería Civil Eléctrica",
    avatar: { src: imgFranco,  pos: "center 35%" },
  },
];
</script>

<template>
  <div class="about-bg py-24 relative overflow-hidden">
    <!-- Top separator -->
    <div class="absolute top-0 left-0 right-0 h-px bg-white/10"></div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

      <!-- Misión & Visión Section -->
      <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
        <!-- Mission Card -->
        <div class="group relative bg-[#0C1836]/60 backdrop-blur-lg border border-[#3474BE]/35 rounded-3xl p-8 flex flex-col justify-between hover:border-[#70C3D4] hover:shadow-neon-glow hover:-translate-y-1.5 transition-all duration-300">
          <div>
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 rounded-2xl bg-[#3474BE]/20 flex items-center justify-center text-[#A0F0DF] group-hover:bg-[#A0F0DF] group-hover:text-[#1D4088] transition-colors duration-300 shadow-inner">
                <Icon class="w-6 h-6" name="lucide:target" />
              </div>
              <h3 class="text-2xl font-serif font-bold text-white">Misión</h3>
            </div>
            <p class="text-white/85 text-sm leading-relaxed font-medium">
              Transformar problemas operativos complejos en soluciones tecnológicas integrales, diseñando e implementando sistemas de hardware IoT, redes de conectividad y plataformas de software a medida que optimicen la eficiencia y la seguridad de nuestros clientes.
            </p>
          </div>
          <div class="mt-8 pt-4 border-t border-[#3474BE]/20 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#70C3D4]">
            <span>Optimización &amp; Eficiencia</span>
            <Icon class="w-4 h-4" name="lucide:arrow-up-right" />
          </div>
        </div>

        <!-- Vision Card -->
        <div class="group relative bg-[#0C1836]/60 backdrop-blur-lg border border-[#3474BE]/35 rounded-3xl p-8 flex flex-col justify-between hover:border-[#70C3D4] hover:shadow-neon-glow hover:-translate-y-1.5 transition-all duration-300">
          <div>
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 rounded-2xl bg-[#3474BE]/20 flex items-center justify-center text-[#A0F0DF] group-hover:bg-[#A0F0DF] group-hover:text-[#1D4088] transition-colors duration-300 shadow-inner">
                <Icon class="w-6 h-6" name="lucide:eye" />
              </div>
              <h3 class="text-2xl font-serif font-bold text-white">Visión</h3>
            </div>
            <p class="text-white/85 text-sm leading-relaxed font-medium">
              Ser el aliado tecnológico de referencia para empresas e instituciones, reconocidos por nuestra capacidad de conectar el mundo físico con el digital de manera eficiente, robusta e innovadora, liderando la adopción de tecnologías de monitoreo y automatización inteligente en el mercado nacional e internacional.
            </p>
          </div>
          <div class="mt-8 pt-4 border-t border-[#3474BE]/20 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#70C3D4]">
            <span>Liderazgo &amp; Conectividad</span>
            <Icon class="w-4 h-4" name="lucide:arrow-up-right" />
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="w-full h-px bg-white/10 mb-20"></div>

      <!-- Header -->
      <div class="text-center mb-16 flex flex-col items-center">
        <!-- Tech/Eco Badge -->
        <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-md border-l-2 border-l-[#A0F0DF] border-y border-r border-[#70C3D4]/25 bg-[#0C1836]/65 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_4px_12px_rgba(0,0,0,0.4)] select-none hover:border-[#A0F0DF]/50 transition-all duration-300 mb-5">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A0F0DF] opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-[#A0F0DF]"></span>
          </span>
          <span class="text-[9px] font-bold uppercase tracking-[0.22em] text-white/90 font-sans flex items-center gap-1.5">
            <span>Eco-Infinity</span>
            <span class="text-[#70C3D4]/50 font-normal">//</span>
            <span class="text-[#A0F0DF]">Nuestro Equipo</span>
          </span>
        </div>
        
        <h2 class="text-4xl lg:text-5xl font-serif text-white tracking-tight">
          Las mentes detrás de Eco-Infinity
        </h2>
        <p class="text-md mt-4 text-white/80 max-w-2xl mx-auto leading-relaxed">
          Un equipo multidisciplinario con experiencia en Ingeniería Informática, Industrial y Eléctrica, impulsando la innovación tecnológica con un enfoque sustentable.
        </p>
      </div>

      <!-- Team cards grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="item in team"
          :key="item.name"
          class="ecoinfinity-card overflow-hidden transition-all duration-300 group border border-[#D8E2F0] hover:border-[#70C3D4] rounded-2xl p-0 shadow-soft-depth hover:shadow-neon-glow hover:-translate-y-1"
        >
          <!-- Photo Container -->
          <div class="aspect-square overflow-hidden relative border-b border-[#D8E2F0] bg-[#D8E2F0]/10">
            <img
              :src="item.avatar.src"
              :style="{ objectPosition: item.avatar.pos }"
              alt="Team Member"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-95"
              loading="lazy"
            />
          </div>

          <!-- Card Content / Footer -->
          <div class="p-6 bg-transparent">
            <h3 class="text-xl font-serif font-bold tracking-tight mb-1 text-[#1D4088] group-hover:text-[#3474BE] transition-colors duration-300">
              {{ item.name }}
            </h3>
            <p class="text-xs font-bold uppercase text-[#3474BE] tracking-wider mb-1">
              {{ item.title }}
            </p>
            <p class="text-[10px] font-semibold text-[#1D4088]/70 uppercase tracking-wide">
              {{ item.degree }}
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.about-bg {
  background-color: transparent;
  min-height: 80vh;
}
</style>
