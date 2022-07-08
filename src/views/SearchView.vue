<template>
  <div class="search">
    <input
      type="search"
      id="search-bar"
      class="search__bar"
      placeholder="Search for a blog..."
      v-model="searchText" />
    <label for="search-bar"><i class="uil uil-search"></i></label>
  </div>

  <div class="search-result" v-if="searchText.length > 0">
    <h1>
      Results for <span>{{ searchText }}</span>
    </h1>
    <div class="blog-container">
      <BlogPostCard v-for="card in 4" :key="card" />
    </div>
  </div>
  <div class="search-empty-state" v-else>
    <h3>Reach searches</h3>
    <p>You have no recent searches</p>
  </div>
</template>

<script setup>
import AppInput from "../components/form/AppInput.vue";
import { useStore } from "../stores/store.js";
import BlogPostCard from "../components/ui/BlogPostCard.vue";
import { ref } from "vue";

const store = useStore();

// Search text
const searchText = ref("");
</script>

<style lang="scss" scoped>
.blog-container {
  width: 90%;
  margin-inline: auto;
  margin-top: 40px;
  display: grid;
  margin-bottom: 50px;

  @include desktop {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 30px;
  }
  @include tablet {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 30px;
  }
  @include mobile {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 30px;
  }
}
.search {
  width: 90%;
  margin-inline: auto;
  // border: 1px solid;
  margin-top: 20px;
  position: relative;

  @include mobile {
    margin-top: 20px;
  }

  &__bar {
    display: block;
    height: 45px;
    border-radius: 50px;
    outline: none;
    border: 1px solid var(--color-border);
    background-color: $color-bg;
    padding: 0 10px 0 40px;

    @include desktop {
      width: 50%;
    }
    @include tablet {
      width: 70%;
    }
    @include mobile {
      width: 100%;
    }

    &:focus-visible {
      border: 1px solid var(--color-primary);

      & + label {
        color: var(--color-primary);
      }
    }
  }
  label {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
    font-size: 1.5rem;
    color: var(--color-text-subtitle);
  }
}

h1 {
  margin-top: 30px;
  width: 90%;
  margin-inline: auto;
  border-bottom: 1px solid var(--color-border);
  color: lighten($color: $color-text-subtitle, $amount: 12%);
  font-weight: 800;
  font-family: $dm-serif;

  @include mobile {
    font-size: 1.7rem;
  }

  span {
    color: var(--color-text-heading);
  }
}

.search-empty-state {
  width: 90%;
  margin-inline: auto;
  margin-top: 40px;

  h3 {
    font-weight: 700;
    color: var(--color-text-heading);
    margin-bottom: 20px;

    @include mobile {
      font-size: 1.7rem;
    }
    @include desktop {
      font-size: 1.9rem;
    }
  }
  p {
    color: var(--color-text-subtitle);
  }
}
</style>
