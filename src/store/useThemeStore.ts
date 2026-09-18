import {defineStore} from "pinia"

export const useThemeStore = defineStore("useThemeStore",{
    state:()=>({
        theme: false as boolean
    }),
    getters:{
        get_theme_status: (state) => state.theme
    },
    actions:{
        changeTheme(){ this.theme = !this.theme }
    },
})