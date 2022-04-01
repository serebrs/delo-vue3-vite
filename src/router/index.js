import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    {
      path: "/",
      name: "Home",
      redirect: "/docs",
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      meta: { layout: "Empty" },
      component: () => import("../views/NotFoundView.vue"),
    },
    {
      path: "/login",
      name: "Login",
      meta: { layout: "Auth" },
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/docs",
      name: "Docs",
      meta: { layout: "Main", title: "Документы" },
      component: () => import("../views/DocumentsView.vue"),
      /*children: {
        path: "/docs/:id",
        component: () => import("../views/LoginView.vue"), // отрисовывается внутри второго router-view в компоненте Docs!
      }*/
    },
    {
      path: "/tasks",
      name: "Tasks",
      meta: { layout: "Main", title: "Задачи" },
      component: () => import("../views/TasksView.vue"),
    },
    {
      path: "/stats",
      name: "Stats",
      meta: { layout: "Main", title: "Статистика" },
      component: () => import("../views/StatsView.vue"),
    }
  ],
  //strict: true
})

export default router
