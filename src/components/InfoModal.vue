<script setup>
import { useAnimation } from '@/stores/animation'
</script>

<template>
  <Teleport to="body">
    <div class="modal" @click="useAnimation().closeModal()">
      <div class="modal__container">
        <div class="modal__content" @click.stop>
          <slot></slot>
          <button @click="useAnimation().closeModal()" class="modal__button">Close</button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style lang="scss">
@use 'sass:color';
.modal {
  visibility: hidden;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba($color: #000000, $alpha: 0.05);
  backdrop-filter: blur(1px);
  font-family: 'Roboto', sans-serif;
  &__container {
    max-width: $M;
    position: relative;
    top: 10%;
    margin: 0 auto;
    padding: 1.5em;
  }
  &__content {
    background: #fff;
    border-radius: 20px;
    color: color.adjust($color: #6991c7, $lightness: -35%);
    padding: 2em;
    display: flex;
    flex-direction: column;
  }
  &__title {
    font-size: 2em;
    text-align: center;
  }
  &__subtitle {
    text-align: center;
    font-size: 1.5em;
    margin: 1em 0 0;
  }
  &__text {
    margin: 0.3em 0 0;
    line-height: 110%;
  }
  &__list {
    margin: 0.3em 0 0;
    display: flex;
    flex-direction: column;
    gap: 0.15em;
    line-height: 110%;
  }
  &__button {
    margin: 2em 0 0;
    align-self: flex-end;
    padding: 0.5em 1em;
    border-radius: 3px;
    border: color.adjust($color: #6991c7, $lightness: -35%) solid 1px;
    background: color.adjust($color: #6991c7, $lightness: -35%);
    font-weight: 500;
    color: #fff;
  }
}
</style>
