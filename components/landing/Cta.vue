<template>
  <div
    class="bg-white px-20 py-20 mt-20 mx-auto max-w-5xl rounded-3xl flex flex-col items-center text-center reveal-on-scroll shadow-2xl shadow-primary-500/20 border border-slate-100 relative overflow-hidden group"
  >
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(57,255,20,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    
    <h2 class="text-slate-900 font-bold text-3xl md:text-6xl relative z-10">Trabaja con nosotros de la forma más rápida y eficiente.</h2>
    <!-- <p class="text-slate-500 mt-4 text-lg md:text-xl relative z-10">
      Static or Dynamic, the choice is yours with Nuxt's hybrid rendering modes.
    </p> -->
    <div class="flex mt-8 relative z-10">
      <LandingLink href="/contact" styleName="primary" class="animate-pulse-slow">Contacto</LandingLink>
    </div>
  </div>
</template>
