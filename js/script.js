import { userList } from "./usersList.js";
const {createApp} = Vue;

createApp({
    data(){
        return{
            userList,
            selectedUser: null,
        }
    },

    methods: {

    },

    beforeMount(){
        this.selectedUser = this.userList[0];
    }
}).mount("#app");