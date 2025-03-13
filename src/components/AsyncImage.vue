<script setup>
import axios from 'axios'
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: String,
})
const data = await axios(props.src, { responseType: 'blob' })
  .then((res) => {
    return URL.createObjectURL(new Blob([res.data], { type: 'image/png' }))
  })
  .catch((err) => console.error(err))
</script>

<template>
  <img :src="data" :alt="props.alt" />
</template>
