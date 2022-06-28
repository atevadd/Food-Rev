<script setup>
import BlogPostSkeleton from "../components/loaders/BlogPostSkeleton.vue";
import { ref } from "vue";
import LoadMore from "../components/loaders/LoadMore.vue";
import EmptyState from "../components/EmptyState.vue";
import AppModal from "../components/AppModal.vue";
import AppInput from "../components/form/AppInput.vue";
import AppButton from "../components/form/AppButton.vue";
</script>

<template>
  <div class="main__content">
    <!-- <BlogPostSkeleton :amount="16" /> -->
    <EmptyState />
    <!-- <LoadMore /> -->
    <app-modal class="get-started">
      <h1>Hi👋🏽, let's get you started</h1>
      <p clal>
        A quick one before you start reading, help us know you by filling the
        form below.
      </p>
      <form>
        <div class="grouped">
          <AppInput type="text" id="name" label-name="What is your name?" />
          <AppInput type="email" id="email" label-name="What is your email?" />
        </div>
        <app-button>Get Started</app-button>
      </form>
    </app-modal>
  </div>
</template>

<style lang="scss" scoped>
span {
  font-size: 1.5rem;
  line-height: 1.5;
}
.get-started {
  h1 {
    color: #333;

    @include mobile {
      font-size: 1.5rem;
    }
  }
  p {
    color: #a3a3a3;
    margin-bottom: 10px;

    @include mobile {
      font-size: 0.9rem;
    }
  }
}
.grouped {
  display: flex;

  @include desktop {
    gap: 20px;
  }
  @include mobile {
    flex-direction: column;
  }
}
</style>
