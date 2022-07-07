<template>
  <div class="reset">
    <form class="reset__form">
      <header>
        <h1>Reset Password</h1>
        <p>Forgot your password? Type in your email</p>
      </header>
      <AppInput type="email" label-name="Email" id="email" />
      <app-button type="submit">Reset password</app-button>
    </form>
  </div>
</template>

<script setup>
import AppInput from "../../../components/form/AppInput.vue";
import AppButton from "../../../components/form/AppButton.vue";
</script>

<style lang="scss" scoped>
.reset {
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
    color: var(--color-text-heading);
  }
  p {
    color: var(--color-text-subtitle);
  }
}
</style>
