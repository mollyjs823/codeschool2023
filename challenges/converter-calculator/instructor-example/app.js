Vue.createApp({
    data() {
        return {
            kilobytes: "",
            bytes: "",
            calculatedBytes: null,
            calculatedMegabits: null
        }
    },
    methods : {
        convertToB: function() {
            // kilobytes to bytes
            let answer = this.kilobytes * 1000;
            this.calculatedBytes = answer;
        },
        convertToMb: function() {
            // bytes to megabits
            let answer = (this.bytes * 0.000008).toFixed(5);
            this.calculatedMegabits = answer;
        },
        numberValid: function(num) {
            return num.length > 0 && !isNaN(num);
        }
    },
    created : function() {
    }
}).mount("#app");