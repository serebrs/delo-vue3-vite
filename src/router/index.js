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
      name: 'home',
      redirect: '/docs',
      component: () => import("../layouts/DeloLayout.vue"), // пустой Layout для Docs, Tasks и Stats
      children: [
        {
          path: '/docs',
          name: 'docs',
          meta: { title: 'Документы' },
          // component: () => import("../views/DocsView.vue"),
          components: {
            default: () => import("../views/DocsView.vue"),
            createButton: () => import("../components/buttons/AddButton.vue") // кнопка добавления нового материала в header
          },
          children: [
            {
              path: ':id(\\d+)',
              name: 'docDetails',
              component: () => import("../components/docs/DocDetail.vue"),
              props: true
            },
            {
              path: ':id(\\d+)/edit',
              name: 'docEdit',
              component: () => import("../components/docs/DocEdit.vue"),
              props: true
            },
            {
              path: ':id(\\d+)/delete',
              name: 'docDelete',
              component: () => import("../components/docs/DocDelete.vue"),
              props: true
            },
            {
              path: 'add',
              // name: 'docAdd',
              component: () => import("../components/docs/DocAdd.vue"),
            },
          ],
        },
        {
          path: '/tasks',
          name: 'tasks',
          meta: { title: 'Задачи' },
          // component: () => import("../views/TasksView.vue"),
          components: {
            default: () => import("../views/TasksView.vue"),
            createButton: () => import("../components/buttons/AddButton.vue") // кнопка добавления нового материала в header
          },
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
