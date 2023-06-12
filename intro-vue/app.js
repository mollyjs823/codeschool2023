Vue.createApp({
    data() {
        return {
            message: "hello world",
            items: [
                {text: "item 1", show: true, color: "#3aa"},
                {text: "item 2", show: true, color: "#8af"},
                {text: "item 3", show: true, color: "#98f"},
                {text: "item 4", show: true, color: "#f9f"}
            ],
            showText: true
        }
    },
    methods: {
        toggleColor: function(item) {
            console.log(item);
            
            item.show = !item.show;
        },
        appendText: function(item) {
            item.text += "b";
        },
        toggleText: function() {
            this.showText = !this.showText;
        }
    }
}).mount("#app");
