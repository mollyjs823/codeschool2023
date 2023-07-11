Vue.createApp({
    data() {
        return {
            socket: null,
            HTTPmessage: "",
            WSmessage: ""
        }
    },
    methods : {
        connect: function() {
            // 1: Connect to websocket
            const protocol = window.location.protocol.includes("https") ? "wss" : "ws";
            this.socket = new WebSocket(`${protocol}://localhost:8080`);
            this.socket.onopen = function() {
                console.log("Connected to websocket");
            }
            this.socket.onmessage = function(event) {
                console.log("WS message:", event.data);
            }
        },
        sendMessageHTTP: function() {
            // post to /messages
            fetch("/messages", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    message: this.HTTPmessage
                })
            }).then((response) => {
                console.log("HTTP message was sent through websocket");
            }).catch((error) => {
                console.log(error);
            }
            );
        },
        sendMessageWS: function() {
            // Send message through websocket
            this.socket.send(this.WSmessage);
        },
        getMessageWS: function() {
            // Get message through websocket
            this.socket.onmessage = function(event) {
                console.log(event.data);
            }
        }

    },
    created : function() {
        this.connect();
    }
}).mount("#app");