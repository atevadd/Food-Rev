<template>
  <div class="btn">
    <button class="btn__loadmore">Load more</button>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.btn {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 20px 0 30px;

  &__loadmore {
    display: inline-block;
    margin-inline: auto;
    border: 1px solid var(--color-border);
    border-radius: 50px;
    padding: 7px 20px;
    color: #858585;
    font-size: 0.8rem;
    background-color: transparent;
    cursor: pointer;
    outline: none;

    &:active {
      background-color: #e0e0e0;
    }
  }
}
</style>
