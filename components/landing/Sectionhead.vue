<script setup>
defineProps({
  align: {
    default: "center",
  },
});
</script>

<template>
  <div :class="['mt-16 mb-8', align === 'center' && 'text-center']">
    <h1 class="text-4xl lg:text-5.5xl font-serif text-white tracking-tight">
      <slot name="title">Title</slot>
    </h1>
    <p class="text-md mt-4 text-white/80 font-semibold max-w-2xl" :class="[align === 'center' && 'mx-auto']">
      <slot name="desc"></slot>
    </p>
  </div>
</template>
