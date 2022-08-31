import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import PokedexView from '../views/Pokedex.vue'
import PokemonView from '../views/Pokemon.vue'

const routes: Array<RouteRecordRaw> = [

  {path: '/', name: 'PokeView',component: PokedexView},
  {path: '/:id',name: 'PokemonView', component: PokemonView}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
