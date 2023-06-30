Vue.createApp({
  data() {
    return {
      description: "",
      category: "",
      search: "",
      toDoList: [],
      filteredList: [],
      modalOpen: false,
      modal: {
        index: -1,
        description: "",
        category: "",
      },
    };
  },
  methods: {
    addItems: function () {
      if (this.description.length > 0 && this.category.length > 0) {
        this.toDoList.push({
          description: this.description,
          category: this.category,
        });
        this.description = "";
        this.category = "";
      } else {
        console.log("Nothing");
      }
    },
    deleteItem: function (item) {
      var index = this.toDoList.indexOf(item);
      this.toDoList.splice(index, 1);
    },
    toggleModal: function (index = null) {
      this.modalOpen = !this.modalOpen;
      if (!index !== null) {
        let item = this.toDoList[index];
        this.modal.index = index;
        this.modal.description = item.description;
        this.modal.category = item.category;
        this.modal.description = "";
        this.modal.category = "";
      }
    },
    updateExpense: function () {
      this.toDoList[this.modal.index].description = this.modal.description;
      this.toDoList[this.modal.index].category = this.modal.category;
      this.modal.description = "";
      this.modal.category = "";
      this.modalOpen = false;
    },
  },
  created: function () {},
  watch: {
    search(newSearch, oldSeearch) {
      console.log(newSearch);
      this.filteredList = this.toDoList.filter((item) => {
        return item.description.toLowerCase().includes(newSearch.toLowerCase());
      });
    },
  },
}).mount("#app");
