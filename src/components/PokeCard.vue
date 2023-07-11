<template>
    <div class="card" :class="pk.type">
        <div class="div">
            <img class="image" :src="pk.image" :alt="pk.image">
            <p class="title">{{ pk.name }}</p>
            <div class="pokeball">
                <div class="pokeball__button"></div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name: 'PokeCard',
        props: {
            pokemon: Object,
        },
        data() {
            return {
            id: this.$route.params.id,
            pk: {
                name: "",
                type: "",
                typetwo:"",
                image: "",
                weaknesses: "",
            },
            showModal: "",
            };
        },
        methods: {
            // funtion to get pokemon data by id
            getPokemon() {
            axios.get("https://pokeapi.co/api/v2/pokemon/"+this.pokemon.entry_number)
            .then((res) => {
                this.pk.name = res.data.name;
                this.pk.id = res.data.id;
                this.pk.image = res.data.sprites.front_default;
                this.pk.type = res.data.types[0].type.name;
                if (res.data.types[1])
                this.pk.typetwo = res.data.types[1].type.name;
            })
            .catch(error => this.$router.push({name:"ErrorView"}))
            }
        },
        mounted() {
            this.getPokemon()
        },
    }
</script>

<style>
.card {
  height: 50px;
  border: 2px solid rgb(51, 50, 50);
  text-decoration: none;
  animation: pokeanimation 1s ease both;
  -webkit-animation: pokeanimation 1s ease both;
  border-radius: 30px;
}

.image {
    width: 100px;
}
.title{
    margin: 0px;
    color: white;
}
.div{
    max-height: 50px;
    display: flex;
    align-items: center;
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

</style>