<script setup>
import AppHeader from './components/AppHeader.vue'
</script>

<template>
  <div class="wrapper">
    <AppHeader />
    <main class="wrapper__main">
      <div class="container wrapper__container">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  &__main {
    flex: 1 1 auto;
  }
  &__container {
    padding: 1.5em;
  }
}
</style>

<style lang="scss">
#app {
  background-image: linear-gradient(to top, #a3bded 0%, #6991c7 100%);
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
  color: #fff;
}
.container {
  max-width: torem(1024);
  margin: 0 auto;
}
.Vue-Toastification__toast.my-toast {
  backdrop-filter: blur(3px);
  background: rgba($color: #000000, $alpha: 0.3);
  font-family: 'Roboto', sans-serif;
}
</style>
