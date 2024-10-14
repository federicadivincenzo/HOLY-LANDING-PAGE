<template>
  <div>
    <HolyHeader></HolyHeader>
    <NuxtPage />
    <HolyFooter></HolyFooter>
  </div>
</template>
<script setup>
import HolyFooter from "~/components/HolyFooter.vue";
import HolyHeader from "~/components/HolyHeader.vue";

useHead({
  title: 'Holy - Hamburger & Cicchetti',
  meta: [
    { name: 'description', content: 'Holy Restaurant - Hamburger & Cicchetti' }
  ]
})
</script>