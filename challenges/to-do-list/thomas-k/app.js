Vue.createApp({
    data() {
        return {
            name: '',
            address: '',
            addressBook: [],

            editShow: false,
            editName: '',
            editAddress: ''
        }
    },
    methods: {
        addAddress: function () {
            this.addressBook.push({
                name: this.name,
                address: this.address,
                editShow: false
            });
        },
        removeAddress: function (address) {
            this.addressBook.splice(this.addressBook.indexOf(address), 1);
        },
        editAddressFunction: function (address) {
            address.editShow = true;
            this.editName = address.name;
            this.editAddress = address.address;
        },
        submitEditAddress: function (address) {
            address.name = this.editName;
            address.address = this.editAddress;
            address.editShow = false;
        },
        cancelEditAddress: function (address) {
            address.editShow = false;
        },
    },
    created: function () {
    }
}).mount("#app");