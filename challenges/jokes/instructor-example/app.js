Vue.createApp({
    data() {
        return {
            jokes: [],
            currentJoke: '',
            searchTerm: ''
        }
    },
    methods : {
        fetchJokes() {
            fetch('https://code.mollyshewchuk.com/jokes')
              .then(response => response.json())
              .then(data => {
                this.jokes = data;
                this.getRandomJoke();
              });
        },
        getRandomJoke() {
            let randomIndex = Math.floor(Math.random() * this.jokes.length);
            this.currentJoke = this.jokes[randomIndex];
        }
    },
    created : function() {
        this.fetchJokes();
    },
    computed: {
        filteredJokes() {
            if (this.searchTerm === '') {
              return this.jokes;
            }

            return this.jokes.filter((joke) => {
                return joke.toLowerCase().includes(this.searchTerm.toLowerCase())
            });
        }
    }
}).mount("#app");