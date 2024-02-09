import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import RestaurantsPage from "./pages/RestaurantsPage.vue";
import SingleRestaurantDish from './pages/SingleRestaurantDish.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/restaurants",
      name: "RestaurantsPage",
      component: RestaurantsPage,
    },
    {
      path: "/restaurant/:id/dishes",
      name: "SingleRestaurant",
      component: SingleRestaurantDish,
    },
  ],
});
export { router };
