<template>
<div>
  <h1>Pokedex first gen</h1>
  <article id="article">
    <div class="gameboy"> 
      <div class="gameboy-color">
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
        <div class="buttons">
      <div class="btn-left"></div>
      <div class="btn-right">
        <span class="btn-a">A</span>
        <span class="btn-b">B</span>
      </div>
      <div class="select-start">Select Start</div>
      </div>
        </div>
      </div>
    </article>
  </div>
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
    methods: {
      // function to get pokemon array
      getPokedex() {
        axios.get('https://pokeapi.co/api/v2/pokedex/2/')
        .then((res) => {
          this.pokemons = res.data.pokemon_entries
        })
        .catch(error => this.$router.push({name:"ErrorView"}))
      }
    },
    mounted() {
      this.getPokedex()
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
  height: 75%;
  width: 75%;
  border: 2px solid black;
  background-color:rgb(161, 177, 116);
  margin: 25px;
}
.container::-webkit-scrollbar{
  display: none;
}
.screen-border{
  position: relative;
  display: flex;
  justify-content: center;
  background-color: #4A4A4A;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  height: 350px;
  border-radius: 4px 4px 33px 4px;
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
  0% {transform: translateY(15px); opacity: 0}
  100% {transform: translateY(0); opacity: 1;}
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
.gameboy {
  display: flex;
  justify-content: center;
  width: 1000px;
  height: 670px;
  margin: auto;
  margin-bottom: 77px;
}
.gameboy-color {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 100%;
  width: 45%;
  border-radius: 40px 15px 15px 40px;
  background: #d30a40;
  border-left: 20px solid #90062a;
  border-bottom: 12px solid #90062a;
}

/* GAMEBOY BUTTONS */
.buttons{
  width: 80%;
  height: 59px;
  position: absolute;
  left: 50%;
  top: 73%;
  transform: translate(-50%, -50%);
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn-left{
  position: relative;
  width: 105px;
  height: 31px;
  background: #262626;
  border-radius: 4px;
  margin-left: 15px;
  box-shadow: 1px 1px 0px 1px #101010;
  z-index: 2;
}
.btn-left::before{
  content: "";
  position: absolute;
  width: 35px;
  height: 100px;
  background: #262626;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;
  z-index: 1;
}
.btn-left::after{
  width: 20px;
  height: 20px;
  right: 0;
  Transform: translate(50%, -50%);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.btb-right{
  width: 80px;
  height: 50px;
  position: relative;
}
.btn-a{
  top: -12px;
  right: 20px;
  width: 50px;
  height: 50px;
  background: #262626;
  color: #727272;
  display: flex;
  position: absolute;
  text-align: center;
  line-height: 30px;
  border-radius: 50%;
  box-shadow: 1px 1px 0px 1px #101010;
  justify-content: center;
  align-items: center;
}
.btn-b{
  top: 41px;
  right: 92px;
  width: 50px;
  height: 50px;
  background: #262626;
  color: #727272;
  display: flex;
  position: absolute;
  text-align: center;
  line-height: 30px;
  border-radius: 50%;
  box-shadow: 1px 1px 0px 1px #101010;
  justify-content: center;
  align-items: center;
}
.select-start{
  position: absolute;
  bottom: -110px;
  z-index: 2;
  width: 100%;
  text-align: center;
  font-size: 0.8em;
}
.select-start::before{
  content: "";
  position: absolute;
  top: -17.5px;
  left: 35%;
  width: 38px;
  height: 10.8px;
  background: #262626;
  border-radius: 50%;
}
.select-start::after{
  content: "";
  position: absolute;
  top: -17.5px;
  left: 56%;
  width: 38px;
  height: 10.8px;
  background: #262626;
  border-radius: 50%;
}
</style>
