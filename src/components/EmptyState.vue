<template>
  <div class="empty">
    <div class="empty__container">
      <img src="@/assets/images/empty.svg" alt="empty state" />
      <h1>No blog post to show</h1>
      <p>
        This may be due to the fact that the admin has not posted any blog or a
        network error.
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.empty {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @include mobile {
    min-height: 80vh;
  }
  @include tablet {
    min-height: 80vh;
  }
  @include desktop {
    min-height: 100vh;
  }

  &__container {
    width: 500px;
    height: 100%;
    text-align: center;

    @include mobile {
      width: 90%;
    }

    img {
      width: 300px;
      height: 300px;
      display: block;
      margin-inline: auto;
    }
    h1 {
      margin: 25px 0 5px;
      font-size: 1.8rem;

      @include mobile {
        font-size: 1.5rem;
      }
    }
    p {
      @include mobile {
        font-size: 0.9rem;
      }
      color: lighten($color: #333, $amount: 15%);
    }
  }
}
</style>
