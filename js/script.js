import { userList } from "./usersList.js";
const {createApp} = Vue;

createApp({
    data(){
        return{
            userList,
            selectedUser: null,
            newText: [
                {
                    message: "",
                }
            ],
        };
    },

    methods: {
        sendText(){
            this.selectedUser.messages.push({
                message: this.newText.message,
                date: new Date().toLocaleString(),
                status: "sent"
            });
            
            this.newText.message = "";
        }
    },

    beforeMount(){
        this.selectedUser = this.userList[0];
    }
}).mount("#app");