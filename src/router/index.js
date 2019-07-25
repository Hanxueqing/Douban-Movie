import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from "./home"
import audio from "./audio"
import broadcast from "./broadcast"
import group from "./group"
import mine from "./mine"
import city from "./city"
import moviedetail from "./moviedetail"

export default new Router({
  routes: [
    { path: "/", redirect: "/home" },
    home, audio, broadcast, group, mine, city, moviedetail,
    // { path: "/notfound", component: () => import("@/views/Notfound") },
    { path: "*", redirect: "/notfound" },
  ]
})
