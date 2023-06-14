Vue.createApp({
    data() {
        return {
            name: "",
            email: "",
            history: [

            ]
        }
    },
    methods : {
        recordAddress: function() {
            this.history.push({
                name: this.name,
                email: this.email
            });
        },
        deleteItem: function(item) {
            var index = this.history.indexOf(item);
            this.history.splice(index, 1);
        }
    },
    created : function() {
    }
}).mount("#app");