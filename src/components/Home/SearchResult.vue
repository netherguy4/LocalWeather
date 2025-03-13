<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const props = defineProps({
  searchQuery: String,
  geocoding: [Array, Number],
})
const clickHandler = (city, lat, lon, id) => {
  router.push({
    name: 'weather',
    params: { city: city },
    query: { lat: lat, lon: lon, index: id },
  })
}
</script>

<template>
  <ul class="list" v-auto-animate>
    <li
      v-for="result in props.geocoding"
      :key="result.id"
      @click="
        clickHandler(
          result.matching_place_name ? result.matching_place_name : result.place_name,
          result.geometry.coordinates[1],
          result.geometry.coordinates[0],
          result.id,
        )
      "
      class="list__result"
    >
      <img
        loading="lazy"
        v-if="result.context || result.properties.short_code"
        class="list__preview"
        :src="`https://flagcdn.com/24x18/${result.context ? result.context[result.context.length - 1].short_code : result.properties.short_code ? result.properties.short_code : ''}.webp`"
        alt=""
      />
      {{ result.place_name }}
    </li>
    <li
      style="cursor: initial"
      v-if="searchQuery !== '' && props.geocoding.length === 0"
      class="list__result"
    >
      We tried our best, but nothing was found :(
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.list {
  position: absolute;
  overflow: hidden;
  top: 130%;
  left: 0;
  width: 100%;
  z-index: 3;
  backdrop-filter: blur(5px);
  background: rgba($color: #000000, $alpha: 0.3);
  border-radius: 10px;
  &__result {
    padding: 0.5em 1em;
    cursor: pointer;
    display: flex;
    align-items: baseline;
    gap: 0.3em;
    &:first-child {
      padding-top: 1em;
    }
    &:last-child {
      padding-bottom: 1em;
    }
  }
  &__preview {
    height: toem(12);
    aspect-ratio: 4/3;
  }
}
</style>
