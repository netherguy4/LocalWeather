<script setup>
import { useRoute } from 'vue-router'
import { useAddedCities } from '@/stores/addedCities'
import { useAnimation } from '@/stores/animation'
import { useToast } from 'vue-toastification'

import InfoModal from './InfoModal.vue'

import logo from '@/assets/svg/sun-svgrepo-com.svg'
import info from '@/assets/svg/info.svg'
import plus from '@/assets/svg/plus-svgrepo-com.svg'

const toast = useToast()
const route = useRoute()
const clickHandler = () => {
  useAddedCities().addCity(route.params.city, route.query.lat, route.query.lon, route.query.index)
  useAnimation().hideButton()
  toast.success('Added city to tracking list', {
    timeout: 1500,
    toastClassName: 'my-toast',
  })
}
</script>

<template>
  <header class="header">
    <div class="container header__container">
      <router-link to="/" class="header__logo-container">
        <Component :is="logo" class="header__logo" />
        <span class="header__logo-text">The Local Weather</span>
      </router-link>
      <div class="header__buttons">
        <button class="header__button" id="infoButton" @click="useAnimation().openModal()">
          <Component :is="info" class="header__button-image" />
        </button>
        <button class="header__button" id="addButton" @click="clickHandler">
          <Component :is="plus" class="header__button-image" />
        </button>
      </div>
    </div>
    <info-modal>
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
          bottom of the page, there will be am option to delete the city.
        </p>
      </div>
    </info-modal>
  </header>
</template>

<style lang="scss" scoped>
@use 'sass:color';
.header {
  font-size: toem(24);
  // color: #fff;
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
  &__buttons {
    display: flex;
    gap: 0.2em;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  &__button {
    font-size: 1em;
    height: 1em;
    position: absolute;
    top: 0;
    left: 0;
    translate: -100% -50%;
    visibility: hidden;
    &:first-child {
      // translate: -250% -50%;
      visibility: visible;
    }
  }
  &__button-image {
    height: 1em;
    width: 1em;
    fill: #fff;
    transition: fill $trTime;
    @include hover {
      transition: fill $hoverTime;
      fill: color.adjust($color: #6991c7, $lightness: -15%);
    }
  }
}
</style>
