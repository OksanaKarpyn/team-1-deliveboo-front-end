<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "app",
  components: {
    Header,
    Footer,
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<template>
  <div class="wrapper">
    <div class="header">
      <Header></Header>
    </div>
    <main class="main border border-danger">
      <div class="container">
        <RouterView></RouterView>
      </div>
    </main>
    <section class="footer">
      <Footer></Footer>
    </section>
  </div>
</template>

<style scoped>
.wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.wrapper .header {
  height: 90px;
  background-color: #f8f9fa;
}

.wrapper .main {
  flex-grow: 1;
  height: calc(100% - 180px);
}

.wrapper .footer {
  background-color: rgb(85, 79, 79);
  color: #ffff;
  height: 90px;
}
</style>
