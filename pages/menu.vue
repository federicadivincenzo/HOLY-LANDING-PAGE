<script setup lang="ts">
import { menuItems } from '~/constants/menu';

</script>

<template>
  <div class="holy-menu">
    <div class="holy-menu__container">
        <section v-for="section in menuItems">
            <p v-show="section.section !== 'Altro'"class="holy-menu__title">{{ section.section }}</p>
            <article v-for="item in section.items">
                <p class="holy-menu__item-title">{{ item.title }} <span>€ {{ item.price }}</span></p>
                <p>{{ item.description }}</p>
            </article>
        </section>

    </div>
   </div>
</template>
