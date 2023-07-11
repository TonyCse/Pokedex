<template>
  <section>
    <div class="pokedex">
      <div class="pokedex-left">
        <div class="pokedex-lights-container">
          <div class="pokedex-lights-lg">
          </div>
          <div class="pokedex-lights-sm-container">
            <div class="pokedex-lights-sm-light one">
            </div>
            <div class="pokedex-lights-sm-light two">
            </div>
            <div class="pokedex-lights-sm-light three">
            </div>
          </div>
        </div>
        <div class="pokedex-screen-cut">
        </div>
        <div class="pokedex-screen">
          <div class="pokedex-screen-top">
            <div class="pokedex-screen-light">
            </div>
            <div class="pokedex-screen-light">
            </div>
          </div>
          <div class="pokedex-screen-image-container">
            <img :src= "pokemon.image" :alt="pokemon.name">
          </div>
          <div class="pokedex-screen-bottom">
            <div class="pokedex-screen-button">
            </div>
            <div class="pokedex-screen-vents">
              <div class="pokedex-screen-vent">
              </div>
              <div class="pokedex-screen-vent">
              </div>
              <div class="pokedex-screen-vent">
              </div>
              <div class="pokedex-screen-vent">
              </div>
            </div>
          </div>
        </div>
        <div class="pokedex-controls">
          <div class="pokedex-controls-button">
          </div>
          <div class="pokedex-controls-longButton redButton">
          </div>
          <div class="pokedex-controls-longButton blueButton">
          </div>
        </div>
        <div class="pokedex-pad">
          <div class="pokedex-pad-middle">
            <div class="pokedex-pad-middle-circle">
            </div>
          </div>
          <div class="pokedex-pad-v">
          </div>
          <div class="pokedex-pad-h">
          </div>
        </div>
        <div class="pokedex-smallScreen">
          <p>ID:{{pokemon.id}}</p>
        </div>
      </div>
      <div class="pokedex-right">
        <div class="pokedex-info-container">
          <h2 class="pokemon-name">{{pokemon.name}}</h2>
          <div class="pokemon-type">
            <div :class="pokemon.type" class="type-label">
              {{pokemon.type}}
            </div>
            <div v-if="pokemon.typetwo" :class="pokemon.typetwo" class="type-label">
              {{pokemon.typetwo}}
            </div>
          </div>
        </div>
        <div class="pokedex-buttons-shadow">
        </div>
        <div class="pokedex-buttons">
          <div class="pokedex-button first">
          </div>
          <div class="pokedex-button">
          </div>
          <div class="pokedex-button">
          </div>
          <div class="pokedex-button">
          </div>
          <div class="pokedex-button fifth">
          </div>
          <div class="pokedex-button sixth">
          </div>
          <div class="pokedex-button">
          </div>
          <div class="pokedex-button">
          </div>
          <div class="pokedex-button">
          </div>
          <div class="pokedex-button tenth">
          </div>
        </div>
        <div class="pokedex-longButtons">
          <div class="pokedex-longButton">
          </div>
          <div class="pokedex-longButton">
          </div>
        </div>
        <div class="pokedex-dualButtons-shadow">
        </div>
        <div class="pokedex-dualButtons">
          <div class="pokedex-dualButton first" @click="previusPk">
            prev
          </div>
          <div class="pokedex-dualButton second" @click="nextPk">
            next
          </div>
        </div>
        <div class="pokedex-goldButton">
        </div>
        <div class="pokedex-blackButtons">
          <div class="pokedex-blackButton-left"></div>
          <router-link to="/">
          <div class="pokedex-blackButton-right">
            <p>BACK</p>
          </div>
        </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'PokemonView',
  methods: {
    // funtion to get pokemon data by id
    getPokemon() {
      axios.get("https://pokeapi.co/api/v2/pokemon/"+this.id)
      .then((res) => {
        this.pokemon.name = res.data.name;
        this.pokemon.id = res.data.id;
        this.pokemon.image = res.data.sprites.front_default;
        this.pokemon.type = res.data.types[0].type.name;
        if (res.data.types[1])
        this.pokemon.typetwo = res.data.types[1].type.name;
      })
      .catch(error => this.$router.push({name:"ErrorView"}))
    },
    previusPk() {
      if (this.pokemon.id == 1) {
        return;
      }
      const prev = this.pokemon.id - 1
      axios.get("https://pokeapi.co/api/v2/pokemon/"+prev)
      .then((res) => {
        this.pokemon.name = res.data.name;
        this.pokemon.id = res.data.id;
        this.pokemon.image = res.data.sprites.front_default;
        this.pokemon.type = res.data.types[0].type.name;
        if (res.data.types[1])
        this.pokemon.typetwo = res.data.types[1].type.name;
      })
      .catch(error => this.$router.push({name:"ErrorView"}))
    },
    nextPk() {
      if (this.pokemon.id == 1008) {
        return;
      }
      const next = this.pokemon.id + 1
      axios.get("https://pokeapi.co/api/v2/pokemon/"+next)
      .then((res) => {
        this.pokemon.name = res.data.name;
        this.pokemon.id = res.data.id;
        this.pokemon.image = res.data.sprites.front_default;
        this.pokemon.type = res.data.types[0].type.name;
        if (res.data.types[1])
        this.pokemon.typetwo = res.data.types[1].type.name;
      })
      .catch(error => this.$router.push({name:"ErrorView"}))
    },
  },
  mounted() {
    this.getPokemon()
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
section{
  margin: 50px;
}
.pokedex {
  width: 1000px;
  height: 670px;
  margin: auto;
  position: relative;
  margin-bottom: 77px;
}
.pokedex-left {
  display: flex;
  flex-direction: column;
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
  background: -moz-radial-gradient(center, ellipse cover, #a8f2fb 0%, #0df1fc 50%, #0ebcd4 100%);
  background: -webkit-radial-gradient(center, ellipse cover, #a8f2fb 0%, #0df1fc 50%, #0ebcd4 100%);
  background: radial-gradient(ellipse at center, #a8f2fb 0%, #0df1fc 50%, #0ebcd4 100%);
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
.pokedex-lights-sm-light.one {
  background: #ed3743;
  background: -moz-radial-gradient(center, ellipse cover, #ed3743 0%, #aa0515 100%);
  background: -webkit-radial-gradient(center, ellipse cover, #ed3743 0%, #aa0515 100%);
  background: radial-gradient(ellipse at center, #ed3743 0%, #aa0515 100%);
}
.pokedex-lights-sm-light.two {
  background: #dee25a;
  background: -moz-radial-gradient(center, ellipse cover, #dee25a 0%, #8e993b 100%);
  background: -webkit-radial-gradient(center, ellipse cover, #dee25a 0%, #8e993b 100%);
  background: radial-gradient(ellipse at center, #dee25a 0%, #8e993b 100%);
}
.pokedex-lights-sm-light.three {
  background: #a9f74c;
  background: -moz-radial-gradient(center, ellipse cover, #a9f74c 0%, #66a638 100%);
  background: -webkit-radial-gradient(center, ellipse cover, #a9f74c 0%, #66a638 100%);
  background: radial-gradient(ellipse at center, #a9f74c 0%, #66a638 100%);
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
.pokedex-right {
  height: 90%;
  width: 50%;
  position: absolute;
  left: 520px;
  top: 50px;
  border-radius: 0 0 40px 0;
  background: #bf0638;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.pokedex-info-container {
  width: 342px;
  height: 154px;
  position: absolute;
  top: 61px;
  border-radius: 7px;
  background: #084035;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.pokedex-info-container .pokemon-name {
  font-size: 20px;
  font-weight: normal;
  color: #55a696;
}
.pokedex-info-container .pokemon-types {
  font-size: 16px;
  color: #55a696;
  list-style: none;
}
.pokedex-info-container .pokemon-types li {
  display: inline;
  margin: 5px;
}
.pokedex-buttons {
  margin-top: 20px;
  width: 300px;
  height: 100px;
  position: absolute;
  top: 230px;
  display: flex;
  flex-wrap: wrap;
  z-index: 1;
}
.pokedex-buttons-shadow {
  background: #457fc8;
  width: 300px;
  height: 100px;
  border-radius: 10px;
  position: absolute;
  top: 257px;
  left: 97px;
}
.pokedex-button {
  height: 50px;
  margin: 1px;
  box-sizing: border-box;
  width: calc((300px / 5) - 2px);
  background: #22c4ea;
}
.pokedex-button.first {
  border-radius: 10px 0 0 0;
}
.pokedex-button.fifth {
  border-radius: 0 10px 0 0;
}
.pokedex-button.sixth {
  border-radius: 0 0 0 10px;
}
.pokedex-button.tenth {
  border-radius: 0 0 10px 0;
}
.pokedex-longButtons {
  height: 20px;
  width: 110px;
  position: absolute;
  top: 365px;
  left: 285px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.pokedex-longButton {
  height: 13px;
  width: 52px;
  background: #2c2c2c;
  border-radius: 10px;
}
.pokedex-dualButtons {
  cursor: pointer;
  display: flex;
  height: 50px;
  width: 120px;
  position: absolute;
  top: 400px;
  left: 100px;
}
.pokedex-dualButtons-shadow {
  background: #838584;
  width: 120px;
  height: 50px;
  border-radius: 10px;
  position: absolute;
  top: 406px;
  left: 97px;
}
.pokedex-dualButton {
  background: #e3e3e3;
  width: 50%;
  size: 1px;
  padding-left: 6px;
  display: flex;
  font-size: 11px;
  height: 100%;
  margin: 1px;
  align-items: center;
}
.pokedex-dualButton.first {
  border-radius: 10px 0 0 10px;
}
.pokedex-dualButton.second {
  border-radius: 0 10px 10px 0;
}
.pokedex-goldButton {
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 425px;
  left: 355px;
  background: #c7bd76;
}
.pokedex-blackButtons {
  width: 320px;
  height: 60px;
  position: absolute;
  top: 510px;
  display: flex;
  justify-content: space-between;
}
.pokedex-blackButton-left {
  width: 50%;
  border-radius: 10px;
  height: 100%;
  margin: 0 10px;
  background: #2c2c2c;
}
.pokedex-blackButton-right {
  border-radius: 10px;
  height: 100%;
  background: #2c2c2c;
}
.pokedex-blackButtons a {
  width: 175px;
  text-decoration: none;
}
.pokedex-blackButton-right p {
  margin: 0px;
  height: 60px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pokemon-type{
  display: flex;
}
.type-label{
  color: white;
  padding: 7px;
  margin: 10px;
  border-radius: 5px;
}
.grass {
    background-color: #9bcc50;
}
.fire{
    background-color: #fd7d24;
}
.water{
    background-color: #4592c4;
}
.bug{
    background-color: #729f3f;
}
.normal{
    background-color: #a4acaf;
}
.poison{
    background-color: #b97fc9;
}
.electric{
    background-color: #eed535;
}
.ground{
    background: linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
    background-color: #f7de3f;
}
.fairy{
    background: #fdb9e9;
}
.psychic{
    background: #f366b9;
}
.fighting{
    background: #d56723;
}
.rock{
    background: #a38c21;
}
.ice{
    background: #51c4e7;
}
.ghost{
    background: #7b62a3;
}
.dragon{
    background: linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
    background-color: #53a4cf;
}
.steel{
  background-color: #9eb7b8;
}
.flying{
  background: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
  background-color: #3dc7ef;
}

.dark {
  background-color: black
}
</style>