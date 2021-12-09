const app = new Vue({
    el: '#app',
    data: {
        userSearch: '',
        showMenu: false,
        showSearch: false
    },
    // components: {
    //     'cart': cart,
    //     'products': products,
    //     'filter-el': filterEl,
    //     'carousel': carousel,
    //     'cart-page': cartPage
    // },
    mounted() { },
    methods: {
        tit() {
            console.log(this.$refs.cart);
        },
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    this.$refs.error.text = error;
                })
        },
        postJson(url, data) {
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    this.$refs.error.text = error;
                })
        },
        putJson(url, data) {
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    this.$refs.error.text = error;
                })
        },
        deleteJson(url, data) {
            return fetch(url, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    this.$refs.error.text = error;
                })
        }

    }

});

