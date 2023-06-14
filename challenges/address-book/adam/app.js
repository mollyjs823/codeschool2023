Vue.createApp({
  data() {
    return {
      addresses: [],
      name: "",
      email: "",
    };
  },
  methods: {
    logAddress: function () {
      this.addresses.push({
        name: this.name,
        email: this.email,
      });
      console.log(this.addresses);
      this.name = "";
      this.email = "";
    },
    deleteItem: function (item) {
      console.log(item);
      var index = this.addresses.indexOf(item);
      this.addresses.splice(index, 1);
    },
  },
  created: function () {},
}).mount("#app");
