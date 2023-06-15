Vue.createApp({
    data() {
        return {
            items: [
                {
                    description: 'test item',
                    category: 'test'
                }
            ],
            filteredItems: [],

            // Input fields to add item
            newItem: {
                description: "",
                category: ""
            },

            // Sidebar for editing
            sidebar: {
                show: false,
                item: null,
                description: "",
                category: ""
            },

            search: ""
        }
    },
    methods : {
        addItem: function() {
            // Add the to-do item to the list
            this.items.push({
                description: this.newItem.description,
                category: this.newItem.category
            });

            // Clear the input fields
            this.newItem.description = "";
            this.newItem.category = "";
        },
        deleteItem: function(index) {
            // Remove 1 item starting at INDEX
            this.items.splice(index, 1);
        },
        toggleEdit: function(index=null) {
            // Check if index is null (will be the case if click close button - not passing in item)
            if (index !== null) {
                // Save index for use later
                this.sidebar.item = index;

                // Prefill the edit input fields
                this.sidebar.description = this.items[index].description;
                this.sidebar.category = this.items[index].category;
            }

            // Toggle the sidebar open or closed
            this.sidebar.show = !this.sidebar.show;
        },
        updateItem: function(index) {
            // Change value in items list to what the user edited it to
            this.items[index].description = this.sidebar.description;
            this.items[index].category = this.sidebar.category;

            // Hide the sidebar
            this.sidebar.show = false;
        }
    },
    watch : {
        search(newSearch, oldSearch) {
            // Alter the filtered items array
            // Can check if the inputs match EITHER the description OR category
            this.filteredItems = this.items.filter((item) => {
                return (item.description.toLowerCase().includes(newSearch.toLowerCase())) || (item.category.toLowerCase().includes(newSearch.toLowerCase()));
            });
        }
    }
}).mount("#app");