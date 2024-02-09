<script>
import { store } from '../store';
export default {
    name: "singleRestaurantsPage",
    components: {
     
    },
    data() {
      return {
        store
      };
    },
    created() {
      const restaurantId = this.$route.params.id; // Recupera l'ID del ristorante dalla route
      store.fetchRestaurantDishes(restaurantId);
    },
    computed: {
    },
    mounted() {
    },
    watch: {},
    methods: {},
  
  };
</script>
<template>
  <h2>paggina singolo ristorante</h2>
         <div v-if="store.singleRestaurant" class="card" style="width: 22rem;">
              <img v-if="store.singleRestaurant.photo" :src="`${store.urlImg}${store.singleRestaurant.photo}`" class="card-img-top" :alt="store.singleRestaurant.name">
              <div class="card-body">
                <h5 class="card-title">{{store.singleRestaurant.activity_name }}</h5>
                <p class="card-text">{{  store.singleRestaurant.address }}</p>
              </div>
          </div>
   
   <div class="d-flex">
      <div v-for="dish in store.restaurantDishes" :key="dish.id" >
         <div class="card" style="width: 14rem;" >
           <img v-if="dish.photo" :src="`${store.urlImg}${dish.photo}`" class="card-img-top" :alt="dish.name">
           <div class="card-body">
             <h5 class="card-title">{{ dish.name }}</h5>
             <p class="card-text">{{ dish.description }}</p>
           </div>
         </div>
       </div>
   </div>
     
      
</template>
<style scoped lang="scss"></style>