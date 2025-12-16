<script setup>
const menuitems = [
  {
    title: "Servicios",
    path: "#servicio",
  },
  // {
  //   title: "Pricing",
  //   path: "/pricing",
  // },
  {
    title: "Acerca de",
    path: "/about",
  },
  {
    title: "Contacto",
    path: "/contact",
  },
];

const open = ref(false);
</script>

<template>
  <div class="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
    <LandingContainer>
      <header class="flex flex-col lg:flex-row justify-between items-center py-4">
        <div class="flex items-center justify-between w-full lg:w-auto">
          <a href="/" class="text-2xl font-bold flex items-center gap-1 transition-transform hover:scale-105">
            <span class="text-primary-600">Eco</span><span class="text-slate-900">Infinity</span>
          </a>
          <div class="block lg:hidden">
            <button @click="open = !open" class="text-slate-800 focus:outline-none">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <nav
          class="w-full lg:w-auto mt-2 lg:flex lg:mt-0"
          :class="{ hidden: !open, flex: open }"
        >
          <ul class="flex flex-col lg:flex-row lg:gap-3">
            <li v-for="item of menuitems" :key="item.title">
              <a
                :href="item.path"
                class="flex lg:px-3 py-2 text-slate-600 hover:text-primary-600 font-medium transition-colors"
              >
                {{ item.title }}
              </a>
            </li>
          </ul>
          <div class="lg:hidden flex items-center mt-3 gap-4">
            <LandingLink href="#" styleName="muted" block size="sm">Log in</LandingLink>
            <LandingLink href="#" size="sm" block>Sign up</LandingLink>
          </div>
        </nav>
        <!-- Desktop Cta -->
        <!-- <div class="hidden lg:flex items-center gap-4">
          <LandingLink href="#" styleName="muted" size="sm">Log in</LandingLink>
          <LandingLink href="#" size="sm">Sign up</LandingLink>
        </div> -->
      </header>
    </LandingContainer>
  </div>
</template>
