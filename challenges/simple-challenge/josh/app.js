Vue.createApp({
  data() {
    return {
      name: "",
      nameInput: "",
      items: ["blueviolet", "blanchedalmond", "aquamarine"],
      activeColor: "#fff",
    };
  },
  methods: {
    upDateName: function () {
      this.name = this.nameInput;
      console.log(this.name);
    },
    toggleColor: function (item) {
      console.log(item);
      this.activeColor = item;
    },
  },
  created: function () {},
}).mount("#app");
