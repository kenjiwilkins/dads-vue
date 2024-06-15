<template>
  <h1 v-if="props.variant === 'h1'" class="dads-h1"><slot></slot></h1>
  <h2 v-else-if="props.variant === 'h2'" class="dads-h2"><slot></slot></h2>
  <h3 v-else-if="props.variant === 'h3'" class="dads-h3"><slot></slot></h3>
  <h4 v-else-if="props.variant === 'h4'" class="dads-h4"><slot></slot></h4>
  <h5 v-else-if="props.variant === 'h5'" class="dads-h5"><slot></slot></h5>
  <p
    v-else-if="props.variant === 'body-l' || props.variant === 'body'"
    class="dads-body"
  >
    <slot></slot>
  </p>
  <p v-else-if="props.variant === 'body-m'" class="dads-body-m">
    <slot></slot>
  </p>
  <p
    v-else-if="props.variant === 'label-l' || props.variant === 'label'"
    class="dads-label"
  >
    <slot></slot>
  </p>
  <p v-else-if="props.variant === 'label-m'" class="dads-label-m">
    <slot></slot>
  </p>
  <caption
    v-else-if="props.variant === 'caption-l' || props.variant === 'caption'"
    class="dads-caption"
  >
    <slot></slot>
  </caption>
  <caption v-else-if="props.variant === 'caption-m'" class="dads-caption-m">
    <slot></slot>
  </caption>
  <p v-else-if="props.variant === 'body-m'" class="dads-body-m">
    <slot></slot>
  </p>
  <p v-else class="dads-body">
    <slot></slot>
  </p>
</template>
<script setup lang="ts">
import "dads-styles/dist/dads-styles.css";
import { computed } from "vue";
interface TypographyProps {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "body-l"
    | "body"
    | "body-m"
    | "label-l"
    | "label"
    | "label-m"
    | "caption-l"
    | "caption"
    | "caption-m";
}

const props = withDefaults(defineProps<TypographyProps>(), {
  /** typography variants: "h1" | "h2" | "h3" | "h4" | "h5" | "body-l" | "body" | "body-m" | "label-l" | "label" | "label-m" | "caption-l" | "caption" | "caption-m" */
  variant: "body",
});

// computed
const classes = computed(() => {
  const defaultClasses = {
    "dads-typography": true,
  };
  return {
    "dads-h1": props.variant === "h1",
    "dads-h2": props.variant === "h2",
    "dads-h3": props.variant === "h3",
    "dads-h4": props.variant === "h4",
    "dads-h5": props.variant === "h5",
    "dads-body": props.variant === "body-l" || props.variant === "body",
    "dads-body-m": props.variant === "body-m",
    "dads-label": props.variant === "label-l" || props.variant === "label",
    "dads-label-m": props.variant === "label-m",
    "dads-caption":
      props.variant === "caption-l" || props.variant === "caption",
    "dads-caption-m": props.variant === "caption-m",
  };
});
</script>
<style scoped>
.dads-typography {
  color: var(--dads-body);
}
</style>
