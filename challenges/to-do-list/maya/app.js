Vue.createApp({
  data() {
    return {
      description: "",
      category: "",
      toDoList: [],
      editOpen: false,
      editModal: {
        index: "",
        description: "",
        category: "",
      },
    };
  },
  methods: {
    addItem: function () {
      this.toDoList.push({
        description: this.description,
        category: this.category,
      });
      console.log(this.toDoList);
      this.description = "";
      this.category = "";
    },
    deleteItem: function (index) {
      this.toDoList.splice(index, 1);
      console.log(this.toDoList);
    },
    editItem: function (index) {
      this.editOpen = !this.editOpen;
      if (index != null) {
        let item = this.toDoList[index];
        this.editModal.index = index;
        this.editModal.description = item.description;
        this.editModal.category = item.category;
      }
    },
    closeModal: function () {
      this.editOpen = !this.editOpen;
      let index = this.editModal.index;
      let item = this.toDoList[index];
      item.description = this.editModal.description;
      item.category = this.editModal.category;
    },
    categoryColor: function (index) {
      let cat = this.toDoList[index].category;
      if (cat.toLowerCase() == "school") {
        return "var(--pink)";
      }
      if (cat.toLowerCase() == "work") {
        return "var(--green)";
      }
      if (cat.toLowerCase() == "chores") {
        return "var(--purple)";
      }
      if (cat.toLowerCase() == "self care") {
        return "var(--teal)";
      }
    },
    instantCategory: function (cat) {
      this.category = cat;
    },
  },
  created: function () {},
}).mount("#app");
