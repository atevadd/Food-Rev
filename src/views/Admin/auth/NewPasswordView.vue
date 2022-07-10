<template>
  <section class="new-password">
    <form class="new-password__form">
      <header>
        <h1>Change password</h1>
        <p>Type in your new password</p>
      </header>
      <AppInput type="password" label-name="Password" id="password" />
      <AppInput type="password" label-name="Confirm password" id="cpassword" />
      <app-button type="submit">Login</app-button>
    </form>
  </section>

  <AppLoader />
</template>

<script setup>
import AppInput from "../../../components/form/AppInput.vue";
import AppButton from "../../../components/form/AppButton.vue";
import AppLoader from "../../../components/ui/AppLoader.vue";
</script>

<style lang="scss" scoped>
.new-password {
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
