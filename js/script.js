import { userList } from "./usersList.js";
const {createApp} = Vue;

createApp({
    data(){
        return{
            userList,
            
        }
    },

    methods: {

    }
}).mount("#app");