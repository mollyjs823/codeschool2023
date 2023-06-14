Vue.createApp({
  data() {
    return {
      name: null,
      address: null,

      book: [],
    };
  },
  methods: {
    recordInfo: function () {
      this.book.push({
        storedName: this.name,
        storedAddress: this.address,
      });
      console.log(this.name);
      console.log(this.address);
      this.name = "";
      this.address = "";
    },
    removeEntry: function (b) {
      console.log(b);
      var index = this.book.indexOf(b);
      this.book.splice(index, 1);
    },
  },
  created: function () {},
}).mount("#app");
