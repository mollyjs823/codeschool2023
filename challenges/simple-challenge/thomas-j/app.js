Vue.createApp({
    data() {
        return {
            name: 'Welcom User!',
            nameInput: '',
            backGround: '',
            activeColor: 'white'
        }
    },
    methods : {
        updateName: function() {
            this.name = this.nameInput;
            console.log(this.nameInput);
            return this.nameInput
        },

        changeColor: function (color) {
            this.activeColor = color;
            console.log(color)
        }
    },
    created : function() {
    }
}).mount("#app");