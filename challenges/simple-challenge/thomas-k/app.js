Vue.createApp({
    data() {
        return {
            welcomeMessage: 'Hello! Welcome to Vue.js',
            userName: '',
            colors: ['red', 'green', 'blue', 'yellow', 'purple', 'pink'],
            color: 'white',
            addingColor: false,
            inputColor: ''
        }
    },
    methods: {
        validUserName: function () {
            return this.userName.length > 1;
        },
        updateUserName: function () {
            this.welcomeMessage = 'Hello ' + this.userName[0].toUpperCase() + this.userName.slice(1).toLowerCase() + '! Welcome to Vue.js';
        },
        changeColor: function (color) {
            this.color = color;
        },
        showAddColor: function () {
            this.addingColor = true;
        },
        addColor: function () {
            if (this.inputColor.length > 0) {
                this.addingColor = false;
                this.colors.push(this.inputColor);
                this.inputColor = '';
            }
        }
    },
    created: function () {
    }
}).mount("#app");