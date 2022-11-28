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
            newSearchInput: "",
            dateTime : luxon.DateTime,
        };
    },

    methods: {
        sendText(){
            this.selectedUser.messages.push({
                message: this.newText.message,
                date: this.dateTime.now().toFormat('HH:mm:ss'),
                status: "sent"
            });

            this.newText.message = "";
            this.receiveText()
        },

        receiveText(){
            setTimeout(()=> {
                this.selectedUser.messages.push({
                    message: "Smettila di scocciarmi",
                    date: this.dateTime.now().toFormat('HH:mm:ss'),
                    status: "received"
                });
            }, 2000)
        },

        deleteMessage(index){
            this.selectedUser.messages.splice(index, 1)
        }
    },

    computed: {
        searchUser(){
            userList.forEach((element)=>{
                const lowerName = element.name.toLowerCase();
                element.visible = true;

                if(!lowerName.includes(this.newSearchInput)){
                    element.visible = false;
                }
            })
        }
    },

    beforeMount(){
        this.selectedUser = this.userList[0];
    }
}).mount("#app");