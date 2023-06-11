import Vue from 'vue'
import VueRouter from 'vue-router'

import Beranda from '../views/Beranda.vue';
import MainStudent from '../views/MainStudent.vue';
import Login from '../views/Login.vue';
import PageNotFound from '../components/404.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: 'Beranda',
    component: Beranda,
  },
  {
    path: "/mainstudent",
    name: "MainStudent",
    component: MainStudent
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  { path: "*", component: PageNotFound },
];

const router = new VueRouter({
  routes,
  mode: 'history' //atau hash menggunakan pagar seperti gmail
})

export default router