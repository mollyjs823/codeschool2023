Vue.createApp({
    data() {
        return {
            username: "",
            displayName: "User",
            activeColor: "white"
        }
    },
    methods : {
        setUsername: function(username) {
            this.displayName = username;
            console.log(this.displayName);
        },
        toggleColor: function(item) {
            if (item == "red") {
                this.activeColor = "red";
            } else if (item == "green") {
                this.activeColor = "green";
            } else {
                this.activeColor = "blue";
            }
        },
    },
    created : function() {
    }
}).mount("#app");