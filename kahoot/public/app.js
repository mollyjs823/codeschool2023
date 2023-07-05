const URL = "http://localhost:8080/";

Vue.createApp({
    data() {
        return {
            page: "auth",
            user: {
                name: "",
                email: "",
                password: ""
            }
        }
    },
    methods : {
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
                        console.log(data);
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
        }
    },
    created : function() {
        this.loggedIn();
    }
}).mount("#app");