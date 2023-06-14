Vue.createApp({
    data() {
        errorMessage:"bad"
        return{
            kilobytes:0,
            megabits:0,
            displayBytes:0,
            displayBits:0,

        }
    },
    methods: {

        convertToB: function(){
            console.log(this.kilobytes);
            let answer = this.kilobytes *1000;
            this.displayBytes = answer;
        },

        convertToMb: function(){
            console.log(this.megabits);
            let answer = this.megabits * .00008.toFixed(5);
            this.displayBits = answer;
        },
        numberValid: function(num){
            return num.length > 0 && !isNaN(num);

        },
    }
    
}).mount("#app");