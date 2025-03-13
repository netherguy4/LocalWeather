<script setup>
import AppHeader from './components/AppHeader.vue'
import 'animate.css'
</script>

<template>
  <div class="wrapper">
    <AppHeader />
    <main class="wrapper__main">
      <div class="container">
        <router-view v-slot="{ Component, route }">
          <transition
            mode="outIn"
            :enter-active-class="route.meta.enterClass"
            :leave-active-class="route.meta.leaveClass"
          >
            <Component :is="Component" />
          </transition>
        </router-view>
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
    overflow-x: hidden;
    flex: 1 1 auto;
  }
}
</style>

<style lang="scss">
:root {
  --animate-duration: 300ms;
}
#app {
  background-image: linear-gradient(to top, #a3bded 0%, #6991c7 100%);
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
  color: #fff;
}
.container {
  max-width: torem(1024);
  margin: 0 auto;
  position: relative;
}
.Vue-Toastification__toast.my-toast {
  backdrop-filter: blur(3px);
  background: rgba($color: #000000, $alpha: 0.3);
  font-family: 'Roboto', sans-serif;
}
</style>
