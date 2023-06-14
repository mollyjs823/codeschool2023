Vue.createApp({
  data() {
    return {
      name: "",
      address: "",
      history: [],
    };
  },
  methods: {
    addPerson: function (person) {
      this.history.push({
        name: this.name,
        address: this.address,
      });
    },
    deletePerson: function (item) {
      var index = this.history.indexOf(item);
      this.history.splice(index, 1);
    },
  },
  created: function () {},
}).mount("#app");
