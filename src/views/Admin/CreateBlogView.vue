<template>
  <div class="create">
    <h1>Create the blog</h1>
    <form>
      <AppInput type="text" id="blog-title" label-name="Blog title" />
      <AppInput type="text" id="blog-tags" label-name="Blog tags" />

      <div class="editt">
        <label for="blog-content">Blog Content</label>
        <ckeditor
          :editor="editor"
          :config="{ config }"
          v-model="editorData"
          id="blog-content"></ckeditor>
      </div>
      <!-- <button @click="printData">Print me</button> -->
      <app-button type="submit">Create blog</app-button>
    </form>

    {{ editorData }}
  </div>
</template>

<script setup>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ref, onMounted } from "vue";
import AppInput from "../../components/form/AppInput.vue";
import AppButton from "../../components/form/AppButton.vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../../stores/auth";
import axios from "axios";
import { getCookie } from "../../assets/js/helpers";

const editor = ClassicEditor;
const editorData = ref("");
const router = useRouter();
const auth = useAuthStore();

const printData = () => {
  console.log(editorData);
};

const uploadAdapter = (loader) => {
  return {
    upload: () => {
      return new Promise((resolve, reject) => {
        const body = new FormData();
        loader.file.then((file) => {
          body.append("uploading", file);
          axios
            .post("admin/upload", body, {
              headers: {
                Authorization: `Bearer ${getCookie("food-rev-token")}`,
              },
            })
            .then((response) => {
              resolve({ default: `${response.data.url}` });
            })
            .catch((error) => {
              reject(error);
            });
        });
      });
    },
  };
};

const uploadPlugin = (editor) => {
  editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
    return uploadAdapter(loader);
  };
};

const config = {
  extraPlugins: [uploadPlugin],
};

// check if admin is logged in
onMounted(() => {
  if (auth.isLoggedIn == false) {
    router.push({ name: "admin-login" });
  } else {
    router.push({ name: "create-new-blog" });
  }
});
</script>

<style lang="scss" scoped>
.create {
  width: 90%;
  margin: 50px auto;

  @include desktop {
    width: 90%;
  }
  @include tablet {
    width: 90%;
  }
  @include mobile {
    width: 90%;
  }

  h1 {
    color: var(--color-text-heading);
  }

  form {
    @include desktop {
      width: 70%;
    }
    @include tablet {
      width: 100%;
    }
    @include mobile {
      width: 100%;
    }
  }
}
.editt {
  position: relative;
  width: 100%;
  margin-top: 30px;

  label {
    display: block;
    color: var(--color-text-subtitle);
    font-size: 1rem;
    margin-bottom: 10px;
  }
}
</style>
