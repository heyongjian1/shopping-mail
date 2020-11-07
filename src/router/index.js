import Vue from 'vue'
import VueRouter from 'vue-router'
const Home=()=>import("../view/home/Home")
const Category=()=>import("../view/category/Category")
const ShoppingCart=()=>import("../view/shoppingCart/ShoppingCart")
const Profile=()=>import("../view/profile/Profile")

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/home"
  },
  {
    path:"/home",
    component:Home
  },
  {
    path:"/category",
    component:Category
  },{
  path:"/cart",
    component:ShoppingCart
  },
  {
    path:"/pro",
    component:Profile
  }
]

const router = new VueRouter({
  routes,
  mode:"history"
})

export default router
