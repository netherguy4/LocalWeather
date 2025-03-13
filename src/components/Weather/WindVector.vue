<script setup>
import arrow from '@/assets/svg/arrow.svg'

const props = defineProps({
  speed: {
    type: Number,
    default: 0,
  },
  degree: {
    type: Number,
    default: 0,
  },
})

const windChart = () => {
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
  const deg = props.degree + 11.25
  const index = parseInt(deg / 45)
  if (deg % 45 > 22.5) {
    if (deg % 90 > 45) {
      return directions[index + 1] + directions[index]
    } else {
      return directions[index] + directions[index + 1]
    }
  } else {
    return directions[index]
  }
}
</script>

<template>
  <div class="wind">
    <Component class="wind__arrow" :is="arrow" :style="`rotate:${degree}deg`" />
    {{ speed }}m/s, {{ windChart() }}
  </div>
</template>

<style lang="scss" scoped>
.wind {
  display: inline-flex;
  align-items: center;
  gap: 0.2em;
  &__arrow {
    width: toem(24);
    height: toem(24);
    fill: #fff;
  }
}
</style>
