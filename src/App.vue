<script setup>
import AppHeader from './components/Header/AppHeader.vue'
import 'animate.css'
</script>

<template>
  <div class="wrapper">
    <AppHeader />
    <main class="wrapper__main">
      <router-view v-slot="{ Component }">
        <transition
          enter-active-class="animate__animated animate__fadeIn router-enter-leave"
          leave-active-class="animate__animated animate__fadeOut router-enter-leave"
        >
          <Component class="wrapper__view" :is="Component" />
        </transition>
      </router-view>
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
  &__view {
    padding: 1.5em;
  }
}
</style>
