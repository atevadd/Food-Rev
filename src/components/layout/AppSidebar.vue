<template>
  <aside class="app__sidebar">
    <!-- App Logo -->
    <div class="app__logo">
      <router-link to="/"
        >Food<span class="app__logo-dot">.</span>Rev</router-link
      >
    </div>
    <!-- App Navigation -->
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
            ><i class="uil uil-bookmark"></i>Bookmarks</router-link
          >
        </li>
      </ul>
    </nav>
    <!-- App Theme changer -->
    <div class="app__theme">
      <span class="theme theme-dark" @click="toggleDark()" v-if="isDark"
        ><i class="uil uil-moon"></i> Dark</span
      >
      <span class="theme theme-light" @click="toggleDark()" v-else
        ><i class="uil uil-sun"></i> Light</span
      >
    </div>
  </aside>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<style lang="scss" scoped>
.app__sidebar {
  background-color: var(--color-bg);

  @include mobile {
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: max-content;
    padding: 12px 20px;
    border-bottom: 1px solid var(--color-border);
    z-index: 99;
  }
  @include tablet {
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: max-content;
    padding: 12px 30px;
    border-bottom: 1px solid var(--color-border);
    // background-color: var(--color-bg);
    z-index: 99;
  }

  @include desktop {
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    border-right: 1px solid var(--color-border);
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
    width: 70%;
    font-size: 2rem;
    font-family: $dm-serif;
    font-weight: 800;
    margin-top: 10px;
  }

  &-dot {
    color: var(--color-secondary);
    @include desktop {
      font-size: 2.6rem;
      line-height: 1;
    }
  }
}

.app__nav {
  @include mobile {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px 0;
    box-shadow: 0 3px 13px rgba($color: $color-black, $alpha: 0.2);
    background-color: var(--color-bg);
    z-index: 99;
  }
  @include tablet {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px 0;
    box-shadow: 0 3px 13px rgba($color: $color-black, $alpha: 0.2);
    background-color: var(--color-bg);
    z-index: 99;
  }
  @include desktop {
    margin-top: 70px;
    width: 80%;
  }

  ul {
    list-style-type: none;

    @include mobile {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }
    @include tablet {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }

    li {
      @include desktop {
        margin-bottom: 30px;
      }

      a {
        color: var(--color-text-subtitle);
        transition: none;
        @include desktop {
          padding: 7px 10px;
          display: block;
          color: var(--color-text-subtitle);
          border-radius: 5px;

          &:hover {
            outline: 1px solid var(--color-primary);
          }
          &.router-link-exact-active {
            background-color: var(--color-primary);
            color: $color-white;

            &:hover {
              outline: none;
            }
          }
        }
        @include tablet {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          line-height: 1.5;

          &.router-link-exact-active {
            color: var(--color-primary);
          }
        }
        @include mobile {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          line-height: 1.5;

          &.router-link-exact-active {
            color: var(--color-primary);
            font-weight: 900;
          }
        }

        i {
          @include mobile {
            font-size: 1.3rem;
            line-height: 0;
          }
          @include tablet {
            font-size: 1.3rem;
            line-height: 0;
          }
          @include desktop {
            margin-right: 15px;
          }
        }
      }
    }
  }
}

.app__theme {
  .theme {
    color: var(--color-text-subtitle);
  }
  @include mobile {
    .theme {
      border-radius: 10px;
      padding: 5px 10px;
      font-size: 0.8rem;
      cursor: pointer;

      i {
        display: inline-block;
        margin-right: 7px;
      }
    }
  }
  @include tablet {
    .theme {
      border-radius: 10px;
      padding: 5px 10px;
      font-size: 0.8rem;
      cursor: pointer;

      i {
        display: inline-block;
        margin-right: 7px;
      }
    }
  }
  @include desktop {
    margin-top: auto;
    margin-bottom: 30px;
    width: 70%;

    .theme {
      border-radius: 10px;
      padding: 5px 10px;
      cursor: pointer;

      i {
        display: inline-block;
        margin-right: 7px;
      }
    }
  }
}
</style>
