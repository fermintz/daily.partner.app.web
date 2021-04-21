import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Detail from "../views/Detail.vue";
import DetailCheck from "../views/DetailCheck.vue";
import SearchView from '../views/SearchView.vue';
import WorkMap from '../views/WorkMap.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path:"/login",
    name:"Login",
    component: Login,
  },
  {
    path:"/detail",
    name:"Detail",
    component: Detail,
  },
  {
    path:"/detailCheck",
    name:"DetailCheck",
    component: DetailCheck,
  },
  {
    path:"/searchView",
    name:"SearchView",
    component: SearchView,
  },
  {
    path:"/workMap",
    name:"WorkMap",
    component: WorkMap,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
