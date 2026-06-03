<script setup>
import imgFlavio   from "~/assets/integrantes/flavio.jpeg";
import imgLuciano  from "~/assets/integrantes/luciano.png";
import imgRene     from "~/assets/integrantes/rene.jpeg";
import imgFranco   from "~/assets/integrantes/franco2.jpeg";

const team = [
  { name: "Flavio Ocampo",  title: "Desarrollador de Software", degree: "Ingeniería Civil Informática", avatar: { src: imgFlavio,  pos: "center 15%" } },
  { name: "Luciano Alfaro", title: "Gestor de Proyectos", degree: "Ingeniería Civil Industrial", avatar: { src: imgLuciano, pos: "center top" } },
  { name: "Rene Castro",    title: "Coordinador de Procesos", degree: "Ingeniería Civil Industrial", avatar: { src: imgRene,    pos: "center 20%" } },
  { name: "Franco Davalos", title: "Encargado de Sistemas Electrónicos", degree: "Ingeniería Civil Eléctrica", avatar: { src: imgFranco,  pos: "center 35%" } },
];
</script>

<template>
  <div class="team-bg py-24 relative overflow-hidden">
    <!-- Top divider line -->
    <div class="absolute top-0 left-0 right-0 h-px bg-white/10"></div>

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
            <span class="text-[#A0F0DF]">Nuestro Equipo</span>
          </span>
        </div>

        <h2 class="text-4xl lg:text-5xl font-serif text-white tracking-tight">
          Equipo conformado por
        </h2>
        <p class="text-md mt-4 text-white/85 max-w-2xl mx-auto leading-relaxed">
          Conoce a las personas dedicadas que impulsan la innovación y sustentabilidad integrada para el futuro.
        </p>
      </div>

      <!-- Team Members Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(item, index) in team"
          :key="item.name"
          class="ecoinfinity-card overflow-hidden transition-all duration-300 reveal-scale group border border-[#D8E2F0] hover:border-[#70C3D4] rounded-2xl p-0 shadow-soft-depth hover:shadow-neon-glow hover:-translate-y-1"
          :style="`animation-delay:${index * 60}ms`"
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

      <!-- Action Button Link -->
      <div class="mt-16 text-center reveal-on-scroll">
        <LandingLink href="/about" styleName="outline" class="uppercase tracking-wider font-extrabold text-sm">
          Ver todo el equipo
        </LandingLink>
      </div>

    </div>
  </div>
</template>

<style scoped>
.team-bg {
  background-color: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
