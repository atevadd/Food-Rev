<script setup>
import BlogPostSkeleton from "../components/loaders/BlogPostSkeleton.vue";
import { ref } from "vue";
</script>

<template>
  <div class="main__content">
    <BlogPostSkeleton />
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
