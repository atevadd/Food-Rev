import {defineStore} from "pinia";

export const useAuthStore = defineStore({
    id: "auth",
    state: () =>({
        isAdmin: false,
    }),
    actions: {
        adminIsLogged(){
            this.isAdmin = true;
        }
    }
})