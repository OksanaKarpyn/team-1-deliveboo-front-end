<script>
export default {
  name: "HeaderApp",
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
  <header>
    <nav class="d-flex justify-content-end p-3">
      <div class="d-flex justify-content-between align-items-center gap-3">
        <a href="" class="navBtn">Accedi</a>
        <a href="" class="navBtn"><i class="fa-solid fa-cart-shopping"></i></a>
      </div>
    </nav>
  </header>
</template>
<style lang="scss" scoped>
header{
  background-color: #FF5757;
  height: 100vh;
  width: 100%;
  nav{
    div{
      a{
        background-color: green;
        padding: 3px;
        transform: rotate(-2deg);
        color: black;
        text-decoration: none;
        font-size: 1.25rem;
        font-weight: bold;
        width: 100px;
        text-align: center;;
        transition: 0.5s all linear;
      }
    }
  }
}
</style>
