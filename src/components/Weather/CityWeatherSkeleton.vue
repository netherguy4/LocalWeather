<script setup>
import { SkeletonBlock } from 'skeleton-elements/vue'
import 'skeleton-elements/css'
</script>

<template>
  <div class="weather">
    <div class="weather__current">
      <SkeletonBlock effect="wave" class="weather__title" />
      <SkeletonBlock effect="wave" class="weather__temp" />
      <SkeletonBlock effect="wave" class="weather__description" />
      <SkeletonBlock effect="wave" class="weather__graph" />
    </div>
    <SkeletonBlock effect="wave" class="weather__title-2" />
    <div class="weather__daily">
      <SkeletonBlock class="weather__daily-block" effect="wave" />
      <SkeletonBlock class="weather__daily-block" effect="wave" />
      <SkeletonBlock class="weather__daily-block" effect="wave" />
      <SkeletonBlock class="weather__daily-block" effect="wave" />
      <SkeletonBlock class="weather__daily-block" effect="wave" />
      <SkeletonBlock class="weather__daily-block" effect="wave" />
      <SkeletonBlock class="weather__daily-block" effect="wave" />
      <SkeletonBlock class="weather__daily-block" effect="wave" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  --skeleton-color: rgba(0, 0, 0, 0.3);
}
.weather {
  text-align: center;
  &__current {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__title {
    max-width: 30em;
    height: 3em;
    margin: 0 auto 1em;
    box-shadow: 0 5px 10px rgba($color: #000000, $alpha: 0.1);
    border-radius: 20px;
  }
  &__title-2 {
    max-width: 13em;
    height: 2em;
    margin: 0 auto 2em;
    box-shadow: 0 5px 10px rgba($color: #000000, $alpha: 0.1);
    border-radius: 20px;
  }
  &__temp {
    border-radius: 20px;
    max-width: 6em;
    height: 8em;
    border-radius: 20px;
    box-shadow: 0 5px 10px rgba($color: #000000, $alpha: 0.1);
    margin: 0 0 1em 0;
  }
  &__description {
    max-width: 15em;
    height: 4em;
    margin: 0 auto 1em;
    box-shadow: 0 5px 10px rgba($color: #000000, $alpha: 0.1);
    border-radius: 20px;
  }
  &__graph {
    border-radius: 30px;
    height: toem(280);
    box-shadow: 0 5px 10px rgba($color: #000000, $alpha: 0.1);
    margin: 0 0 3em 0;
  }
  &__daily {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(toem(190), 1fr));
    gap: 1em;
    margin: 0 0 1em 0;
    &-block {
      border-radius: 30px;
      box-shadow: 0 5px 10px rgba($color: #000000, $alpha: 0.1);
      height: toem(213.6);
    }
  }
}
</style>
