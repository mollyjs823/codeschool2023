Vue.createApp({
    data() {
        return {
            recipes: [],
            search: ""
        }
    },
    methods : {
        searchRecipes: function() {
            fetch(`https://code.mollyshewchuk.com/recipes?q=${this.search}`)
            .then(response => response.json())
            .then(data => {
                this.recipes = data;
                this.sortRecipes();
                console.log(this.recipes);
            });
        },
        sortRecipes: function() {
            this.recipes = this.recipes.sort((a, b) => {
                if (a.title > b.title) return 1;
                if (a.title < b.title) return -1;
                return 0;
            });
        },
        getRecipes: function() {
            fetch("https://code.mollyshewchuk.com/recipes")
            .then(response => response.json())
            .then(data => {
                this.recipes = data;
                this.sortRecipes();
                console.log(this.recipes);
            });
        }
    },
    created : function() {
        this.getRecipes();
    }
}).mount("#app");