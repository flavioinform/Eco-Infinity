<template>
  <!-- 
    ===================================================
    MISSION & VISION  ·  Eco-Infinity Premium Section
    ===================================================
  -->
  <div class="mission-vision-bg py-24 relative overflow-hidden" id="nosotros">
    <!-- Background grid decoration -->
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
            <span class="text-[#A0F0DF]">Nuestra Esencia</span>
          </span>
        </div>

        <h2 class="text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight">
          Misión <span class="text-[#70C3D4] font-light">&amp;</span> <span class="text-[#3474BE]">Visión</span>
        </h2>
        
        <p class="text-md mt-4 text-white/75 max-w-2xl mx-auto leading-relaxed">
          Los pilares estratégicos que guían nuestro camino hacia la integración tecnológica sustentable.
        </p>
      </div>

      <!-- Cards Grid -->
      <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <!-- Mission Card -->
        <div class="group relative bg-[#0C1836]/60 backdrop-blur-lg border border-[#3474BE]/35 rounded-3xl p-8 reveal-left flex flex-col justify-between hover:border-[#70C3D4] hover:shadow-neon-glow hover:-translate-y-1.5 transition-all duration-300" style="animation-delay: 50ms">
          <div>
            <!-- Icon & Label -->
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 rounded-2xl bg-[#3474BE]/20 flex items-center justify-center text-[#A0F0DF] group-hover:bg-[#A0F0DF] group-hover:text-[#1D4088] transition-colors duration-300 shadow-inner">
                <Icon class="w-6 h-6" name="lucide:target" />
              </div>
              <h3 class="text-2xl font-serif font-bold text-white">Misión</h3>
            </div>
            
            <p class="text-white/85 text-md leading-relaxed font-semibold">
              Transformar problemas operativos complejos en soluciones tecnológicas integrales, diseñando e implementando sistemas de hardware IoT, redes de conectividad y plataformas de software a medida que optimicen la eficiencia and la seguridad de nuestros clientes.
            </p>
          </div>
          
          <!-- Bottom Accent -->
          <div class="mt-8 pt-4 border-t border-[#3474BE]/20 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#70C3D4]">
            <span>Optimización &amp; Eficiencia</span>
            <Icon class="w-4 h-4" name="lucide:arrow-up-right" />
          </div>
        </div>

        <!-- Vision Card -->
        <div class="group relative bg-[#0C1836]/60 backdrop-blur-lg border border-[#3474BE]/35 rounded-3xl p-8 reveal-right flex flex-col justify-between hover:border-[#70C3D4] hover:shadow-neon-glow hover:-translate-y-1.5 transition-all duration-300" style="animation-delay: 150ms">
          <div>
            <!-- Icon & Label -->
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 rounded-2xl bg-[#3474BE]/20 flex items-center justify-center text-[#A0F0DF] group-hover:bg-[#A0F0DF] group-hover:text-[#1D4088] transition-colors duration-300 shadow-inner">
                <Icon class="w-6 h-6" name="lucide:eye" />
              </div>
              <h3 class="text-2xl font-serif font-bold text-white">Visión</h3>
            </div>
            
            <p class="text-white/85 text-md leading-relaxed font-semibold">
              Ser el aliado tecnológico de referencia para empresas e instituciones, reconocidos por nuestra capacidad de conectar el mundo físico con el digital de manera eficiente, robusta e innovadora, liderando la adopción de tecnologías de monitoreo y automatización inteligente en el mercado nacional e internacional.
            </p>
          </div>
          
          <!-- Bottom Accent -->
          <div class="mt-8 pt-4 border-t border-[#3474BE]/20 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#70C3D4]">
            <span>Liderazgo &amp; Conectividad</span>
            <Icon class="w-4 h-4" name="lucide:arrow-up-right" />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
// No script logic needed for pure layout, standard Nuxt setup.
</script>

<style scoped>
.mission-vision-bg {
  background-color: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
</style>
