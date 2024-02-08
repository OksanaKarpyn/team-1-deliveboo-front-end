<script>
import axios from "axios";
export default {
  name: "Typologies",
  data() {
    return {};
  },
  props: {
    propsTypology: Object,
  },
  mounted() {
    //this.fetchDataTypes();
  },
  methods: {
    fetchDataTypes() {
      axios.get(`${this.apitypes}`).then((response) => {
        this.dataTypes = response.data.results;
        //console.log(this.dataTypes);
      });
    },
  },
};
</script>
<template>
  <img
    :src="propsTypology.cover_img"
    class="card-img-top"
    :alt="propsTypology.name"
    height="200px"
  />
  <div class="card-body">
    <p class="card-text">{{ propsTypology.name }}</p>
  </div>
</template>
