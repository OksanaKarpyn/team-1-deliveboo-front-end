<script>
  //import axios from "axios";
  import { store } from '../store';
  import Typologies from "../components/Typologies.vue";
  export default {
    name: "RestaurantsPage",
    components: {
      Typologies,
    },
    data() {
      return {
        store
      };
    },
    created() {},
    computed: {},
    mounted() {
      store.fetchDataTypes();
      store.fetchDataRestaurants();
      store.fetchDataDishes();
    },
    watch: {},
    methods: {},
  
  };
</script>
<template>
  <div>sono paggina restorante</div>
  <!-- tipologie -->
  <div class="row">
    <h3>tipologie</h3>
    <div class="d-flex">
      <div v-for="(type, index) in store.dataTypes" :key="index" class="card p-2" style="width: 16rem">
        <Typologies :propsTypology="type"></Typologies>
      </div>
    </div>
  </div>
  <!-- ristoranti -->
  <div class="row">
    <h3>ristoranti</h3>
    <div class="card" style="width: 14rem;" v-for="(restaurant,index) in store.filterRestaurantsByType()" :key="index">
      <RouterLink :to="{name:'SingleRestaurant',params:{id:restaurant.id} }">
        <img v-if="restaurant.photo !== 'null'" :src="`${store.urlImg}${restaurant.photo}`" class="card-img-top" :alt="restaurant.name">
        <img v-else src="https://picsum.photos/id/237/150/150" alt="">
        <div class="card-body">
          <p class="card-text">{{restaurant.activity_name}}</p>
          <p class="card-text">{{restaurant.address}}</p>
        </div>
      </RouterLink>
    </div>
  </div>
</template>
<style scoped></style>