<script setup>
import { ref } from 'vue'
import { useAddedCities } from '@/stores/useAddedCities'
import { useRoute } from 'vue-router'

import HeaderButtons from './HeaderButtons.vue'
import InfoModal from './InfoModal.vue'

import logo from '@/assets/svg/sun-svgrepo-com.svg'

const route = useRoute()
const addedCities = useAddedCities()
const showModal = ref(false)
const toggleModal = () => (showModal.value = !showModal.value)
</script>

<template>
  <header class="header">
    <div class="container header__container">
      <router-link to="/" class="header__logo-container">
        <Component :is="logo" class="header__logo" />
        <span class="header__logo-text">The Local Weather</span>
      </router-link>
      <HeaderButtons
        :showAddButton="!addedCities.isAdded && route.name === 'weather'"
        @on-click-info="toggleModal"
      />
    </div>
    <info-modal :active="showModal" @closeModal="toggleModal">
      <div>
        <h1 class="modal__title">About</h1>
        <p class="modal__text">
          The Local Weather allows you to track the current and future weather of cities of your
          choosing.
        </p>
        <h2 class="modal__subtitle">How it works</h2>
        <ul class="modal__list">
          <li>Search for your city by entering the name into the search bar.</li>
          <li>
            Select a city within the results, this will take you to the current weather for your
            selection.
          </li>
          <li>
            Track the city by clicking on the "+" icon in the top right. This will save the city to
            view at a later time on the home page.
          </li>
        </ul>
        <h2 class="modal__subtitle">Removing a city</h2>
        <p class="modal__text">
          If you no longer wish to track a city, simply select the city within the home page. At the
          bottom of the page, there will be an option to delete the city.
        </p>
      </div>
    </info-modal>
  </header>
</template>

<style lang="scss" scoped>
.header {
  font-size: toem(24);
  box-shadow: 0 5px 5px 0 rgba($color: #000000, $alpha: 0.05);
  &__container {
    display: flex;
    justify-content: space-between;
    padding: 1em;
    align-items: center;
  }
  &__logo-container {
    display: flex;
    gap: 0.2em;
    align-items: center;
  }
  &__logo {
    height: 1.3em;
    width: 1.3em;
    fill: #fff;
  }
  &__logo-text {
    color: #fff;
    font-family: 'Iansui', cursive;
    font-weight: 400;
    font-style: normal;
  }
}
</style>
