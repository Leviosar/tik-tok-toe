import Vue from "vue";
import VueRouter from "vue-router";
import MenuView from "../views/MenuView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: MenuView,
  },
  {
    path: "/game",
    name: "game",
    component: () =>
      import(/* webpackChunkName: "game" */ "../views/GameView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
