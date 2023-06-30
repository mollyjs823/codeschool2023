
Vue.createApp({
    data() {
        
        return {
            description:"",
            category:"",
            modalOpen: false,
            modal:[],
            edited:[],
            

        }
    },
    methods : {
        appendItems: function(description,category){
            this.modal.push({
                description: this.description,
                category: this.category
            });
            

        },
        editItem:function(index){
            console.log(index)
            let item = this.modal[index];
            this.edited.index = index;
            this.modalOpen = true;
            this.modal.description = item.description;
            this.modal.category = item.category;

        },

        saveChanges:function(){
            this.modal[this.edited.index].description = this.edited.description
            this.modal[this.edited.index].category = this.edited.category
            
        },

        findItem:function(){

        }
            
    },
    created : function() {
        watch: {
            
            
        }
    }
}).mount("#app");