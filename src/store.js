import { reactive } from 'vue';
import axios from 'axios';
export const store = reactive({
   urlImg:'http://127.0.0.1:8000/storage/',
   apitypes: "http://127.0.0.1:8000/api/api/types",
   dataTypes: null,
   apirestaurants: "http://127.0.0.1:8000/api/api/restaurants",
   dataRestaurants: null,
   apidishes:'http://127.0.0.1:8000/api/api/dishes',
   dataDishes:null,
   selectedTypes: [],
   singleRestaurant:null,
   restaurantDishes: [],

   // ----------------funzioni ---------------------------------

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
    },
   //  filtra ristoranti per tipologia
    filterRestaurantsByType() {
      if (this.selectedTypes.length === 0) {
        // Se nessuna tipologia è selezionata, mostra tutti i ristoranti
        return this.dataRestaurants;
      } else {
        // Altrimenti, filtra i ristoranti in base alle tipologie selezionate
        return this.dataRestaurants.filter(restaurant => {
          return restaurant.types.some(type => this.selectedTypes.includes(type.id));
        });
      }
    },
    fetchRestaurantDishes(id) {
      axios.get(`${this.apirestaurants}/${id}`)
        .then(response => {
         this.singleRestaurant = response.data.result;
          this.restaurantDishes = response.data.result.dishes; // Salva i piatti nel dato del negozio
          console.log(this.restaurantDishes);
        })
        .catch(error => {
          console.error('Errore nel recupero dei piatti del ristorante:', error);
        });
    },
});