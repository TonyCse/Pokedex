<template>
  <h1>Pokedex first gen</h1>
  <article id="article">
    <div class="pokedex"> 
      <div class="pokedex-left">
        <div class="screen-border">
          <div class="container">
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
            <span class="arrow"></span>
          </div>
        </div>
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
.container{
  overflow: scroll;
  height: 280px;
  border: 2px solid black;
  background-color:#79b64d;;
  margin: 25px;
}
.container::-webkit-scrollbar{
  display: none;
}

.screen-border{
  position: relative;
    background-color: #4A4A4A;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    height: 350px;
    border-radius: 4px 4px 20px 4px;
}
.card {
  display: flex;
  justify-content: center;
  height: 50px;
  margin: 30px;
  border: 2px solid rgb(51, 50, 50);
  text-decoration: none;
  animation: pokeanimation 1s ease both;
  -webkit-animation: pokeanimation 1s ease both;
}

@keyframes pokeanimation {
        0% {
          transform: translateY(15px);
          opacity: 0;
        }
        100% {
          transform: translateY(0);
          opacity: 1;
        }
    }

.card:hover{
  background-color: rgb(195, 207, 161);
  animation: bounce 1s ease both;
}

@keyframes bounce {
    10% { transform:translateY(0%); }
    30% { transform:translateY(-15%); }
    50% { transform:translateY(0%); }
    70% { transform:translateY(-7%); }
    80% { transform:translateY(0%); }
    99% { transform:translateY(-3%); }
    100% { transform:translateY(0); }
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

.pokedex {
  display: flex;
  justify-content: center;
  width: 1000px;
  height: 670px;
  margin: auto;
}
.pokedex-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 50%;
  border-radius: 40px 15px 15px 40px;
  background: #d30a40;
  border-left: 20px solid #90062a;
  border-bottom: 12px solid #90062a;
}
.pokedex-lights-container {
  height: 100px;
  width: 100%;
  display: flex;
}
.pokedex-lights-lg {
  background: #a8f2fb;
  /* Old browsers */
  background: -moz-radial-gradient(center, ellipse cover, #a8f2fb 0%, #0df1fc 50%, #0ebcd4 100%);
  /* FF3.6-15 */
  background: -webkit-radial-gradient(center, ellipse cover, #a8f2fb 0%, #0df1fc 50%, #0ebcd4 100%);
  /* Chrome10-25,Safari5.1-6 */
  background: radial-gradient(ellipse at center, #a8f2fb 0%, #0df1fc 50%, #0ebcd4 100%);
  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  border-radius: 50%;
  border-top: 5px solid white;
  border-right: 5px solid white;
  border-bottom: 10px solid white;
  border-left: 10px solid white;
  height: 60px;
  width: 60px;
  margin: 10px 0 10px 10px;
}
.pokedex-lights-sm-container {
  display: flex;
  padding-top: 5px;
}
.pokedex-lights-sm-light {
  background: white;
  border-radius: 50%;
  margin: 7px;
  height: 25px;
  width: 25px;
}
.pokedex-screen {
  position: relative;
  background: #e3e3e3;
  border-radius: 20px;
  border-left: 7px solid #838584;
  border-bottom: 7px solid #838584;
  width: 400px;
  height: 320px;
  margin: 30px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pokedex-screen:before {
  content: " ";
  left: -20px;
  top: 281px;
  position: absolute;
  width: 110px;
  height: 8px;
  transform: rotate(45deg);
  background-color: #838584;
}
.pokedex-screen-cut {
  position: absolute;
  top: 377px;
  right: 854px;
  border-top: 80px solid transparent;
  border-left: 80px solid #d30a40;
  z-index: 1;
}
.pokedex-screen-top {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.pokedex-screen-light {
  background: #d30a40;
  width: 10px;
  height: 10px;
  margin: 15px 10px;
  border-radius: 50%;
}
.pokedex-screen-image-container {
  background: white;
  border-radius: 10px;
  height: 200px;
  width: 330px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  background-color: rgb(161, 177, 116);
}
.pokedex-screen-image-container, img {
  width: 250px;
}
.pokedex-screen-image {
  height: 100%;
}
.pokedex-screen-bottom {
  height: 80px;
  width: 65%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.pokedex-screen-button {
  height: 35px;
  width: 35px;
  background: #d30a40;
  border-radius: 50%;
}
.pokedex-screen-vents {
  width: 80px;
  display: flex;
  flex-direction: column;
}
.pokedex-screen-vent {
  width: 100%;
  height: 3px;
  border-radius: 10px;
  background: black;
  margin: 3px;
}
.pokedex-controls {
  width: 80%;
  align-self: center;
  display: flex;
  align-items: center;
}
.pokedex-controls-button {
  background: #2c2c2c;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border-left: 10px solid black;
  border-bottom: 10px solid black;
  margin-right: 10px;
}
.pokedex-controls-longButton {
  height: 15px;
  width: 70px;
  background: white;
  margin: 15px;
  border-radius: 10px;
}
.pokedex-controls .redButton {
  background: #cc0323;
}
.pokedex-controls .blueButton {
  background: #0e6f80;
}
.pokedex-pad {
  height: 100px;
  width: 100px;
  position: absolute;
  top: 480px;
  left: 400px;
}
.pokedex-pad-v {
  height: 100%;
  width: 30%;
  border-left: 8px solid black;
  border-bottom: 8px solid black;
  border-radius: 5px;
  background: #2c2c2c;
  position: absolute;
  left: -8px;
}
.pokedex-pad-h {
  height: 30%;
  width: 100%;
  background: #2c2c2c;
  border-radius: 5px;
  border-left: 8px solid black;
  border-bottom: 8px solid black;
  top: 35px;
  left: -43px;
  position: absolute;
}
.pokedex-pad-middle {
  height: 100%;
  width: 30%;
  border-radius: 5px;
  background: #2c2c2c;
  position: absolute;
  z-index: 1;
}
.pokedex-pad-middle-circle {
  border: 1px solid black;
  height: 20px;
  width: 20px;
  position: absolute;
  top: 40px;
  left: 2px;
  border-radius: 50%;
}
.pokedex-smallScreen {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #5fc480;
  height: 90px;
  width: 180px;
  border-radius: 10px;
  position: absolute;
  top: 550px;
  left: 130px;
}
</style>