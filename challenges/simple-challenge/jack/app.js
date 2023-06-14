Vue.createApp({
  data() {
    return {
      welcomeMessage: "Welcome User!",
      name: "",
      colors: ["blue", "green", "red"],
      cc: "white",
    };
  },
  methods: {
    changeWelcome: function () {
      this.welcomeMessage = "Welcome " + this.name + "!";
    },
    changeColor: function (color) {
      this.cc = color;
      console.log(this.cc);
    },
  },
  created: function () {},
}).mount("#app");
