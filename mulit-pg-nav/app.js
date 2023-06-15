Vue.createApp({
    data() {
        return {
            page: 1
        }
    },
    methods : {
        goToPage: function(page) {
            this.page = page;
        }
    },
    created : function() {
    }
}).mount("#app");