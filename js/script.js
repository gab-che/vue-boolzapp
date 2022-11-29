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
        };
    },

    methods: {
        sendText(){
            this.selectedUser.messages.push({
                message: this.newText.message,
                date: new Date().toLocaleTimeString('it-IT'),
                status: "sent"
            });

            this.newText.message = "";
            this.receiveText()
        },

        receiveText(){
            setTimeout(()=> {
                this.selectedUser.messages.push({
                    message: "Smettila di scocciarmi",
                    date: new Date().toLocaleTimeString('it-IT'),
                    status: "received"
                });
            }, 2000)
        },

        deleteMessage(index){
            this.selectedUser.messages.splice(index, 1)
        },

        infoMessage(index){
            alert(`Data messaggio: ${this.selectedUser.messages[index].date}`);
        },

        getRandomNumber(min, max){
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },

        getRandomDate(){
            const dates = ['ieri', 'oggi', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato', 'domenica'];
            return dates[Math.floor(Math.random()*dates.length)]
        },

        searchUser(){
            this.userList.forEach((element)=>{
                const lowerName = element.name.toLowerCase();
                element.visible = true;

                if(!lowerName.includes(this.newSearchInput)){
                    element.visible = false;
                }
            })
        },

        getRandomHours(){
            const hours = this.getRandomNumber(0, 23);
            return hours.toString().padStart(2, 0);
        },

        getRandomMinutes(){
            const minutes = this.getRandomNumber(0, 59);
            return minutes.toString().padStart(2, 0);
        }
    },

    beforeMount(){
        this.selectedUser = this.userList[0];
    }
}).mount("#app");