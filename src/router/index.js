import Home from '@/Home.vue'
import Products from '@/products.vue'
import { createMemoryHistory, createRouter } from 'vue-router'



const routes = [
  { path: '/', component: Home },
  { path: '/product', component: Products  },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})