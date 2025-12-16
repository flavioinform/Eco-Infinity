<script setup>
const TeamImg1 = "https://source.unsplash.com/IF9TK5Uy-KI";
const TeamImg2 = "https://source.unsplash.com/iEEBWgY_6lA";
const TeamImg3 = "https://source.unsplash.com/ZHvM3XIOHoE";

const team = [
  {
    name: "Flavio Ocampo",
    title: "CEO & Founder",
    avatar: { src: TeamImg1 },
  },
  {
    name: "Luciano Alfaro",
    title: "COO",
    avatar: { src: TeamImg2 },
  },
  {
    name: "Rene Castro",
    title: "CFO",
    avatar: { src: TeamImg3 },
  },
   {
    name: "Franco Davalos",
    title: "CTO",
    avatar: { src: TeamImg3 },
  },
];
</script>

<template>
  <div class="py-24 bg-white reveal-on-scroll">
    <LandingContainer>
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight text-slate-900">
          Nuestro <span class="text-primary-600">Equipo</span>
        </h2>
        <p class="text-lg mt-4 text-slate-600 max-w-2xl mx-auto">
          Conoce a las mentes detrás de Eco-Infinity.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(item, index) in team" :key="item.name" class="reveal-on-scroll group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-500 transform hover:-translate-y-2 border border-slate-100" :class="`delay-${(index % 4 + 1) * 100}`">
          <div class="aspect-square overflow-hidden relative">
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            <img
              :src="item.avatar.src"
              alt="Team Member"
              class="w-full h-full object-cover transition duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              loading="lazy"
            />
          </div>
          <div class="p-6 text-center relative z-20">
            <h3 class="text-lg font-bold text-slate-900 group-hover:text-primary-600 transition-colors">{{ item.name }}</h3>
            <p class="text-sm text-primary-600 font-medium uppercase tracking-wide mt-1">{{ item.title }}</p>
          </div>
        </div>
      </div>
      
      <div class="mt-12 text-center reveal-on-scroll delay-300">
        <LandingLink href="/about" styleName="outline" class="text-slate-900 border-slate-900 hover:bg-slate-900 hover:text-white">Ver todo el equipo</LandingLink>
      </div>
    </LandingContainer>
  </div>
</template>
