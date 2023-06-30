Vue.createApp({
  data() {
    return {
      toDo: [
        { category: "School", description: "Finish Homework" },
        { category: "Chores", description: "Clean the Kitchen" },
        { category: "Chores", description: "Wash the Dog" },
      ],
      toDoFiltered: [],
      search: "",
      description: "",
      category: "",
      complete: false,
      modalOpen: false,
      modal: {
        index: -1,
        description: "",
        category: "",
      },
    };
  },
  methods: {
    add: function () {
      if (this.description.length > 1 && this.category.length > 1) {
        let newItem = {
          category: this.category,
          description: this.description,
        };
        this.toDo.push(newItem);
        console.log(this.toDo);
        this.complete = false;
      } else {
        this.complete = true;
      }
    },
    deleteItem: function (index) {
      this.toDo = this.toDo.filter((item, itemIndex) => itemIndex !== index);
    },
    toggleModal: function (index = null) {
      console.log(index);
      this.modalOpen = !this.modalOpen;
      if (index !== null) {
        let item = this.toDo[index];
        this.modal.index = index;
        this.modal.description = item.description;
        this.modal.category = item.category;
      }
    },
    updateToDo: function () {
      this.toDo[this.modal.index].description = this.modal.description;
      this.toDo[this.modal.index].category = this.modal.category;
    },
    clearSearch: function () {
      this.search = "";
    },
  },
  created: function () {},
  watch: {
    search(newSearch, oldSearch) {
      this.toDoFiltered = this.toDo.filter((item) => {
        return item.category.toLowerCase().includes(newSearch.toLowerCase());
      });
    },
  },
}).mount("#app");
