<script setup>
import { defineAsyncComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useAddedCities } from '@/stores/addedCities'
import { SkeletonBlock } from 'skeleton-elements/vue'
import 'skeleton-elements/css'

const CityItem = defineAsyncComponent(() => import('./CityItem.vue'))
const data = useAddedCities().cities
const router = useRouter()
const clickHandler = (city, lat, lon, id) => {
  router.push({
    name: 'weather',
    params: { city: city },
    query: { lat: lat, lon: lon, index: id },
  })
}
</script>
<template>
  <suspense>
    <template #default>
      <ul class="cities">
        <CityItem
          v-for="[key, entry] in data"
          :key="entry.city"
          :city="entry.city"
          :lat="entry.lat"
          :lon="entry.lon"
          class="cities__city"
          @click="clickHandler(entry.city, entry.lat, entry.lon, key)"
        />
      </ul>
    </template>
    <template #fallback>
      <div class="cities">
        <SkeletonBlock
          effect="wave"
          class="cities__skeleton"
          v-for="[key, entry] in data"
          :key="key"
        />
      </div>
    </template>
  </suspense>
</template>

<style lang="scss" scoped>
* {
  --skeleton-color: rgba(0, 0, 0, 0.3);
}
.cities {
  display: flex;
  flex-direction: column;
  gap: 1em;
  &__city {
    text-align: center;
    padding: 0 2em;
    cursor: pointer;
  }
  &__skeleton {
    height: 200px;
    border-radius: 30px;
    @media (min-width: toem(500)) {
      height: 100px;
    }
  }
}
</style>
