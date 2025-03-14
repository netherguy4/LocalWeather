<script setup>
import { useRoute } from 'vue-router'
import { useToast } from 'vue-toastification'
import { useAddedCities } from '@/stores/useAddedCities'

import info from '@/assets/svg/info.svg'
import plus from '@/assets/svg/plus-svgrepo-com.svg'

const props = defineProps({
  showAddButton: {
    type: Boolean,
    default: false,
  },
})
const emits = defineEmits(['onClickInfo'])

const toast = useToast()
const route = useRoute()

const onClickAdd = () => {
  useAddedCities().addCity(route.params.city, route.query.lat, route.query.lon, route.query.index)
  toast.success('Added city to tracking list', {
    timeout: 1500,
    toastClassName: 'my-toast',
  })
}
</script>

<template>
  <transition-group tag="div" name="button" class="buttons">
    <button class="buttons__button" key="infoButton" @click="$emit('onClickInfo')">
      <Component :is="info" class="buttons__button-image" />
    </button>
    <button class="buttons__button" key="addButton" v-if="props.showAddButton" @click="onClickAdd">
      <Component :is="plus" class="buttons__button-image" />
    </button>
  </transition-group>
</template>

<style lang="scss" scoped>
@use 'sass:color';
.button-move,
.button-enter-active,
.button-leave-active {
  transition: all 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.button-enter-from,
.button-leave-to {
  opacity: 0;
  scale: 0;
}

.button-leave-active {
  position: absolute;
}
.buttons {
  display: flex;
  gap: 0.35em;
  align-items: center;
  justify-content: center;
  position: relative;
  &__button {
    font-size: 1em;
    height: 1em;
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
