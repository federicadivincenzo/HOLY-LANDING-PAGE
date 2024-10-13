<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <NuxtLink class="holy-button"  to="https://drive.google.com/file/d/1YtkoQdX8T3xx3-i53wvDr58EKSqPeYr3/view?usp=sharing" title="label">
    <slot></slot>
  </NuxtLink>
</template>

<style scoped>

</style>