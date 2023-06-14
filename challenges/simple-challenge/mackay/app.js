Vue.createApp({
  data() {
    return {
      welcome: "Welcome User",
      name: "",
      activeColor: "#fff",
    };
  },
  methods: {
    getName: function () {
      let welcomeSign = "Welcome " + this.name;
      this.welcome = welcomeSign;
      this.name = "";
    },
    changeToRed: function () {
      this.activeColor = "red";
    },
    changeToGreen: function () {
      this.activeColor = "green";
    },
    changeToBlue: function () {
      this.activeColor = "blue";
    },
  },
  created: function () {},
}).mount("#app");
