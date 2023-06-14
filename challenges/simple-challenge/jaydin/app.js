Vue.createApp({
  data() {
    return {
      name: "user",
      name2: "",
      message: "Welcome",
      color: "white",
    };
  },
  methods: {
    enterName: function () {
      this.name = this.name2;
    },
    setColor: function (color1) {
      this.color = color1;
      console.log(this.color);
    },
  },
}).mount("#app");
