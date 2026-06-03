<script setup lang="ts">
interface Props {
  href: string;
  size?: "md" | "lg";
  block?: boolean;
  styleName?: "outline" | "primary" | "inverted" | "muted" | "outlineDark";
  className?: string;
  [x: string]: any;
}

withDefaults(defineProps<Props>(), {
  size: "lg",
  styleName: "primary",
});

const sizes = {
  lg: "px-7 py-3.5 text-base",
  md: "px-5 py-2.5 text-sm",
};

const styles = {
  outline:  "bg-transparent text-white border-2 border-white/80 hover:border-white hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
  primary:  "bg-[#A0F0DF] text-[#1D4088] hover:bg-[#70C3D4] hover:text-white hover:shadow-neon-glow hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
  inverted: "bg-white text-[#1D4088] hover:bg-[#D8E2F0] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
  muted:    "bg-transparent text-white/80 border border-white/10 hover:bg-white/5 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
  outlineDark: "bg-transparent text-[#1D4088] border-2 border-[#1D4088]/80 hover:border-[#1D4088] hover:bg-[#1D4088]/10 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
};
</script>

<template>
  <NuxtLink
    :href="href"
    :class="[
      'btn-shimmer inline-flex items-center justify-center rounded-xl text-center transition-all duration-300 focus-visible:ring-2 ring-offset-2 ring-[#70C3D4]/70 font-bold tracking-wide outline-none',
      block && 'w-full',
      sizes[size],
      styles[styleName],
      className,
    ]"
    ><slot />
  </NuxtLink>
</template>
