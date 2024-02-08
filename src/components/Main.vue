<template>
    <div class="container mt-3">
        <h3 class="text-center">Ristoranti</h3>
        <ul class="list-unstyled d-flex flex-column gap-3">
            <li v-for="restaurant in dataRestaurants">
                {{ restaurant.activity_name }}
            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'MainApp',
    data() {
        return {
            apirestaurants: "http://127.0.0.1:8000/api/api/restaurants",
            dataRestaurants: null,
        }
    },
    methods: {
        fetchDataRestaurants() {
            axios.get(`${this.apirestaurants}`)
                .then((response) => {
                    this.dataRestaurants = response.data.results;
                });
        },
    },
    mounted() {
        this.fetchDataRestaurants();
    }
}
</script>
<style lang="scss" scoped>
li:nth-child(odd) {
    background-color: black;
    padding: 30px;
}
li:nth-child(even){
    background-color: salmon;
    padding: 30px;
    text-align: end;
}
</style>