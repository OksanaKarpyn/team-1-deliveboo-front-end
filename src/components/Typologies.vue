<script>
  import {
    store
  } from '../store';
  export default {
    name: "Typologies",
    data() {
      return {
        store
      };
    },
    props: {
      propsTypology: Object,
    },
    mounted() {},
    methods: {},
  };
</script>
<template>


    <label>
      <input type="checkbox" v-model="store.selectedTypes" :value="propsTypology.id"
        @change="store.filterRestaurantsByType">
      <img :src="propsTypology.cover_img" class="card-img-top rounded-circle" :alt="propsTypology.name" height="200px"/>
      <div class="card-body">
        <p class="card-text">{{ propsTypology.name }}</p>
      </div>
    </label>





</template>
<style scoped lang="scss">
</style>
