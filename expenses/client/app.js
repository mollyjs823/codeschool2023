Vue.createApp({
    data() {
        return {
            expenses: [],
            // balance: 0,
            search: "",
            filteredExpenses: [],
            sortOrder: "",
            modalOpen: false,
            modal: {
                index: -1,
                description: "",
                amount: "",
                category: ""
            },
            newExpense: {
                description: "",
                amount: "",
                category: ""
            }
        }
    },
    methods : {
        getExpenses: function() {
            fetch('http://localhost:8080/expenses')
            .then(response => response.json()).then((data) => {
                this.expenses = data;
            });
        },
        resetSearch: function() {
            this.search = "";
        },
        sortExpenses: function() {
            if (this.sortOrder == 'asc') {
                function compare(a, b) {
                    if (a.amount > b.amount) return -1;
                    if (a.amount < b.amount) return 1;
                    return 0;
                }
                this.sortOrder = 'desc';
            } else {
                function compare(a, b) {
                    if (a.amount < b.amount) return -1;
                    if (a.amount > b.amount) return 1;
                    return 0;
                }
                this.sortOrder = 'asc';
            }
            this.expenses.sort(compare);
        },
        toggleModal: function(index = null) {
            console.log(index);
            this.modalOpen = !this.modalOpen;
            if (index !== null) {
                let exp = this.expenses[index];
                this.modal.index = index;
                this.modal.description = exp.description;
                this.modal.amount = exp.amount;
                this.modal.category = exp.category;
            }
        },
        updateExpense: function() {
            myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

            var encodedData = "description=" + encodeURIComponent(this.modal.description) + 
                                "&amount=" + encodeURIComponent(this.modal.amount) + 
                                "&category=" + encodeURIComponent(this.modal.category);

            var requestOptions = {
                method: "PUT",
                body: encodedData,
                headers: myHeaders
            };
            
            var expId = this.expenses[this.modal.index]._id;
            fetch(`http://localhost:8080/expenses/${expId}`, requestOptions)
            .then((response) => {
                if (response.status === 204) {
                    this.expenses[this.modal.index].description = this.modal.description;
                    this.expenses[this.modal.index].amount = parseFloat(this.modal.amount);
                    this.expenses[this.modal.index].category = this.modal.category;
                } else {
                    alert("Not able to add expense");
                }
            });
        },
        addExpense: function() {
            myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

            var encodedData = "description=" + encodeURIComponent(this.newExpense.description) + 
                                "&amount=" + encodeURIComponent(this.newExpense.amount) + 
                                "&category=" + encodeURIComponent(this.newExpense.category);

            var requestOptions = {
                method: "POST",
                body: encodedData,
                headers: myHeaders
            };
            console.log(encodedData);
            fetch("http://localhost:8080/expenses", requestOptions)
            .then((response) => {
                if (response.status === 201) {
                    response.json().then((data) => {
                        this.expenses.push(data);
                        this.newExpense = {};
                    });
                    
                    // this.expenses.push({
                    //     description: this.newExpense.description,
                    //     amount: this.newExpense.amount,
                    //     category: this.newExpense.category
                    // });
                    // this.newExpense = {};
                } else {
                    alert("Not able to add expense");
                }
            });
        }
    },
    created : function() {
        this.getExpenses();
    },
    watch: {
        search(newSearch, oldSearch) {
            this.filteredExpenses = this.expenses.filter((expense) => {
                return expense.description.toLowerCase().includes(newSearch.toLowerCase());
            });
        }
    },
    computed: {
        balance() {
            if (this.search && this.filteredExpenses) {
                return this.filteredExpenses.reduce((total, expense) => total + expense.amount, 0);
            }
            return this.expenses.reduce((total, expense) => total + expense.amount, 0);
        }
    }
}).mount("#app");