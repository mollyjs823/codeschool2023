Vue.createApp({
  data() {
    return {
      history: [],
      name: "",
      address: "",
    };
  },
  methods: {
    addInfo: function () {
      this.history.push({
        name: this.name,
        address: this.address,
      });
      console.log(history);
      this.name = "";
      this.address = "";
    },
    deleteItem: function (item) {
      index = this.history.indexOf(item);
      this.history.splice(index, 1);
      this.message = "";
      this.name = "";
      this.address = "";
    },
  },
  created: function () {},
}).mount("#app");
