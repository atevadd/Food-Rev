<template>
  <!-- Input -->
  <div class="input-box">
    <select
      :id="id"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      required
      autocomplete="false"
    >
      <option value="" selected disabled></option>
      <option value="femi">femi</option>
      <option value="ho">ho</option>
      <option value="ho">ho</option>
      <option value="ho">ho</option>
    </select>

    <label :for="id" class="label">{{ labelName }}</label>
  </div>
</template>

<script setup>
// component props
const props = defineProps({
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

  select {
    width: 100%;
    position: relative;
    height: 45px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #ccc;
    padding: 0 10px;
    z-index: 1;
    background: transparent;

    &:focus-visible {
      border: 1px solid $color-primary;

      & + label {
        top: 0;
        color: $color-primary;
      }
    }

    &:valid + label {
      top: 0;
    }
    // &:-internal-autofill-selected {
    //   background-color: transparent !important;
    // }
  }
  .label {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    z-index: 5;
    transition: top 0.2s ease;
    // background-color: transparent;
    background-color: $color-white;
    padding-inline: 7px;
    font-size: 0.9rem;
    text-transform: capitalize;
  }
  .label-date {
    text-transform: capitalize;
    margin-bottom: 5px;
  }
}
</style>
