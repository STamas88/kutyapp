<template>
<h1>Dog Breeds</h1>
  <div>
    <p>{{ breeds }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DogBreeds",
  data() {
    return {
      breeds: {},
    };
  },
  mounted () {
  axios.get('https://dog.ceo/api/breeds/list/all')
          .then(response => {
            (this.breeds = response.data.message);
            console.log(response.data.message);
          })
  },
};
</script>

<style scoped>

</style>