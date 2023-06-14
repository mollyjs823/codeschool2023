
Vue.createApp({
    data() {
        return {
            email:"",
            address:"",
            info:[],

        }
    },
    methods : {
        updateInfo: function(){
            this.info.push(this.address + " " +":" + " " + this.email);
            this.email = "";
            this.address ="";
        },
        deleteaddy: function(){
            let index =this.info.indexOf(this.item);
            this.info.splice(index,1);

        }
    },
    created : function() {
    }
}).mount("#app");