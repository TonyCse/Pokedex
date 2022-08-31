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
          <ul class="pokemon-types">
            {{pokemon.type}}
            {{pokemon.typetwo}}
          </ul>
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
          <div class="pokedex-dualButton first">
          </div>
          <div class="pokedex-dualButton second">
          </div>
        </div>
        <div class="pokedex-goldButton">
        </div>
        <div class="pokedex-blackButtons">
          <div class="pokedex-blackButton">
          </div>
          <div class="pokedex-blackButton">
          </div>
        </div>
      </div>
    </div>
  </section>
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
section{
  margin: 50px;
}
.pokedex {
  width: 1000px;
  height: 670px;
  margin: auto;
  position: relative;
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
.pokedex-lights-sm-light.one {
  background: #ed3743;
  /* Old browsers */
  background: -moz-radial-gradient(center, ellipse cover, #ed3743 0%, #aa0515 100%);
  /* FF3.6-15 */
  background: -webkit-radial-gradient(center, ellipse cover, #ed3743 0%, #aa0515 100%);
  /* Chrome10-25,Safari5.1-6 */
  background: radial-gradient(ellipse at center, #ed3743 0%, #aa0515 100%);
  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
}
.pokedex-lights-sm-light.two {
  background: #dee25a;
  /* Old browsers */
  background: -moz-radial-gradient(center, ellipse cover, #dee25a 0%, #8e993b 100%);
  /* FF3.6-15 */
  background: -webkit-radial-gradient(center, ellipse cover, #dee25a 0%, #8e993b 100%);
  /* Chrome10-25,Safari5.1-6 */
  background: radial-gradient(ellipse at center, #dee25a 0%, #8e993b 100%);
  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
}
.pokedex-lights-sm-light.three {
  background: #a9f74c;
  /* Old browsers */
  background: -moz-radial-gradient(center, ellipse cover, #a9f74c 0%, #66a638 100%);
  /* FF3.6-15 */
  background: -webkit-radial-gradient(center, ellipse cover, #a9f74c 0%, #66a638 100%);
  /* Chrome10-25,Safari5.1-6 */
  background: radial-gradient(ellipse at center, #a9f74c 0%, #66a638 100%);
  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
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
  width: 300px;
  height: 100px;
  position: absolute;
  top: 130px;
  border-radius: 7px;
  background: #084035;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #22c4ea;
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
  height: 100%;
  margin: 1px;
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
.pokedex-blackButton {
  width: 50%;
  border-radius: 10px;
  height: 100%;
  margin: 0 10px;
  background: #2c2c2c;
}

</style>