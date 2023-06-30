Vue.createApp({
  data() {
    return {
      to_do: [],
      description: "",
      category: "",
      search: "",
      modalOpen: false,
      modal: {
        index: -1,
        description: "",
        amount: "",
        category: "",
      },
      filteredToDo: [],
    };
  },
  methods: {
    addToDo: function () {
      this.to_do.push({
        description: this.description,
        category: this.category,
      });
      console.log(this.to_do[0]);
      this.description = "";
      this.category = "";
    },
    deleteItem: function (index) {
      console.log(this.to_do);
      this.to_do.splice(index, 1);
      console.log(this.to_do);
    },
    toggleModal: function (index = null) {
      this.modalOpen = !this.modalOpen;
      if (index !== null) {
        let todo = this.to_do[index];
        this.modal.index = index;
        this.modal.description = todo.description;
        this.modal.category = todo.category;
      }
    },
    updateToDo: function () {
      this.to_do[this.modal.index].description = this.modal.description;
      this.to_do[this.modal.index].amount = parseFloat(this.modal.amount);
      this.to_do[this.modal.index].category = this.modal.category;
    },
  },

  created: function () {},
  watch: {
    search(newSearch, oldSearch) {
      this.filteredToDo = this.to_do.filter((to_do) => {
        return to_do.description
          .toLowerCase()
          .includes(newSearch.toLowerCase());
      });
    },
  },
}).mount("#app");
