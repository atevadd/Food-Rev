<template>
  <!-- Input -->
  <div class="input-box">
    <!-- label for input with the type of date -->
    <label :for="id" v-if="type === 'date'" class="label-date">{{
      labelName
    }}</label>

    <input
      :type="type"
      :id="id"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      required
      autocomplete="false" />

    <!-- label for other inputs except date -->
    <label
      :for="id"
      class="label"
      v-if="['text', 'email', 'password', 'tel', 'number'].includes(type)"
      >{{ labelName }}</label
    >
  </div>
</template>

<script setup>
// component props
const props = defineProps({
  type: {
    type: String,
    required: true,
    default: "text",
  },
  id: {
    type: String,
    required: true,
  },
  labelName: {
    type: String,
    required: false,
    default: "Label",
  },
  modelValue: {
    type: String,
  },
});

// component emit
defineEmits(["update:modelValue"]);
</script>

<style lang="scss" scoped>
.input-box {
  position: relative;
  width: 100%;
  margin-top: 30px;

  input {
    width: 100%;
    position: relative;
    height: 45px;
    border-radius: 5px;
    outline: none;
    border: 1px solid $color-border;
    padding: 0 10px;
    z-index: 1;
    background: transparent;
    font-size: 0.85rem;

    &:focus-visible {
      border: 1px solid var(--color-primary);

      & + label {
        top: 0;
        color: var(--color-primary);
      }
    }

    &:valid + label {
      top: 0;
    }
  }
  .label {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    z-index: 5;
    transition: top 0.2s ease;
    // background-color: transparent;
    background-color: $color-bg;
    padding-inline: 7px;
    font-size: 0.9rem;
    text-transform: capitalize;
    color: $color-text-label;
  }
  .label-date {
    text-transform: capitalize;
    margin-bottom: 5px;
  }
}
</style>
