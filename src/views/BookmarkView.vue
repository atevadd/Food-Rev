<template>
  <!-- Bookmark movies -->
  <div class="bookmark" v-if="bookmarkStore.getAllBookmarkedBlog.length > 0">
    <header class="bookmark__header">
      <h1>Bookmarked Blogs</h1>
    </header>
    <div class="bookmark__container">
      <BlogPostCard v-for="card in 4" :key="card" />
    </div>
  </div>
  <div class="bookmark__empty-state" v-else>
    <img
      src="@/assets/images/bookmark-empty.svg"
      alt="Bookmark empty state image"
    />
    <h1>You currently have no bookmarked blog</h1>
  </div>
</template>

<script setup>
import BlogPostCard from "../components/ui/BlogPostCard.vue";
import { useBookmarkStore } from "@/stores/bookmark.js";

const bookmarkStore = useBookmarkStore();
</script>

<style lang="scss" scoped>
.bookmark {
  position: relative;

  &__header {
    width: 90%;
    margin-inline: auto;
    margin-top: 40px;

    h1 {
      @include mobile {
        font-size: 1.5rem;
        color: $color-text-heading;
      }
      @include tablet {
        font-size: 1.5rem;
        color: $color-text-heading;
      }
      @include desktop {
        font-size: 1.9rem;
        color: $color-text-heading;
      }
    }
  }

  &__container {
    width: 90%;
    margin-inline: auto;
    margin-top: 30px;
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
}

.bookmark__empty-state {
  width: 90%;
  margin-inline: auto;
  // border: 1px solid;

  @include desktop {
    margin-top: 15%;
  }
  @include tablet {
    margin-top: 15%;
  }
  @include mobile {
    margin-top: 20%;
  }

  img {
    display: block;
    margin: auto;
    // border: 1px solid;

    @include desktop {
      width: 400px;
      // height: 400px;
    }
    @include tablet {
      width: 400px;
      // height: 400px;
    }
    @include mobile {
      width: 70%;
      // height: 400px;
    }
  }
  h1 {
    text-align: center;
    margin-top: 20px;
    color: $color-text-heading;

    @include desktop {
      font-size: 1.7rem;
    }
    @include mobile {
      font-size: 1.2rem;
    }
  }
}
</style>
