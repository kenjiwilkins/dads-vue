<template>
  <button
    :class="buttonClasses"
    :disabled="props.disabled ? 'true' : 'false'"
    @click="emits('onClick')"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import "dads-styles/dist/dads-styles.css";
import { computed } from "vue";

// props
interface ButtonProps {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "x-small" | "small" | "medium" | "large";
  disabled?: boolean;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  /** button types: "primary" | "secondary" | "tertiary" */
  variant: "primary",
  /** button sizes: "x-small" | "small" | "medium" | "large" */
  size: "medium",
  /** button disabled state */
  disabled: false,
});

// emits
const emits = defineEmits(["onClick"]);

// computed
const buttonClasses = computed(() => [
  "dads-btn",
  `--${props.variant}`,
  `--${props.size}`,
  `--${props.disabled ? "disabled" : "enabled"}`,
]);
</script>
<style scoped></style>
