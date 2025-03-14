<script setup>
import gsap from 'gsap'

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
})
const emits = defineEmits(['closeModal'])

const openModal = (el, done) => {
  gsap.fromTo(
    el,
    {
      autoAlpha: 0,
      background: 'none',
      backdropFilter: 'none',
    },
    {
      autoAlpha: 1,
      background: 'rgba($color: #000000, $alpha: 0.05)',
      backdropFilter: 'blur(1px)',
      duration: 0.35,
    },
  )
  gsap.fromTo(
    el.children[0],
    {
      yPercent: 100,
      scale: 0.5,
      autoAlpha: 0,
    },
    {
      yPercent: 0,
      scale: 1,
      autoAlpha: 1,
      ease: 'back',
      duration: 0.35,
      delay: 0.15,
      onComplete: done,
    },
  )
}
const closeModal = (el, done) => {
  gsap.fromTo(
    el.children[0],
    {
      yPercent: 0,
      scale: 1,
      autoAlpha: 1,
    },
    {
      yPercent: 100,
      scale: 0.5,
      autoAlpha: 0,
      ease: 'back.in',
      duration: 0.35,
    },
  )
  gsap.fromTo(
    el,
    {
      autoAlpha: 1,
      background: 'rgba($color: #000000, $alpha: 0.05)',
      backdropFilter: 'blur(1px)',
    },
    {
      autoAlpha: 0,
      background: 'none',
      backdropFilter: 'none',
      duration: 0.35,
      delay: 0.15,
      onComplete: done,
    },
  )
}
</script>

<template>
  <teleport to="body">
    <transition @enter="openModal" @leave="closeModal">
      <div class="modal" v-if="props.active" @click="$emit('closeModal')">
        <div class="modal__container">
          <div class="modal__content" @click.stop>
            <slot></slot>
            <button @click="$emit('closeModal')" class="modal__button">Close</button>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<style lang="scss">
@use 'sass:color';
.modal {
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
