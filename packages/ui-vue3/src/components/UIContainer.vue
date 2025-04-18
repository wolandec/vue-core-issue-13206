<template>
  <div v-if="isShown" class="ui-container">
    <slot></slot>
  </div>
</template>

<script setup>
defineOptions({
  name: 'UIContainer'
});

const props = defineProps({
  isShown: {
    type: Boolean,
    default: true
  }
});
</script>
