<script>
export default {
  name: "Footer",
  data() {
    return {
      message: "sono footer",
    };
  },
  mounted() {},
  methods: {},
};
</script>
<template>
  <div class="wrapper">
    <div class="container">
      <h3>{{ this.message }}</h3>
    </div>
  </div>
</template>
<style scoped></style>
