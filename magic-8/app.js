Vue.createApp({
    data() {
        return {
            message: "",
            messageBank: [
                "Yes",
                "No",
                "Maybe",
                "Ask Again Tomorrow",
                "Probably",
                "Probably Not"
            ],
            question: ""
        }
    },
    methods : {
        askQuestion: function() {
            console.log(this.question);

            if (!this.isValidQuestion()) return;

            let index = Math.floor(Math.random() * this.messageBank.length);
            this.message = this.messageBank[index];
            this.question = "";
        },
        isValidQuestion: function() {
            return this.question[this.question.length - 1] == '?';
        }
    }
}).mount("#app");