Vue.createApp({
    data() {
        return {
            expenses: [],
            // balance: 0
        }
    },
    methods : {
        getExpenses: function() {
            fetch('https://expenses.codeschool.cloud/expenses')
            .then(response => response.json()).then((data) => {
                this.expenses = data;
            });
        }
    },
    created : function() {
        this.getExpenses();
    },
    // watch: {
    //     expenses(newExp, oldExp) {
    //         this.expenses.forEach(e => {
    //             this.balance += e.amount;
    //         });
    //     }
    // },
    computed: {
        balance() {
            return this.expenses.reduce((total, expense) => total + expense.amount, 0);
        }
    }
}).mount("#app");