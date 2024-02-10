<template>
    <main class="py-5">
        <div class="container">
            <h3 class="text-center text-white fs-1 py-5">Ristoranti</h3>
            <ul class="list-unstyled d-flex flex-column gap-3">
                <li v-for="restaurant in dataRestaurants" class="restaurant-card">
                    <a href="" class="flex-column flex-sm-row">
                        <img :src="dataRestaurants[2].full_photo_img" alt="Foto Ristorante" class="img-fluid">
                        <div>
                            <p class="fs-4 fw-bold">{{ restaurant.activity_name }}</p>
                            <p>{{ restaurant.description }}</p>
                        <ul class="list-unstyled d-flex gap-3">
                            <li v-for="type in restaurant.types" class="fw-bold bg-white p-2 text-dark rounded-2">
                                {{ type.name }}
                            </li>
                        </ul>
                        </div>

                    </a>
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

.restaurant-card {
    color: white;
    text-decoration: none;
    border-radius: 25px;

    &:hover {
        scale: 1.03;
    }

    img {
        border-image: 15px;
        height: auto;
        object-fit: cover;
        border-radius: .9375rem;
    }

    a {
        display: flex;
        text-decoration: none;
        color: inherit;
        align-self: center;
        gap: 30px;
        padding: 30px;        
    }
}

.restaurant-card:nth-child(odd) {
    background-color: #FFCF0E;

    a {
        justify-content: flex-start;
        &:hover::after {
            content: '\2192';
            align-self: center;
            justify-self: flex-end;
            font-size: 30px;
        }
    }
}

.restaurant-card:nth-child(even) {
    background-color: #FF5757;
    img {
        order: 2;
    }

    a {
        justify-content: flex-end;
        text-align: end;
        &:hover::before {
            content: '\2190';
            align-self: center;
            justify-self: flex-end;
            font-size: 30px;
        }
    }
}</style>