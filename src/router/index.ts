import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import PokedexView from '../views/Pokedex.vue'
import PokemonView from '../views/Pokemon.vue'
import ErrorView from '../views/Error.vue'

const routes: Array<RouteRecordRaw> = [

  {path: '/', name: 'PokeView',component: PokedexView},
  {path: '/:id',name: 'PokemonView', component: PokemonView},
  {path: '/er404', name: 'ErrorView', component: ErrorView}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
