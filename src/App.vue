<script setup>
import { RouterLink, RouterView } from "vue-router";
import AppSidebar from "@/components/layout/AppSidebar.vue";
</script>

<template>
  <div class="app__content">
    <AppSidebar />
    <main class="app__inner-content">
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss">
@import "@/scss/main.scss";

.app__content {
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: grid;

  @include desktop {
    grid-template-columns: minmax(0, 15%) minmax(0, 85%);
  }
  @include tablet {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
