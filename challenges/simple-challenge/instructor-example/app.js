Vue.createApp({
    data() {
        return {
            username: "User",
            inputName: "",
            colors: [
                'aquamarine',
                'coral',
                'cadetblue'
            ],
            activeColor: "#fff"
        }
    },
    methods : {
        enterName: function() {
            // Set the username to what the user entered
            this.username = this.inputName;
            // Clear the input
            this.inputName = "";
        },
        changeColor: function(color) {
            this.activeColor = color;
        }
    },
    created : function() {
    }
}).mount("#app");