<template>
  <PokeHeader/>
  <router-view/>
  <PokeFooter/>
</template>


<script>
  import PokeHeader from "./components/PokeHeader";
  import PokeFooter from "./components/PokeFooter"
  export default {
    name: "App",
    components: {
      PokeHeader,PokeFooter
    }
  }
  </script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

#app {
  font-family: 'Press Start 2P', cursive, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{
  background-color: rgb(250, 241, 155);
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
