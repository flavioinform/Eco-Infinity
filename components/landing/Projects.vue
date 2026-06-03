<template>
  <!-- 
    ===================================================
    PROJECTS SECTION  ·  Eco-Infinity Innovation Showcase
    ===================================================
  -->
  <div class="projects-bg py-24 relative overflow-hidden" id="proyectos">
    <!-- Subtle technical grid background -->
    <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:60px_60px] opacity-30 pointer-events-none" aria-hidden="true"></div>
    
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
            <span class="text-[#A0F0DF]">Proyectos Propios</span>
          </span>
        </div>

        <h2 class="text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight">
          Nuestras <span class="text-[#3474BE]">Innovaciones</span>
        </h2>
        
        <p class="text-md mt-4 text-white/75 max-w-2xl mx-auto leading-relaxed">
          Sistemas avanzados desarrollados por Eco-Infinity que fusionan software y hardware para el bienestar social y la seguridad.
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <!-- Project 1: Eco Net -->
        <div class="ecoinfinity-card overflow-hidden group flex flex-col reveal-left" style="animation-delay: 50ms">
          <!-- Image Wrapper -->
          <div class="h-64 overflow-hidden relative border-b border-[#D8E2F0] bg-[#D8E2F0]/10 flex items-center justify-center">
            <img 
              :src="imgEcoNet" 
              alt="Eco Net - Mensajería descentralizada" 
              class="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105 filter contrast-95" 
              loading="lazy" 
            />
            <!-- Project Overlay Badge -->
            <div class="absolute top-4 right-4 px-3.5 py-1 bg-[#0C1836]/90 backdrop-blur-md text-[#A0F0DF] text-[10px] font-bold border-l-2 border-l-[#A0F0DF] border-y border-r border-[#70C3D4]/30 rounded-md uppercase tracking-wider shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
              LoRa &amp; Telecomunicaciones
            </div>
          </div>

          <!-- Content -->
          <div class="p-8 flex-1 flex flex-col justify-between">
            <div>
              <h3 class="text-2xl font-serif font-bold text-[#1D4088] group-hover:text-[#3474BE] transition-colors duration-300 mb-4">
                Eco Net
              </h3>
              
              <p class="text-[#1D4088]/90 text-sm leading-relaxed mb-6 font-medium">
                Esta solución responde a las dificultades de comunicación que enfrentan comunidades y organismos de emergencia durante catástrofes o interrupciones de los servicios tradicionales de telecomunicaciones, mediante un sistema de mensajería descentralizada que opera sin conexión a internet utilizando tecnología LoRa.
              </p>
            </div>

            <!-- Tech Badges -->
            <div>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-2.5 py-1 bg-[#D8E2F0]/65 text-[#1D4088] text-xs font-bold rounded-md">Red Descentralizada</span>
                <span class="px-2.5 py-1 bg-[#D8E2F0]/65 text-[#1D4088] text-xs font-bold rounded-md">LoRa Node</span>
                <span class="px-2.5 py-1 bg-[#D8E2F0]/65 text-[#1D4088] text-xs font-bold rounded-md">Offline</span>
                <span class="px-2.5 py-1 bg-[#D8E2F0]/65 text-[#1D4088] text-xs font-bold rounded-md">Resiliencia</span>
              </div>

              <div class="border-t border-[#D8E2F0] pt-4 flex items-center justify-between">
                <span class="text-xs font-bold uppercase tracking-wider text-[#3474BE]">Desarrollo de Hardware &amp; Redes</span>
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" title="Estado: Operativo/Prototipo"></span>
              </div>
            </div>
          </div>
        </div>

        <!-- Project 2: Eco Monitor -->
        <div class="ecoinfinity-card overflow-hidden group flex flex-col reveal-right" style="animation-delay: 150ms">
          <!-- Image Wrapper -->
          <div class="h-64 overflow-hidden relative border-b border-[#D8E2F0] bg-[#D8E2F0]/10 flex items-center justify-center">
            <img 
              :src="imgEcoMonitor" 
              alt="Eco Monitor - Robot sensor" 
              class="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105 filter contrast-95" 
              loading="lazy" 
            />
            <!-- Project Overlay Badge -->
            <div class="absolute top-4 right-4 px-3.5 py-1 bg-[#0C1836]/90 backdrop-blur-md text-[#A0F0DF] text-[10px] font-bold border-l-2 border-l-[#A0F0DF] border-y border-r border-[#70C3D4]/30 rounded-md uppercase tracking-wider shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
              Robótica &amp; IoT
            </div>
          </div>

          <!-- Content -->
          <div class="p-8 flex-1 flex flex-col justify-between">
            <div>
              <h3 class="text-2xl font-serif font-bold text-[#1D4088] group-hover:text-[#3474BE] transition-colors duration-300 mb-4">
                Eco Monitor
              </h3>
              
              <p class="text-[#1D4088]/90 text-sm leading-relaxed mb-6 font-medium">
                Eco-Monitor es un robot equipado con sensores avanzados de monóxido de carbono y temperatura. A través de ellos va realizando mediciones continuas de forma autónoma o remota, información que se registra y visualiza en tiempo real a través de una aplicación móvil dedicada.
              </p>
            </div>

            <!-- Tech Badges -->
            <div>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-2.5 py-1 bg-[#D8E2F0]/65 text-[#1D4088] text-xs font-bold rounded-md">Monitoreo CO</span>
                <span class="px-2.5 py-1 bg-[#D8E2F0]/65 text-[#1D4088] text-xs font-bold rounded-md">Sensores de Temp</span>
                <span class="px-2.5 py-1 bg-[#D8E2F0]/65 text-[#1D4088] text-xs font-bold rounded-md">App Móvil</span>
                <span class="px-2.5 py-1 bg-[#D8E2F0]/65 text-[#1D4088] text-xs font-bold rounded-md">Robótica</span>
              </div>

              <div class="border-t border-[#D8E2F0] pt-4 flex items-center justify-between">
                <span class="text-xs font-bold uppercase tracking-wider text-[#3474BE]">Desarrollo de IoT &amp; Software</span>
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" title="Estado: Operativo/Prototipo"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import imgEcoNet from "~/assets/proyectos/EcoNet.png";
import imgEcoMonitor from "~/assets/proyectos/EcoMonitor.png";
</script>

<style scoped>
.projects-bg {
  background-color: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
</style>
