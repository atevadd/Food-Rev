<template>
  <button :type="type" class="btn"><slot></slot></button>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    required: false,
    default: "button",
  },
});
</script>

<style lang="scss" scoped>
.btn {
  position: relative;
  width: 100%;
  padding: 12px 0;
  border: none;
  border-radius: 5px;
  background-color: $color-secondary;
  color: $color-white;
  margin: 20px 0 0;
  cursor: pointer;
  outline: none;
  transition: 0.2s ease;
  letter-spacing: 1px;

  &:hover {
    background-color: darken($color: $color-secondary, $amount: 5%);
  }
}
</style>
