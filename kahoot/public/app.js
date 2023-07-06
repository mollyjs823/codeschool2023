const URL = "http://localhost:8080/";

Vue.createApp({
    data() {
        return {
            page: "auth",
            user: {
                name: "",
                email: "",
                password: ""
            },

            quizzes: [],
            newQuiz: {
                title: "",
                description: "",
                questions: []
            },
            newQuestions: [
                {
                    questionText: "",
                    possibleChoices: [
                        {answerText: "", isCorrect: true}
                    ]
                }
            ],

            quizShown: -1
        }
    },
    methods : {
        logout: function() {
            var options = {
                method: "DELETE",
                credentials: "include"
            };

            fetch(URL + "session", options).then(response => {
                this.page = "auth";
                this.user = {
                    name: "",
                    email: "",
                    password: ""
                };
            })
        },
        loggedIn: function() {
            var options = {
                credentials: "include"
            };
            
            fetch(URL + "session", options)
            .then(response => response.json())
            .then(data => {
                if (data && data.cookie && data.userId) {
                    this.page = "";
                } else {
                    this.page = "auth";
                }
            });
        },
        signup: function() {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var options = {
                method: "POST",
                headers: myHeaders,
                body: JSON.stringify(this.user)
            };

            fetch(URL + "users", options)
            .then((response) => {
                if (response.status === 201) {
                    this.page = '';
                    this.createSession();
                } else {
                    response.text().then((data) => {
                        alert(data);
                    });
                }
            });
        },
        createSession: function() {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var options = {
                method: "POST",
                headers: myHeaders,
                body: JSON.stringify(this.user),
                credentials: 'include'
            };

            fetch(URL + "session", options)
            .then((response) => {
                if (response.status === 201) {
                    response.text().then((data) => {
                        if (data) {
                            data = JSON.parse(data);
                            this.page = "";
                            this.user.name = data.name;
                        } else {
                            alert("Can't log in");
                        }
                    });
                } else {
                    response.text().then((data) => {
                        alert(data);
                    });
                }
            });
        },

        getQuizzes: function() {
            fetch(URL + "quizzes")
            .then(response => response.json())
            .then(data => {
                this.quizzes = data;
                console.log(data);
            });
        },
        addQuestion: function() {
            this.newQuestions.push({
                questionText: "",
                possibleChoices: [
                    {answerText: "", isCorrect: true}
                ]
            });
        },
        addAnswer: function(index) {
            this.newQuestions[index].possibleChoices.push({answerText: "", isCorrect: false});
        },
        createQuiz: function() {
            // Title, description, list of questions
            // Question: list of answers
            // Answer: text, if correct
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            this.newQuiz.questions = this.newQuestions;

            var options = {
                method: "POST",
                credentials: "include",
                body: JSON.stringify(this.newQuiz),
                headers: myHeaders
            };

            fetch(URL + "quizzes", options)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            });
        },

        getRandomGradient: function() {
            var color1 = this.generateColor();
            var color2 = this.generateColor();
            var angle = Math.floor(Math.random() * 361);
            const gradient = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
            return gradient;
        },
        generateColor: function() {
            // letters: 0123456789abcdef
            const letters = "ABCDEF";
            let color = "#";
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 6)];
            }
            return color;
        },

        displayQuiz: function(index) {
            this.quizShown = index;
            this.page = "displayQuiz";
        }
    },
    created : function() {
        this.loggedIn();
        this.getQuizzes();
    }
}).mount("#app");