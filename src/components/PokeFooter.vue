<template>
      <footer class="footer">
            <div class="box">
                  <p class="para">©2022 Pokémon. ©1995 - 2022 Nintendo/Creatures Inc./GAME FREAK inc. TM, ®Nintendo.</p>
            </div>
      </footer>
</template>

<script>
      export default {
        name: 'PokeFooter',
        props: {
            text: String,
        },
      }
</script>

<style scoped lang="scss">
.footer{
      display: flex;
      justify-content: center;
}
.box {
      font-size: 14px;
      border-radius: 2px;
      height: 100px;
      width: 40%;
      line-height: 16px;
      color: black;
      background: rgb(221, 221, 221);
      border: 1px solid white;
      box-shadow: 0 1px 0 1px black, inset 0 1px 0 1px black, 0 0 0 1px black, inset 0 0 0 1px black;
}
.box p {
      padding: 40px;
}
.para{
      margin: 0px;
}
</style>
