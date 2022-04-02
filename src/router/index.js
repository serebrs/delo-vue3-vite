import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      name: "notfound",
      component: () => import("../views/NotFoundView.vue"), // страница 404
    },
    {
      path: '/auth',
      redirect: '/login',
      component: () => import("../layouts/AuthLayout.vue"), // пустой Layout для форм логина и регистрации
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import("../views/LoginView.vue"),
        },
        {
          path: '/logout',
          name: 'logout',
          component: () => import("../views/LogoutView.vue"),
        }
      ],
    },
    {
      path: '/delo',
      alias: '/',
      redirect: '/docs',
      component: () => import("../layouts/DeloLayout.vue"), // пустой Layout для Docs, Tasks и Stats
      children: [
        {
          path: '/docs',
          name: 'docs',
          meta: { title: 'Документы' },
          // alias: '/docs',
          component: () => import("../views/DocsView.vue"),
          children: [
            {
              path: ':id(\\d+)',
              name: 'docDetails',
              component: () => import("../components/docs/DocDetail.vue"),
            },
            {
              path: ':id(\\d+)/edit',
              name: 'docEdit',
              component: () => import("../components/docs/DocEdit.vue"),
            },
            {
              path: 'new',
              name: 'docNew',
              component: () => import("../components/docs/DocNew.vue"),
            },
          ],
        },
        {
          path: '/tasks',
          name: 'tasks',
          meta: { title: 'Задачи' },
          component: () => import("../views/TasksView.vue"),
        },
        {
          path: '/stats',
          name: 'stats',
          meta: { title: 'Статистика' },
          component: () => import("../views/StatsView.vue"),
        },
      ],
    },
  ],
  //strict: true
})

export default router
