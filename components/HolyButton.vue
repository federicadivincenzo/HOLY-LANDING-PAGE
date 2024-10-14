<script setup >
defineProps({
  label: {
    type: String,
    default: ''
  },
  path: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <NuxtLink class="holy-button"  :to="path" :title="label">
    <slot></slot>
  </NuxtLink>
</template>

<style scoped>

</style>