<template>
  <div class="blog">
    <router-link :to="'/blog/' + id" class="blog__image">
      <img
        src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="a picture of a meal"
        loading="lazy" />
    </router-link>
    <span class="blog__tag">resturant</span>
    <h1 class="blog__title">
      <router-link
        :to="'/blog/' + id"
        title="A day in Lagoon resturant in Nigeria"
        >A day in Lagoon resturant</router-link
      >
    </h1>
    <p class="blog__content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
      itaque quidem modi debitis culpa pariatur! Eius doloribus beatae
      accusantium neque!
    </p>
    <router-link :to="'/blog/' + id" class="blog__link"
      >Read more <i class="uil uil-arrow-right"></i
    ></router-link>

    <!-- bookmark button -->
    <button class="blog__bookmark">
      <i class="uil uil-bookmark"></i>
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
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
    // background-color: darken($color: var(--color-secondary), $amount: 10%);
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
    cursor: pointer;

    &:active {
      background-color: rgba($color: #000000, $alpha: 0.6);
    }
    &:hover {
      background-color: rgba($color: #000000, $alpha: 0.6);
    }
  }
}
</style>
