import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    {
      path: "/login",
      name: "login",
      meta: { layout: "Auth" },
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/",
      name: "documents",
      meta: { layout: "Main", title: "Документы" },
      component: () => import("../views/DocumentsView.vue"),
    },
    {
      path: "/tasks",
      name: "tasks",
      meta: { layout: "Main", title: "Задачи" },
      component: () => import("../views/TasksView.vue"),
    },
    {
      path: "/stats",
      name: "stats",
      meta: { layout: "Main", title: "Статистика" },
      component: () => import("../views/StatsView.vue"),
    }
  ]
})

export default router
