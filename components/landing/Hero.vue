<template>
  <main class="flex flex-col-2 lg:grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-16 md:pb-24 bg-white overflow-hidden relative w-full">
    <!-- Mesh Gradient Background (Light) -->
    <div class="w-full h-full absolute inset-0 bg-[radial-gradient(at_0%_0%,rgba(252, 253, 252, 0.15)_0,transparent_100%),radial-gradient(at_100%_0%,rgba(34,211,238,0.1)_0,transparent_50%),radial-gradient(at_100%_100%,rgba(57,255,20,0.05)_0,transparent_50%),radial-gradient(at_0%_100%,rgba(255,255,255,1)_0,transparent_50%)] animate-pulse-slow"></div>
    <div class="absolute inset-0  backdrop-blur-[1px] w-full h-full"></div>
    
    <div class="md:order-1 hidden md:block relative z-10 animate-fade-in-up" style="animation-delay: 200ms;">
      <div class="relative group">
        <div class="absolute -inset-4 bg-gradient-to-r from-primary-100 via-primary-200 to-primary-200 rounded-full blur-2xl opacity-10 group-hover:opacity-80 transition duration-1000 animate-pulse-slow"></div>
        <img
          class="relative transition-transform transform group-hover:scale-105 duration-700 h-96 w-96 object-contain animate-float from-primary-400  to-primary-200 "
          src="~/assets/img/infinity1.png"
          alt="Eco Infinity Hero"
          loading="eager"
          format="avif"
          width="512"
          height="512"
        />
      </div>
    </div>

    <div class="px-6 lg:px-0 max-w-2xl relative z-10 animate-fade-in-up">
      <h1 class="text-5xl lg:text-7xl font-bold lg:tracking-tight text-slate-900 mb-6 leading-tight">
        Eco-Infinity <br/> <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-accent-600">startup</span>
      </h1>
      <p class="text-xl mt-4 text-slate-600 max-w-xl leading-relaxed">
        Eco-Infinity es una startup que ofrece servicios y ventas de tecnologías. <span class="font-bold text-primary-600">Innovación y Sustentabilidad</span> integradas para el futuro.
      </p>
      <div class="mt-8 flex flex-col sm:flex-row gap-4">
        <LandingLink
          href="/contact"
          target="_blank"
          rel="noopener"
          class="bg-primary-600 hover:bg-primary-500 text-black font-bold border-none shadow-[0_0_20px_rgba(57,255,20,0.4)] hover:shadow-[0_0_30px_rgba(57,255,20,0.6)] hover:scale-105 transition-all duration-300 transform"
          >Contáctanos</LandingLink
        >
      </div>
    </div>
  </main>
</template>
