Vue.createApp({
    data() {
        return {
            dogs: [],
            filteredDogs: [],
            search: ""
        }
    },
    methods : {
    },
    created : function() {
        this.dogs = [
            {
              "breed": "Labrador Retriever",
              "size": "Large"
            },
            {
              "breed": "Chihuahua",
              "size": "Small"
            },
            {
              "breed": "German Shepherd",
              "size": "Large"
            },
            {
              "breed": "French Bulldog",
              "size": "Small"
            },
            {
              "breed": "Golden Retriever",
              "size": "Large"
            },
            {
              "breed": "Poodle",
              "size": "Medium"
            },
            {
              "breed": "Bulldog",
              "size": "Medium"
            },
            {
              "breed": "Beagle",
              "size": "Medium"
            },
            {
              "breed": "Rottweiler",
              "size": "Large"
            },
            {
              "breed": "Siberian Husky",
              "size": "Large"
            }
          ];          
    },
    watch : {
      // Watch the search input and act if it changes
        search(newSearch, oldSearch) {
          // Update the filtered dogs list to match what's in the search field (newSearch)
            this.filteredDogs = this.dogs.filter((dog) => {
                // Go through each dog in the og list and see if it includes the search term
                return dog.breed.toLowerCase().includes(newSearch.toLowerCase());
            });
        }
    }
}).mount("#app");