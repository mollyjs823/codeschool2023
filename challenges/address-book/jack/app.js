Vue.createApp({
  data() {
    return { records: [], cName: "", cAdd: "" };
  },
  methods: {
    addA: function () {
      this.records.push({ name: this.cName, address: this.cAdd });
      this.cName = "";
      this.cAdd = "";
      console.log(this.cName);
    },
    deleteA: function (record) {
      let sIndex = this.records.indexOf(record);
      this.records.splice(sIndex, 1);
    },
    editA: function (record) {
      this.cName = record.name;
      this.cAdd = record.address;
      this.deleteA(record);
    },
    validName: function () {
      return this.cName.length >= 1;
    },
    validAddress: function () {
      return (
        this.cAdd.length >= 5 &&
        this.cAdd.indexOf("@") > 0 &&
        this.cAdd.indexOf(".") > 2 &&
        this.cAdd.indexOf(".") < this.cAdd.length - 2
      );
    },
  },
  created: function () {},
}).mount("#app");
