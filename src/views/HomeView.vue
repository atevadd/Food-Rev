<script setup>
import { ref } from "vue";
import AppInput from "../components/form/AppInput.vue";
import AppDropdown from "../components/form/AppDropdown.vue";

let van = ref("");
</script>

<template>
  <div>
    hello
    <AppInput type="text" label-name="Username" id="usn" />
    <AppInput type="email" label-name="email" id="email" />
    <AppDropdown type="email" label-name="names" id="name" v-model="van" />
    {{ van }}
  </div>
</template>

<style lang="scss" scoped>
span {
  font-size: 1.5rem;
  line-height: 1.5;
}
</style>
