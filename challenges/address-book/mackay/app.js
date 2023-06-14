Vue.createApp({
  data() {
    return {
      addressList: [],
      name: "",
      address: "",
    };
  },
  methods: {
    addAddy: function () {
      this.addressList.push({ name: this.name, address: this.address });
      console.log(this.addressList);
      this.name = "";
      this.address = "";
    },
    remove: function (item) {
      var index = this.addressList.indexOf(item);
      this.addressList.splice(index, 1);
    },
  },
  created: function () {},
}).mount("#app");
