<template>
  <header class="page-banner">
    <h1>
      {{ greeting() }}
      <span v-if="greeting().includes('morning')">🌅</span>
      <span v-else-if="greeting().includes('afternoon')">🌞</span>
      <span v-else>🌙</span>, Chinyere
    </h1>
    <router-link to="/admin" class="page-banner__cta"
      >Write new post</router-link
    >
  </header>
  <div class="blog-container">
    <div class="blog" v-for="blog in 20" :key="blog">
      <router-link to="/" class="blog__image">
        <img
          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="a picture of a meal" />
      </router-link>
      <span class="blog__tag">resturant</span>
      <h1 class="blog__title">
        <router-link to="/" title="A day in Lagoon resturant in Nigeria"
          >A day in Lagoon resturant</router-link
        >
      </h1>
      <p class="blog__content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        itaque quidem modi debitis culpa pariatur! Eius doloribus beatae
        accusantium neque!
      </p>
      <router-link to="/" class="blog__link"
        >Read more <i class="uil uil-arrow-right"></i
      ></router-link>

      <!-- bookmark button -->
      <button class="blog__bookmark">
        <i class="uil uil-bookmark"></i>
      </button>

      <!-- card buttons edit & delete-->
      <div class="blog__actions">
        <button type="button" class="blog__edit">
          <i class="uil uil-edit"></i>
        </button>
        <button type="button" class="blog__delete" @click="store.openModal">
          <i class="uil uil-trash"></i>
        </button>
      </div>
    </div>
  </div>

  <app-modal class="delete-modal">
    <h2>Delete blog post</h2>
    <p>Are you sure you want to delete post?</p>
    <div class="btns">
      <button class="cancel" @click="store.closeModal">No, cancel</button>
      <button class="delete">Yes, delete</button>
    </div>
  </app-modal>
</template>

<script setup>
import BlogPostCard from "../../components/ui/BlogPostCard.vue";
import AppModal from "../../components/ui/AppModal.vue";
import { useStore } from "../../stores/store";

const store = useStore();

// Return a greeting based on the time of the day
const greeting = () => {
  let time = new Date().getHours();

  if (time < 12) {
    return "Good morning";
  } else if (time >= 12 && time <= 16) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
};
</script>

<style lang="scss" scoped>
.page-banner {
  width: 90%;
  margin: 30px auto;
  background-color: lighten($color: $color-secondary, $amount: 25%);
  color: $color-text-heading;
  padding: 20px 30px;
  border-radius: 10px;
  display: flex;

  @include desktop {
    align-items: center;
    justify-content: space-between;
  }
  @include tablet {
    align-items: flex-end;
    justify-content: space-between;
  }
  @include mobile {
    display: block;
    flex-direction: column;
    justify-content: flex-start;
  }

  h1 {
    font-family: $dm-serif;

    @include mobile {
      font-size: 1.23rem;
    }
    @include tablet {
      font-size: 1.7rem;
    }
  }

  &__cta {
    display: inline-block;
    background-color: var(--color-secondary);
    padding: 10px 30px;
    color: $color-bg;
    border-radius: 1;
    border-radius: 5px;
    transition: 0.2s ease;

    @include mobile {
      margin-top: 15px;
      font-size: 0.8rem;
      padding-inline: 20px;
    }

    &:hover {
      background-color: lighten($color: $color-secondary, $amount: 5%);
    }
  }

  .side-2 {
    h3 {
      font-size: 2.4rem;
      line-height: 1.2;
    }
  }
}
.blog {
  position: relative;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  background-color: var(--color-bg-card);

  &__image {
    img {
      width: 100%;
      height: 180px;
      border-radius: 10px 10px 0 0;
      aspect-ratio: 16 / 9;
      object-fit: cover;
    }
  }
  &__tag {
    position: absolute;
    right: 5px;
    top: 168px;
    // background-color: darken($color: $color-secondary, $amount: 10%);
    background-color: var(--color-secondary);
    font-size: 0.78rem;
    padding: 3px 10px;
    border-radius: 50px;
    color: $color-bg;
  }
  &__title {
    width: 90%;
    margin-top: 18px;
    margin-bottom: 15px;
    margin-left: 15px;
    line-height: 1.3;
    font-size: 1.5rem;
    color: var(--color-text-heading);
    font-family: $dm-serif;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* number of lines to show */
    line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  &__content {
    width: 90%;
    // border: 1px solid;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 15px;
    line-height: 1.3;
    font-size: 0.89rem;
    color: var(--color-text-subtitle);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* number of lines to show */
    line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  &__link {
    display: inline-block;
    // width: 90%;
    // border: 1px solid;
    margin-top: 10px;
    margin-left: 15px;
    line-height: 1.3;
    font-size: 0.89rem;
    margin-bottom: 30px;
    color: dodgerblue;

    &:hover > i {
      transform: translateX(5px);
    }

    i {
      display: inline-block;
      margin-left: 5px;
      transition: 0.2s ease;
    }
  }

  &__bookmark {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: rgba($color: #000000, $alpha: 0.4);
    color: $color-bg;
    outline: none;
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;

    &:active {
      background-color: rgba($color: #000000, $alpha: 0.6);
    }
    &:hover {
      background-color: rgba($color: #000000, $alpha: 0.6);
    }
  }

  &__actions {
    // border: 1px solid red;
    display: inline-flex;
    position: absolute;
    bottom: 25px;
    right: 10px;

    button {
      margin-left: 10px;
      background-color: transparent;
      outline: none;
      border: none;
      font-size: 1.2rem;
      line-height: 1;
      cursor: pointer;

      &.blog__edit {
        color: $color-default;
      }
      &.blog__delete {
        color: $color-error;
      }
    }
  }
}

// delete modal styling
.delete-modal {
  h2 {
    color: var(--color-text-heading);
  }
  p {
    color: var(--color-text-subtitle);
  }
  .btns {
    display: flex;
    justify-content: flex-end;
    // border: 1px solid red;
    margin-top: 25px;
  }
  button {
    padding: 10px 25px;
    cursor: pointer;
    border: none;
    outline: none;
    background-color: transparent;
    transition: 0.2s ease;
    color: var(--color-text-subtitle);

    &.delete {
      color: $color-bg;
      background-color: $color-error;
      border-radius: 5px;

      &:hover {
        background-color: darken($color: $color-error, $amount: 5%);
      }
    }
  }
}
</style>
