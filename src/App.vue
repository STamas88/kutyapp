<template>
  <header>
    <section class="header">
      <h1>Dog Breeds</h1>
      <img alt="dog-paw" src="./assets/images/paw.png" width="80" height="80">
    </section>
    <nav>
      <ul>
        <router-link to="/">Dog breeds</router-link>
        <router-link to="/random-dogs">Random dogs</router-link>
        <router-link to="/favorite-dogs">Your fav dogs</router-link>
      </ul>
    </nav>
  </header>
  <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {

    };
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-around;
}

header h1 {
  font-size: 4rem;
  margin: 0.8rem 0.5rem ;
}

.header {
  display: flex;
}

ul {
  margin: 2rem 0;
}

a {
  color: #02266c;
  font-size: 1.25rem;
  text-decoration: none;
  margin: 0 0.5rem;
}
</style>
