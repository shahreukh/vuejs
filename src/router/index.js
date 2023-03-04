import Vue from "vue";
import VueRouter from "vue-router";

import home from "../views/home.vue";
import whoAreWe from "../views/whoAreWe.vue";
import feature from "../views/feature.vue";
import contact from "../views/contact.vue";
import SeoDeneme from "../views/seoDeneme.vue";
import NotFound from "../views/NotFound.vue";
import i18n from "vue-i18n";
Vue.use(VueRouter);
Vue.use(i18n);

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
    meta: {
      title: "WeeRobot",
    },
  },
  {
    path: "/who-are-we",
    name: "whoArewe",
    component: whoAreWe,
    meta: {
      title: "WeeRobot-Biz Kimiz",
    },
  },
  {
    path: "/feature",
    name: "feature",
    component: feature,
    meta: {
      title: "WeeRobot-Özellikler",
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: contact,
    meta: {
      title: "WeeRobot-İletişim",
    },
  },
  {
    path: "/seo",
    name: "seodenem",
    component: SeoDeneme,
  },
  {
    path: "*",
    name: "WeeRobot-Sayfa Bulunamadı",
    component: NotFound,
    meta: {
      title: "WeeRobot-Sayfa Bulunamadı",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;

  next();
});

export default router;
