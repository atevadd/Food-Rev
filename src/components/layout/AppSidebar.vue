<template>
  <aside class="app__sidebar">
    <div class="app__logo">
      <router-link to="/"
        >Food<span class="app__logo-dot">.</span>Rev</router-link
      >
    </div>
    <nav class="app__nav">
      <ul>
        <li>
          <router-link to="/"><i class="uil uil-estate"></i>Home</router-link>
        </li>
        <li>
          <router-link to="/search"
            ><i class="uil uil-search"></i>Search</router-link
          >
        </li>
        <li>
          <router-link to="/bookmark"
            ><i class="uil uil-bookmark"></i>Bookmark</router-link
          >
        </li>
        <li>
          <router-link to="/settings"
            ><i class="uil uil-setting"></i>Settings</router-link
          >
        </li>
      </ul>
    </nav>

    <div class="app__theme">
      <span class="theme theme-light"><i class="uil uil-sun"></i> Light</span>
      <span class="theme theme-dark"><i class="uil uil-moon"></i> Dark</span>
    </div>
  </aside>
</template>

<script setup></script>

<style lang="scss" scoped>
.app__sidebar {
  height: 100%;
  border-right: 1px solid #ccc;

  @include desktop {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
.app__logo {
  color: $color-primary;
  @include desktop {
    width: 70%;
    font-size: 2rem;
    font-family: $dm-serif;
    font-weight: 800;
    // text-align: center;
    margin-top: 10px;
  }

  &-dot {
    color: $color-secondary;
    @include desktop {
      font-size: 2.6rem;
      line-height: 1;
    }
  }
}

.app__nav {
  margin-top: 70px;
  width: 80%;

  ul {
    list-style-type: none;

    li {
      margin-bottom: 30px;

      a {
        @include desktop {
          padding: 7px 10px;
          display: block;
          color: #5a5a5a;
          border-radius: 5px;

          &:hover {
            // background-color: $color-primary;
            // color: $color-white;
            outline: 1px solid $color-primary;
          }
          &.router-link-exact-active {
            background-color: $color-primary;
            color: $color-white;

            &:hover {
              outline: none;
            }
          }
        }
        @include mobile {
          &.router-link-exact-active {
            color: $color-primary;
            color: $color-white;
          }
        }

        i {
          margin-right: 15px;
        }
      }
    }
  }
}

.app__theme {
  @include desktop {
    margin-top: auto;
    margin-bottom: 30px;
    width: 70%;

    .theme {
      border-radius: 10px;
      padding: 5px 10px;
      background-color: rgba($color: #000, $alpha: 0.2);

      &:hover {
        background-color: rgba($color: #000, $alpha: 0.4);
      }
    }

    .theme-dark {
      display: none;
    }
  }
}
</style>
