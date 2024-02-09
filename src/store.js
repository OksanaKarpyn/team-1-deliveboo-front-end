import { reactive } from 'vue';
import axios from 'axios';
export const store = reactive({
   apitypes: "http://127.0.0.1:8000/api/api/types",
   dataTypes: null,
   apirestaurants: "http://127.0.0.1:8000/api/api/restaurants",
   dataRestaurants: null,
   apidishes:'http://127.0.0.1:8000/api/api/dishes',
   dataDishes:null,
   selectedTypes: [],


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
       // console.log(this.dataRestaurants);
      });
    },
    fetchDataDishes(){
    axios.get(`${this.apidishes}`)
    .then(response=>{
      this.dataDishes = response.data.results;
      //console.log(this.dataDishes);
    })
    },
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
    }

});