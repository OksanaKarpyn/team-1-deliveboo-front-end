<script>
export default {
  name: "Header",
  data() {
    return {
      menuItems: [
        {
          label: "Home",
          routeName: "HomePage",
        },
        {
          label: "Restaurants",
          routeName: "RestaurantsPage",
        },

        // Aggiungi altri elementi del menu qui
      ],
    };
  },
  mounted() {},
  methods: {
    isActiveLink(routeName) {
      return this.$route.name === routeName;
    },
  },
};
</script>
<template>
  <div class="nav-header">
    <div class="container">
      <nav class="navbar bg-body-tertiary">
        <router-link to="/" class="navbar-brand">Deliveboo</router-link>
        <ul class="nav nav-underline">
          <li class="nav-item" v-for="(item, index) in menuItems" :key="index">
            <router-link :to="{ name: item.routeName }" class="nav-link">
              {{ item.label }}
            </router-link>
          </li>
        </ul>
        <a href="#" class="btn btn-outline-success">Accedi</a>
      </nav>
    </div>
  </div>
</template>
<style scoped>
.nav-header {
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
