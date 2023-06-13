Vue.createApp({
    data() {
        return {
            expenses: []
        }
    },
    methods : {
    },
    created : function() {
        this.expenses = [
            {
                "description": "Grocery shopping",
                "amount": -80,
                "category": "food",
                "createdAt": "2023-05-30T12:15:43.123Z",
                "updatedAt": "2023-05-30T12:15:43.123Z"
            },
            {
                "description": "Salary",
                "amount": 2500,
                "category": "income",
                "createdAt": "2023-06-01T09:30:12.456Z",
                "updatedAt": "2023-06-01T09:30:12.456Z"
            },
            {
                "description": "Restaurant dinner",
                "amount": -60,
                "category": "food",
                "createdAt": "2023-06-02T20:45:18.789Z",
                "updatedAt": "2023-06-02T20:45:18.789Z"
            },
            {
                "description": "Rent payment",
                "amount": -1000,
                "category": "housing",
                "createdAt": "2023-06-03T15:10:05.234Z",
                "updatedAt": "2023-06-03T15:10:05.234Z"
            },
            {
                "description": "Freelance project",
                "amount": 500,
                "category": "income",
                "createdAt": "2023-06-04T11:20:35.678Z",
                "updatedAt": "2023-06-04T11:20:35.678Z"
            }
        ]
    }
}).mount("#app");