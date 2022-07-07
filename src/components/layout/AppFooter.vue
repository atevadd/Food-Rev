<template>
  <footer id="footer">
    <div class="app__logo">
      <router-link to="/"
        >Food<span class="app__logo-dot">.</span>Rev</router-link
      >
    </div>
    <div class="footer__links">
      <router-link to="/">About</router-link>
      <router-link to="/">Contact</router-link>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
#footer {
  width: 100%;
  @include desktop {
    border-top: 1px solid var(--color-border);
    display: flex;
    align-items: center;
    justify-content: space-between;
    grid-row-start: 2;
    grid-row-end: 3;
    padding: 7px 10px;
    // box-shadow: 0 3px 13px rgba($color: #000000, $alpha: 0.2);
  }
}
.app__logo {
  color: var(--color-primary);

  @include mobile {
    font-size: 1.4rem;
    font-family: $dm-serif;
    font-weight: 800;
  }
  @include tablet {
    font-size: 1.4rem;
    font-family: $dm-serif;
    font-weight: 800;
  }
  @include desktop {
    font-size: 1.4rem;
    font-family: $dm-serif;
    font-weight: 800;
  }

  &-dot {
    color: var(--color-secondary);
    @include desktop {
      font-size: 1.8rem;
      line-height: 1;
    }
  }
}

.footer__links {
  a {
    font-size: 0.85rem;
    color: #333;
    margin-left: 30px;
  }
}
</style>
