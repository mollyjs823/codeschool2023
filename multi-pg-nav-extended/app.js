Vue.createApp({
    data() {
        return {
            // page number variable
            currentPageNumber: 1,
        }
    },
    methods : {
        // updates page number variable
        goToPage: function (page_clicked) {
            this.currentPageNumber = page_clicked;
        }
    },
    created : function() {
    }
}).mount("#app");


// Extra Challenges:

// - Create arrows/buttons to increase/decrease the page number (aka flip pages)

// - Disable the left / right buttons if the user is at the first or last page

// - Add an input section allowing the user to go directly to a page number

// - Display two pages at a time - side by side (similar to a book). 
//   When you 'flip the page', show the next two pages.