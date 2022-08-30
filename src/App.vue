<template>
  <PokeHeader/>
  <PokeList/>
  <router-view/>
</template>


<script>
  import PokeHeader from "./components/PokeHeader";
  import PokeList from "./components/PokeList";
  export default {
    name: "App",
    components: {
      PokeHeader, PokeList
    }
  }
  </script>


<style lang="scss">
body {
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
