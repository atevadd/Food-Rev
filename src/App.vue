<script setup>
import { RouterLink, RouterView } from "vue-router";
import AppSidebar from "@/components/layout/AppSidebar.vue";
</script>

<template>
  <div class="app__content">
    <!-- App Sidebar -->
    <AppSidebar />
    <!-- Main content -->
    <main class="app__inner-content">
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/main.scss";

.app__content {
  width: 100%;

  // position: relative;
  display: grid;

  @include desktop {
    grid-template-columns: minmax(0, 15%) minmax(0, 85%);
    min-height: 100vh;
    align-items: flex-start;
  }
  @include tablet {
    grid-template-columns: minmax(0, 1fr);
  }
  @include mobile {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
