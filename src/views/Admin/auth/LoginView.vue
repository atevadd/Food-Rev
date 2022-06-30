<template>
  <div class="login">
    <form class="login__form">
      <header>
        <h1>Admin Login</h1>
        <p>Login to get started</p>
      </header>
      <AppInput type="email" label-name="Email" id="email" />
      <AppInput type="password" label-name="Password" id="password" />
      <app-button type="submit">Login</app-button>
    </form>
  </div>
</template>

<script setup>
import AppInput from "../../../components/form/AppInput.vue";
import AppButton from "../../../components/form/AppButton.vue";
</script>

<style lang="scss" scoped>
.login {
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  @include desktop {
    min-height: 100vh;
  }
  @include tablet {
    min-height: 70vh;
  }
  @include mobile {
    min-height: 70vh;
  }

  &__form {
    @include desktop {
      width: 35%;
    }
    @include tablet {
      width: 70%;
    }
    @include mobile {
      width: 90%;
    }
  }
  h1 {
    color: $color-text-heading;
  }
  p {
    color: $color-text-subtitle;
  }
}
</style>
