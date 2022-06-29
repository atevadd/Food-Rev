<template>
  <div class="blog">
    <router-link to="/" class="blog__image">
      <img
        src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="a picture of a meal"
      />
    </router-link>
    <h1 class="blog__title">
      <router-link to="/">A day in Lagoon resturant</router-link>
    </h1>
    <p class="blog__content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
      itaque quidem modi debitis culpa pariatur! Eius doloribus beatae
      accusantium neque!
    </p>
    <router-link to="/" class="blog__link"
      >Read more <i class="uil uil-arrow-right"></i
    ></router-link>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.blog {
  //   min-height: 400px;
  border: 1px solid $color-border;
  border-radius: 10px;
  background-color: #fff;

  &__image {
    img {
      width: 100%;
      height: 180px;
      border-radius: 10px 10px 0 0;
      aspect-ratio: 16 / 9;
      object-fit: cover;
    }
  }
  &__title {
    margin-top: 15px;
    margin-bottom: 10px;
    margin-left: 15px;
    line-height: 1.3;
    font-size: 1.5rem;
    color: $color-text-heading;
    font-family: $dm-serif;
    font-weight: 600;
  }
  &__content {
    width: 90%;
    // border: 1px solid;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 15px;
    line-height: 1.3;
    font-size: 0.89rem;
    color: $color-text-subtitle;
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

    i {
      display: inline-block;
      margin-left: 5px;
    }
  }
}
</style>
