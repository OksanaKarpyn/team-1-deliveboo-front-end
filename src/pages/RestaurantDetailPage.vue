<template>
    <div v-if="this,restaurant !== null">
        {{ this.restaurant.activity_name }}
    </div>
    <div v-else>
        Caricamento Ristorante
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'RestaurantDetailPage',
    data(){
        return{
            restaurant: null,
            restaurantId: this.$route.params.id,
        }
    },
    methods:{
        getRestaurant(){
            axios.get(`http://127.0.0.1:8000/api/restaurants/${this.restaurantId}`)
            .then((response) => {
                this.restaurant = response.data.result;
            })
            .catch((error) =>{
                console.log(error);
            })
        }
    },
    computed: {
       
    },
    beforeMount() {
        this.getRestaurant();
    },
}
</script>
<style lang="scss" scoped>
    
</style>