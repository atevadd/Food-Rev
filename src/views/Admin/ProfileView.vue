<template>
  <div class="profile">
    <div class="profile__banner"></div>
    <div class="profile__form">
      <div class="profile__form__avatar">
        <img
          src="https://images.pexels.com/photos/11293709/pexels-photo-11293709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Admin profile picture" />
      </div>
      <div class="profile__form__info">
        <div class="profile__form__info__name">
          <h3>Full name</h3>
          <span>John</span>
        </div>
        <div class="profile__form__info__email">
          <h3>Email</h3>
          <span>John</span>
        </div>
        <div class="profile__form__info__role">
          <h3>Role</h3>
          <span>Admin</span>
        </div>
        <div class="profile__form__">
          <router-link to="/admin/reset" class="change-password"
            >Change password</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.profile {
  position: relative;

  &__banner {
    width: 100%;
    height: 20vh;
    background-color: var(--color-primary);
  }
  &__form {
    position: relative;
    margin: auto;

    @include mobile {
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    @include tablet {
      width: 70%;
    }
    @include desktop {
      width: 50%;
    }

    &__avatar {
      margin-top: -100px;
      margin-bottom: 30px;
      //   border: 2px solid;
      width: 200px;
      height: 200px;
      background-color: $color-bg;
      border-radius: 50%;

      @include mobile {
        margin-top: -75px;
        width: 150px;
        height: 150px;
        margin-inline: auto;
      }
      img {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 8px solid $color-bg;

        @include mobile {
          margin-inline: auto;
        }
      }
    }
    &__info {
      display: grid;
      gap: 30px;

      @include mobile {
        grid-template-columns: repeat(1, minmax(0, 1fr));
      }
      @include tablet {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
      @include desktop {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        align-items: flex-end;
      }

      h3 {
        font-size: 0.9rem;
        color: $color-text-subtitle;
        font-weight: 400;
        line-height: 1.2;
      }
      span {
        display: block;
        font-size: 1.2rem;
        color: $color-text-heading;
        font-weight: 700;
        line-height: 1.2;
      }
      .change-password {
        display: inline-block;
        padding: 10px 25px;
        background-color: var(--color-secondary);
        border-radius: 5px;
        color: $color-bg;

        @include mobile {
          font-size: 0.8rem;
        }
      }
    }
  }
}
</style>
