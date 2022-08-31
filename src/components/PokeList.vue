<template>
      <h1>Pokedex first gen</h1>
      <article id="article">
            <div class="card" v-for="pokemon in pokemons" :key="pokemon.id">
                  <div class="card_title">
                        <div class="card_title_id">
                              #{{pokemon.entry_number}}
                        </div>
                        <h2>{{pokemon.pokemon_species.name}}</h2>
                        <div class="card_title_type" v-for="pokemon in pokemon" :key="pokemon.types">
                              {{pokemon.types}}
                        </div>
                  </div>
                  <div class="pokeball">
                        <div class="pokeball__button"></div>
                  </div>
            </div>
      </article>
</template>

<script>
      import axios from 'axios'

      export default {
        name: 'PokeList',
        data: () => ({
            pokemons: [],
        }),
        async mounted() {
            const pokeList = await axios.get('http://pokeapi.co/api/v2/pokedex/2/')
            .then(response => response.data)
            console.log(pokeList);
            this.pokemons = pokeList.pokemon_entries
            
            // pokeList.pokemon_entries.forEach(pokemon => {
            //       const poke = axios('http://pokeapi.co/api/v2/pokemon/')
            //       .then(response => console.log(response.data))
            // });
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
      justify-content: space-between;
      height: 100px;
      width: 300px;
      margin: 30px;
      box-shadow: 2px 3px 11px -3px #919191;
      border-top-right-radius: 55px;
      border-bottom-right-radius: 55px;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
}
.card:hover{
      background-color: red;
      color: white;
}

.card_title{
      display: flex;
      align-items: center;
      padding: 10px 0px 10px 10px;
      padding: 0px 10px 0px 0px;
}

.card_title_id{
      padding: 5px;
}

h2 {
      margin: 0px;
}

</style>