Vue.createApp({
  data() {
    return {
      user: "User",
      userName: "",
      colors: ["blue", "green", "yellow"],
      userColor: "white",
    };
  },
  methods: {
    convertUser: function () {
      this.user = this.userName;
    },
    convertColor: function (color) {
      this.userColor = color;
    },
  },
  created: function () {},
}).mount("#app");
