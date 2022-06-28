<script setup>
import BlogPostSkeleton from "../components/loaders/BlogPostSkeleton.vue";
import { ref } from "vue";
import LoadMore from "../components/loaders/LoadMore.vue";
import EmptyState from "../components/EmptyState.vue";
</script>

<template>
  <div class="main__content">
    <!-- <BlogPostSkeleton :amount="16" /> -->
    <EmptyState />
    <!-- <LoadMore /> -->
  </div>
</template>

<style lang="scss" scoped>
span {
  font-size: 1.5rem;
  line-height: 1.5;
}
// .main__content {
//   flex: 1 0 auto;
// }
</style>
