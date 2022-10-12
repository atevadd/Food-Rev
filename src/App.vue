<script setup>
import { RouterLink, RouterView } from "vue-router";
import AppSidebar from "@/components/layout/AppSidebar.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
import { useRoute } from "vue-router";
import AdminSidebar from "./components/layout/AdminSidebar.vue";

const route = useRoute();
</script>

<template>
  <div class="app__content">
    <!-- App Sidebar -->
    <AdminSidebar v-if="route.path.includes('admin')" />
    <AppSidebar v-else />
    <!-- Main content -->
    <main class="app__inner-content">
      <RouterView />
      <!-- <AppFooter /> -->
    </main>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/main.scss";

.app__content {
  width: 100%;
  position: relative;
  display: grid;

  @include desktop {
    grid-template-columns: minmax(0, 20%) minmax(0, 80%);
    min-height: 100vh;
    align-items: flex-start;
  }
  @include tablet {
    grid-template-columns: minmax(0, 1fr);
    min-height: 100%;
  }
  @include mobile {
    grid-template-columns: minmax(0, 1fr);
    min-height: 100%;
  }
}

.app__inner-content {
  position: relative;
  min-height: 100%;

  @include mobile {
    margin-bottom: 50px;
    min-height: 80vh;
  }
  @include tablet {
    margin-bottom: 50px;
  }
}
</style>
