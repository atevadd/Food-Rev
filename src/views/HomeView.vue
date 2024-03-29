<script setup>
import { ref, onMounted } from "vue";
import EmptyState from "../components/ui/EmptyState.vue";
import AppModal from "../components/ui/AppModal.vue";
import AppInput from "../components/form/AppInput.vue";
import AppButton from "../components/form/AppButton.vue";
import BlogPostCard from "../components/ui/BlogPostCard.vue";
import LoadMore from "../components/ui/LoadMore.vue";
import { useStore } from "../stores/store.js";
import AppLoader from "../components/ui/AppLoader.vue";
import BlogPostSkeleton from "../components/ui/BlogPostSkeleton.vue";

// Store
const store = useStore();

// Mounted Hook
onMounted(() => {
  if (localStorage.getItem("food-rev-user-data") !== null) {
    store.userData = JSON.parse(localStorage.getItem("food-rev-user-data"));
    store.closeModal();
  } else {
    store.openModal();
  }
});

// Get started form variables
const userName = ref("");
const userEmail = ref("");

const userData = ref({
  userName: "",
  userEmail: "",
});

// submit get started form
const submitGetStartedForm = () => {
  // checking the locastorage for the user data
  const userExist = localStorage.getItem("food-rev-user-data");

  // if user data does not exist then update the user data
  if (userExist == null) {
    localStorage.setItem("food-rev-user-data", JSON.stringify(userData.value));

    store.userData = JSON.parse(localStorage.getItem("food-rev-user-data"));

    store.closeModal();
  } else {
    // if user data exist then update the user data
    store.userData = JSON.parse(localStorage.getItem("food-rev-user-data"));
  }
};
</script>

<template>
  <div class="main__content">
    <!-- All the blog on the app -->
    <div class="blog-container">
      <BlogPostCard v-for="card in 12" :key="card" :id="card" />
    </div>
    <!-- The load more button -->
    <!-- <BlogPostSkeleton /> -->
    <LoadMore />
  </div>
  <app-modal class="get-started">
    <h1>Hi👋🏽, let's get you started</h1>
    <p>
      A quick one before you start reading, help us know you by filling the form
      below.
    </p>
    <form @submit.prevent="submitGetStartedForm">
      <div class="grouped">
        <AppInput
          type="text"
          id="name"
          label-name="What is your name?"
          v-model="userData.userName" />
        <AppInput
          type="email"
          id="email"
          label-name="What is your email?"
          v-model="userData.userEmail" />
      </div>
      <app-button type="submit">Get Started</app-button>
    </form>
  </app-modal>
</template>

<style lang="scss" scoped>
.blog-container {
  width: 90%;
  margin-inline: auto;
  margin-top: 40px;
  display: grid;

  @include desktop {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 30px;
  }
  @include tablet {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 30px;
  }
  @include mobile {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 30px;
  }
}
span {
  font-size: 1.5rem;
  line-height: 1.5;
}
.get-started {
  h1 {
    color: var(--color-text-heading);

    @include mobile {
      font-size: 1.5rem;
    }
  }
  p {
    color: var(--color-text-subtitle);
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
  @include tablet {
    gap: 20px;
  }
  @include mobile {
    flex-direction: column;
  }
}
</style>
