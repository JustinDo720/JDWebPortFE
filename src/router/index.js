import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import AboutMe from "../views/AboutMe.vue";
import ResumeView from "../views/ResumeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/view_resume/",
    name: "view_resume",
    component: ResumeView,
  },
  {
    path: "/view_projects/",
    name: "view_projects",
    component: ProjectsView,
  },
  {
    path: "/view_aboutme/",
    name: "view_aboutme",
    component: AboutMe,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
