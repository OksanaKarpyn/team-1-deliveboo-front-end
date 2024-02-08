<template>
    <main class="py-5">
        <div class="container">
            <h3 class="text-center text-white fs-1 py-5">Ristoranti</h3>
            <ul class="list-unstyled d-flex flex-column gap-3">
                <li v-for="restaurant in dataRestaurants">
                    <img :src="restaurant.full_photo_img" alt="Foto Ristorante" class="img-fluid">
                    <p class="mb-0 fs-4 fw-bold">{{ restaurant.activity_name }}</p>
                    <div v-for="type in restaurant.types">
                        {{ type.name }}
                    </div>
                    <a href="">Vai</a>
                </li>
            </ul>
        </div>
    </main>
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
                    console.log(response);
                });
        },
    },
    mounted() {
        this.fetchDataRestaurants();
    }
}
</script>
<style lang="scss" scoped>
main {
    background-color: black;
}

li {
    display: flex;
    padding: 30px;
    gap: 3rem;
    align-items: center;

    a {
        text-decoration: none;
        color: inherit;
        font-size: 32px;

        &:hover {
            scale: 1.04;
        }
    }
}

li:nth-child(odd) {
    background-color: #FFCF0E;
    color: white;
    border-radius: 25px;

    img {
        border-image: 15px;
        height: 300px;
        object-fit: cover;
        border-radius: .9375rem;
    }

    a {
        margin-left: auto;

        &::after {
            content: '\2192';
        }

    }
}

li:nth-child(even) {
    background-color: #FF5757;
    justify-content: flex-end;
    border-radius: 25px;

    img {
        order: 2;
        border-radius: 15px;
        background-color: blue;
        height: 300px;
        padding: 30px;
    }

    a {
        order: -1;
        margin-right: auto;

        &::before {
            content: '\2190';
        }
    }
}
</style>