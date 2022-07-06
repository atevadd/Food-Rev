<template>
  <div class="modal" v-show="store.isModalActive">
    <div class="modal__container">
      <button class="btn btn__close" @click="store.closeModal">
        <i class="uil uil-times"></i>
      </button>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "../../stores/store.js";

// Store
const store = useStore();
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #000000, $alpha: 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;

  &__container {
    position: relative;
    background-color: $color-bg;
    border-radius: 5px;
    padding: 30px;
    animation: modal 0.4s ease;

    @include mobile {
      width: 90%;
    }
    @include tablet {
      width: 70%;
    }
    @include desktop {
      width: 30%;
    }
  }
  .btn {
    position: absolute;
    right: 0;
    top: -50px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    outline: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
      background-color: #ccc;
    }
    i {
      line-height: 1;
    }
  }
}
</style>
