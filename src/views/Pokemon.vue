<template>
    <div class="top">{{pokemon.id}}</div>
    <div>{{pokemon.name}}</div>
    <div>{{pokemon.type}}</div>
    <div>{{pokemon.typetwo}}</div>
    <img :src= "pokemon.image" :alt="pokemon.name">
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'PokemonView',

  mounted() {
    axios.get("https://pokeapi.co/api/v2/pokemon/"+this.id)
    .then((res) => {
      this.pokemon.name = res.data.name;
      this.pokemon.id = res.data.id;
      this.pokemon.image = res.data.sprites.front_default;
      this.pokemon.type = res.data.types[0].type.name;
      if (res.data.types[1])
      this.pokemon.typetwo = res.data.types[1].type.name;
      console.log(this.pokemon);
    });
  },
  data() {
    return {
      id: this.$route.params.id,
      pokemon: {
        name: "",
        type: "",
        typetwo:"",
        image: "",
        weaknesses: "",
      },
      showModal: "",
    };
  },
};
</script>

<style>

</style>