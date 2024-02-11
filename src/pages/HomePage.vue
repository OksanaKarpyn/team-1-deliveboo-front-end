<script>
// import { store } from "../store";
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import Main from "../components/Main.vue";
export default {
  name: "HomePage",
  components: {
    Footer,
    Header,
    Main
  },
  data() {
    return {
      // 127.0.0.1:8000/api/api/dishes
      //127.0.0.1:8000/api/api/restaurants
      //127.0.0.1:8000/api/api/types
    };
  },
  created() {},
  computed: {},
  mounted() {},
  watch: {},
  methods: {},
};
</script>
<template>
  <Header></Header>
  <Main></Main>
</template>
<style scoped></style>
