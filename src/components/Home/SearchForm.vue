<script setup>
import { ref } from 'vue'
import { useGeocoding } from '@/composables/useGeocoding'
import SearchResult from '@/components/Home/SearchResult.vue'
const searchQuery = ref('')
const geocoding = useGeocoding(searchQuery, 300)
</script>

<template>
  <form action="#" @submit.prevent class="search">
    <input
      type="text"
      class="search__input"
      v-model="searchQuery"
      placeholder="Search for a city"
    />
    <SearchResult :searchQuery="searchQuery" :geocoding="geocoding" />
  </form>
</template>

<style lang="scss" scoped>
.search {
  display: flex;
  flex-direction: column;
  position: relative;
  &__input {
    font-size: 1em;
    color: #fff;
    padding: 0 0 0.3em;
    border-bottom: #fff solid 2px;
    opacity: 0.6;
    transition: $activeTime;
    background: transparent;
    &:focus {
      opacity: 1;
    }
    &::placeholder {
      color: #fff;
      opacity: 0.8;
    }
  }
}
</style>
