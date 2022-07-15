<template>
  <div class="login">
    <form class="login__form" @submit.prevent="loginAdmin">
      <header>
        <h1>Admin Login</h1>
        <p>Login to get started</p>
      </header>
      <div class="error" v-if="auth.loginError.status">
        {{ auth.loginError.message }}
      </div>
      <AppInput
        type="email"
        label-name="Email"
        id="email"
        v-model="auth.adminLoginDetails.email" />
      <AppInput
        type="password"
        label-name="Password"
        id="password"
        v-model="auth.adminLoginDetails.password" />
      <app-button type="submit">Login</app-button>
    </form>
  </div>
  <AppLoader />
</template>

<script setup>
import AppInput from "../../../components/form/AppInput.vue";
import AppButton from "../../../components/form/AppButton.vue";
import AppLoader from "../../../components/ui/AppLoader.vue";
import { useAuthStore } from "../../../stores/auth";
import { useStore } from "../../../stores/store";
import Axios from "axios";
import { useRouter } from "vue-router";

const auth = useAuthStore();
const store = useStore();
const router = useRouter();

// Login admin
const loginAdmin = () => {
  // show app loader
  store.openLoader();

  Axios.post("/login", auth.adminLoginDetails)
    .then((res) => {
      console.log(res);
      store.closeLoader();
      router.push({ name: "admin" });
    })
    .catch((err) => {
      // changing the login error in the state
      auth.setLoginError(err.message, true);
      store.closeLoader();
    });
};
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
    color: var(--color-text-heading);
  }
  p {
    color: var(--color-text-subtitle);
  }

  .error {
    padding: 10px;
    color: $color-white;
    background-color: rgba($color: $color-error, $alpha: 0.5);
    border: 1px solid $color-error;
    border-radius: 5px;
    margin: 10px 0;

    @include desktop {
      font-size: 0.9rem;
    }
    @include tablet {
      font-size: 0.9rem;
    }
    @include mobile {
      font-size: 0.85rem;
    }
  }
}
</style>
