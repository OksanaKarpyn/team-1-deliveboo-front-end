<script>
  import axios from "axios";
  import Typologies from "../components/Typologies.vue";
  export default {
    name: "RestaurantsPage",
    components: {
      Typologies,
    },
    data() {
      return {
        apitypes: "http://127.0.0.1:8000/api/api/types",
        dataTypes: null,
        apirestaurants: "http://127.0.0.1:8000/api/api/restaurants",
        dataRestaurants: null,
        apidishes:'http://127.0.0.1:8000/api/api/dishes',
        dataDishes:null,
      };
    },
    created() {},
    computed: {},
    mounted() {
      this.fetchDataTypes();
      this.fetchDataRestaurants();
      this.fetchDataDishes();
    },
    watch: {},
    methods: {
      fetchDataTypes() {
        axios.get(`${this.apitypes}`).then((response) => {
          this.dataTypes = response.data.results;
          //console.log(this.dataTypes);
        });
      },
      fetchDataRestaurants() {
        axios.get(`${this.apirestaurants}`).then((response) => {
          this.dataRestaurants = response.data.results;
          //console.log(this.dataRestaurants);
        });
      },
      fetchDataDishes(){
      axios.get(`${this.apidishes}`)
      .then(response=>{
        this.dataDishes = response.data.results;
        //console.log(this.dataDishes);
      })
    }
    },
  
  };
</script>
<template>
  <div>sono paggina restorante</div>
  <!-- tipologie -->
  <div class="row">
    <h3>tipologie</h3>
    <div v-for="(type, index) in this.dataTypes" :key="index" class="card" style="width: 18rem">
      <Typologies :propsTypology="type"></Typologies>
    </div>
  </div>
  <!-- ristoranti -->
  <div class="row">
    <h3>ristoranti</h3>
    <div class="card" style="width: 18rem;" v-for="(restaurant,index) in this.dataRestaurants" :key="index">
        <img v-if="restaurant.photo !== 'null'" :src="restaurant.photo" class="card-img-top" :alt="restaurant.name">
        <img v-else src="https://picsum.photos/id/237/150/150" alt="">
      <div class="card-body">
        <p class="card-text">{{restaurant.activity_name}}</p>
        <p class="card-text">{{restaurant.address}}</p>

      </div>
    </div>
  </div>
</template>
<style scoped></style>