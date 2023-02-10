import { createRouter, createWebHistory } from 'vue-router'
import DogBreeds from "../views/DogBreeds"
import FavoriteDogs from "@/views/FavoriteDogs";
import RandomDogs from "@/views/RandomDogs";

const routes = [
  {
    path: '/',
    name: 'home',
    component: DogBreeds,
  },
  {
    path: '/favorite-dogs',
    name: 'Favorite Dogs',
    component: FavoriteDogs,
  },
  {
    path: '/random-dogs',
    name: 'Random Dogs',
    component: RandomDogs,
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
