<script setup>
definePageMeta({
  layout: "landing",
});

useHead({
  title: "Contacto",
});

useSeoMeta({
  description: "Ponte en contacto con Eco-Infinity. Envíanos tus consultas sobre desarrollo de hardware IoT, redes de conectividad LoRa o plataformas de software a medida.",
});
</script>

<template>
  <LandingContainer class="pb-24">
    <LandingSectionhead align="center">
      <template v-slot:title>Contacto</template>
      <template v-slot:desc>Completa el formulario para enviarnos un correo electrónico directamente y resolver tus consultas.</template>
    </LandingSectionhead>

    <div class="grid md:grid-cols-2 gap-12 mx-auto max-w-4xl mt-12 bg-[#F9F9F6] border border-[#D8E2F0] p-8 sm:p-12 rounded-3xl shadow-planet-shadow text-[#1D4088] relative overflow-hidden">
      
      <div class="relative z-10 flex flex-col justify-between">
        <div>
          <h2 class="font-serif text-3xl tracking-tight text-[#1D4088]">
            Contacta con nosotros
          </h2>
          <p class="text-sm leading-relaxed text-[#1D4088]/80 mt-3 font-medium">
            Estamos aquí para ayudarte. Rellena el formulario de la derecha o contáctanos por email para recibir soporte tecnológico experto.
          </p>
          
          <div class="mt-8 space-y-4">
            <div class="flex items-center space-x-3 font-semibold text-sm">
              <div class="w-10 h-10 border border-[#D8E2F0] bg-[#D8E2F0]/50 rounded-xl flex items-center justify-center text-[#1D4088] shadow-sm">
                <Icon class="w-5 h-5" name="uil:map-marker" />
              </div>
              <span class="text-[#1D4088]">Chile, Iquique</span>
            </div>
            
            <div class="flex items-center space-x-3 font-semibold text-sm">
              <div class="w-10 h-10 border border-[#D8E2F0] bg-[#D8E2F0]/50 rounded-xl flex items-center justify-center text-[#1D4088] shadow-sm">
                <Icon class="w-5 h-5" name="uil:envelope" />
              </div>
              <a href="mailto:eco.infinity.contacto@gmail.com" class="text-[#3474BE] hover:text-[#1D4088] hover:underline transition-all">
                eco.infinity.contacto@gmail.com
              </a>
            </div>
          </div>
        </div>

        <!-- Ambient tech logo watermark -->
        <div class="mt-8 opacity-5 hidden md:block text-[#1D4088]">
          <svg class="w-20 h-20" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="48" stroke="currentColor" stroke-width="5" />
            <ellipse cx="100" cy="100" rx="78" ry="20" stroke="currentColor" stroke-width="5" transform="rotate(-18 100 100)" />
          </svg>
        </div>
      </div>
      
      <div class="relative z-10">
        <LandingContactform />
      </div>
    </div>
  </LandingContainer>
</template>
