Vue.createApp({
  data() {
    return {
      name: "",
      address: "",
      book: [],
    };
  },
  methods: {
    recordAdd: function () {
      if (this.name.length > 1 && this.address.length > 1) {
        this.book.push({
          name: this.name,
          address: this.address,
        });
        this.name = "";
        this.address = "";
      }
    },
    deleteAdd: function (item) {
      let index = this.book.indexOf(this.deleteItem);
      this.book.splice(index, 1);
    },
  },
  created: function () {},
}).mount("#app");
