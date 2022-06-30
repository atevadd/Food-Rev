import { defineStore } from "pinia";

export const useBookmarkStore = defineStore({
  id: "bookmark",
  state: () => ({
    allBookmarkedBlog: [],
  }),
  getters: {
    getAllBookmarkedBlog() {
      return this.allBookmarkedBlog;
    },
  },
  actions: {
    addToBookmarkedBlog() {
      this.allBookmarkedBlog.push("2");
    },
    removeFromBookmarkBlog() {
      this.allBookmarkedBlog.splice(this.allBookmarkedBlog.length - 1, 1);
    },
  },
});
