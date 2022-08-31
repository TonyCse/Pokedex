<template>
  <h1>Pokedex first gen</h1>
  <article id="article">
    <div class="box">
      <div class="card" v-for="pokemon in pokemons" :key="pokemon.id">
        <router-link id="link" :to="{name: 'PokemonView', params: {id: pokemon.entry_number}}">
          <div class="card_id">
            #{{pokemon.entry_number}}
          </div>
          <div class="card_title">
            <p>{{pokemon.pokemon_species.name}}</p>
          </div>
        </router-link>
      </div>
    </div>
    </article>
  </template>

<script>
  import axios from 'axios'

  export default {
    name: 'PokeView',
    data: () => ({
        lang:[],
        pokemons: [],
        pokemon:{
          id:'',
          image:''
        }
    }),
    async mounted() {
      await axios.get('http://pokeapi.co/api/v2/pokedex/2/')
      .then((res) => {
        this.pokemons = res.data.pokemon_entries
      })
      console.log(this.pokemons);
    }
  }
  
</script>

<style scoped> 
#article {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.card {
  display: flex;
  justify-content: center;
  height: 50px;
  margin: 30px;
  border: 2px solid rgb(51, 50, 50);
  text-decoration: none;
}

.card:hover{
  background-color: rgb(65, 65, 65);
}

#link {
  text-decoration: none;
  width: 100%;
  padding: 5px;
}
p{
  margin: 0px;
  color: rgb(46, 46, 46);
}

.card_id{
  color: rgb(46, 46, 46);
  width: 100%;
}
.card_title{
  color: black;
}

@font-face {
  font-family: "Pokemon GB";
  src: url("https://dl.dropboxusercontent.com/u/10822923/Pokemon_GB/Pokemon_GB.eot?") format("eot"),
       url("https://dl.dropboxusercontent.com/u/10822923/Pokemon_GB/Pokemon_GB.woff") format("woff"),
       url("https://dl.dropboxusercontent.com/u/10822923/Pokemon_GB/Pokemon_GB.ttf") format("truetype"),
       url("https://dl.dropboxusercontent.com/u/10822923/Pokemon_GB/Pokemon_GB.svg#PokemonGB") format("svg");
  font-weight: normal;
  font-style: normal;
}
.box::-webkit-scrollbar {
display: none;
}

.box {
  overflow:auto;
  overflow-y: inherit;
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  font-size: 10px;
  border-radius: 2px;
  padding: 8px;
  width: 645px;
  height: 400px;
  line-height: 16px;
  margin: auto;
  background: rgb(139, 150, 110);
  border: 1px solid white;
  box-shadow: 0 1px 0 1px black,
              inset 0 1px 0 1px black,
              0 0 0 1px black,
              inset 0 0 0 1px black;
}
</style>