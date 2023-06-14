Vue.createApp({
    data() {
        return {
            name:'',
            email:'',
            items: []
        }
    },
    methods : {
        addItem() {
            this.items.push({ name: this.name, email: this.email })
            this.name = ''
            this.email = ''
          },
          deleteItem(index) {
            this.items.splice(index, 1)
          }
    },
    created : function() {
    }
}).mount("#app");