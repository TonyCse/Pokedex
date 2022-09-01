<template>
      <header>
            <div class="logo">
                  <router-link to="/">
                        <img src="../assets/poke.png" alt="pokemon-logo">
                  </router-link>
            </div>
      </header>
</template>

<script>
      export default {
        name: 'PokeHeader',
        props: {
            text: String,
        },
        components: {
          
        }
      }
</script>

<style scoped lang="scss">
.logo img {
      width: 500px;
}
</style>