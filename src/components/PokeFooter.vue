<template>
      <footer>
            <div class="box">
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, quia voluptas earum deleniti quaerat corrupti atque omnis aliquid quo. Commodi minima nulla placeat sit. Nesciunt repellendus asperiores ipsam optio quis.</p>
            </div>
      </footer>
</template>

<script>
      export default {
        name: 'PokeFooter',
        props: {
            text: String,
        },
        components: {
          
        }
      }
</script>

<style scoped lang="scss">

.box {
      font-size: 14px;
      border-radius: 2px;
      width: 95%;
      height: 100px;
      line-height: 16px;
      margin: 40px;
      color: black;
      background: rgb(255, 255, 255);
      border: 1px solid white;
      box-shadow: 0 1px 0 1px black,
                  inset 0 1px 0 1px black,
                  0 0 0 1px black,
                  inset 0 0 0 1px black;
}
.box p {
      padding: 20px;
}
</style>