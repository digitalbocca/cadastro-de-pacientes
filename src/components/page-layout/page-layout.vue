<script setup>

import TopBar from '@/components/top-bar'
import Footer from '@/components/footer'

</script>

<template>
  <div class="page-layout">
    <TopBar/>
    <slot class="page-layout__content"/>
    <Footer/>
  </div>

</template>

<style lang="sass" scoped>

.page-layout
  @apply min-h-screen
  @apply flex flex-col justify-between

  &__content
    @apply grow
    @apply bg-slate-400

</style>
