import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import RestaurantsPage from "./pages/RestaurantsPage.vue";
import RestaurantDetailPage from "./pages/RestaurantDetailPage.vue";
import { TRUE } from "sass";
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
      path: '/restaurant/:id',
      name: 'RestaurantDetail',
      component: RestaurantDetailPage,
    }
  ],
});
export { router };
