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
                    // this.createSession();
                } else {
                    response.text().then((data) => {
                        alert(data);
                    })
                    // alert("Unable to create user");
                }
            })
        }
    },
    created : function() {
    }
}).mount("#app");