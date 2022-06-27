<template>
  <div class="skeleton">
    <div class="skeleton__card" v-for="card in 8" :key="card">
      <div class="img"></div>
      <div class="title"></div>
      <div class="content content-1"></div>
      <div class="content content-2"></div>
      <div class="content content-3"></div>
      <div class="link"></div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.skeleton {
  width: 90%;
  //   border: 1px solid red;
  margin-inline: auto;
  margin-top: 40px;
  display: grid;

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

  &__card {
    min-height: 400px;
    border: 1px solid $color-border;
    border-radius: 10px;
    animation: skeleton 1.5s ease infinite;
  }
  .img {
    width: 100%;
    height: 180px;
    background-color: #dedede;
    border-radius: 10px 10px 0 0;
  }
  .title {
    width: 70%;
    height: 25px;
    background-color: #dedede;
    margin-top: 40px;
    margin-bottom: 20px;
    margin-left: 10px;
  }
  .content {
    width: 70%;
    height: 10px;
    background-color: #dedede;
    margin-top: 20px;
    margin-left: 10px;
    margin-right: auto;

    &-1 {
      margin-top: 10px;
      width: 90%;
    }
    &-2 {
      margin-top: 10px;
      width: 70%;
    }
    &-3 {
      margin-top: 10px;
      width: 60%;
    }
  }
  .link {
    width: 20%;
    height: 20px;
    background-color: #dedede;
    margin-top: 40px;
    margin-left: 10px;
    margin-right: auto;
  }
}
</style>
