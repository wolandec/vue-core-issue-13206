<template>
  <ui-container-ce
    :is-shown.prop="isShown"
  >
    <slot/>
  </ui-container-ce>
</template>

<script setup>
import { UIContainerElement } from 'ui-ce/dist/ui-ce';

const props = defineProps({
  isShown: {
    type: Boolean,
    default: true
  }
});

// Ensure the custom element is defined
if (!customElements.get('ui-container-ce')) {
  customElements.define('ui-container-ce', UIContainerElement);
}
</script>

<style scoped>
/* Any additional styling specific to the wrapper can go here */
</style>
