Vue.createApp({
    data() {
        return {
            kilobytes: "",
            megabits: "",
            displayBytes: null,
            displayMb: null
        }
    },
    methods : {
        convertToB: function() {
            // kilobytes to bytes
            let answer = this.kilobytes * 1000;
            this.displayBytes = answer;
        },
        // bytes to megabits = bytes * 0.000008
        convertToMb: function() {
            let answer = (this.kilobytes * 0.000008).toFixed(5);
            this.displayMb = answer;
        },

        numberValid: function(num) {
            return num.length > 0 && !isNaN(num);
        }
    },
    created : function() {
    }
}).mount("#app");