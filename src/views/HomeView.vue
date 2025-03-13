<script setup>
import { defineAsyncComponent } from 'vue'
import SearchForm from '@/components/Home/SearchForm.vue'
const CitiesList = defineAsyncComponent(() => import('@/components/Home/CitiesList.vue'))
</script>

<template>
  <div class="home">
    <SearchForm />
    <CitiesList />
  </div>
</template>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 1.5em;
}
</style>
