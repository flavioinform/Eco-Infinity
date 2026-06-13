<script setup>
useHead({
  htmlAttrs: {
    lang: "es",
  },
  titleTemplate: "%s | Eco-Infinity",
  title: "Eco-Infinity: Innovación y Sustentabilidad Tecnológica",
  link: [
    {
      rel: "icon",
      type: "image/jpeg",
      href: "assets/logo/logo1.jpeg",
    },
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Inter:wght@100..900&display=swap",
    },
  ],
});

useSeoMeta({
  description: "Eco-Infinity es una startup en Chile que ofrece soluciones integrales de hardware IoT, redes de conectividad LoRa y plataformas de software a medida.",
  ogTitle: "Eco-Infinity - Innovación y Sustentabilidad Tecnológica",
  ogDescription: "Eco-Infinity es una startup líder en Chile que ofrece soluciones integrales de hardware IoT, redes de conectividad LoRa y plataformas de software a medida.",
  ogType: "website",
  ogLocale: "es_CL",
  twitterCard: "summary_large_image",
  twitterTitle: "Eco-Infinity - Innovación y Sustentabilidad Tecnológica",
  twitterDescription: "Startup chilena dedicada a conectar el mundo físico y digital mediante IoT robusto, redes LoRa descentralizadas y software a medida.",
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
