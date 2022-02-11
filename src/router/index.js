import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from "@/components/HelloWorld"; //메인 컴포넌트 호출
import List from "@/components/board/List"; //게시판 리스트 컴포넌트 호출

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: HelloWorld,
    component: HelloWorld,
  },
  {
    path: "/board/list",
    name: List,
    component: List,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
