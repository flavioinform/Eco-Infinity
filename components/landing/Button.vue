<script setup lang="ts">
interface Props {
  size?: "md" | "lg";
  block?: boolean;
  styleName?: "outline" | "primary" | "inverted" | "outlineDark";
  className?: string;
  [x: string]: any;
}

withDefaults(defineProps<Props>(), {
  size: "md",
  styleName: "primary",
});

const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const styles = {
  outline: "bg-transparent text-white border-2 border-white/80 hover:border-white hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
  primary: "bg-[#A0F0DF] text-[#1D4088] hover:bg-[#70C3D4] hover:text-white hover:shadow-neon-glow hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
  inverted: "bg-white text-[#1D4088] hover:bg-[#D8E2F0] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
  outlineDark: "bg-transparent text-[#1D4088] border-2 border-[#1D4088]/80 hover:border-[#1D4088] hover:bg-[#1D4088]/10 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
};
</script>

<template>
  <button
    :class="[
      'rounded-xl text-center font-bold tracking-wide transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[#70C3D4]/70 ring-offset-2',
      block && 'w-full',
      sizes[size],
      styles[styleName],
      className,
    ]"
  >
    <slot />
  </button>
</template>
