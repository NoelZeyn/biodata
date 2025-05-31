import { createRouter, createWebHistory } from "vue-router";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
import Contact from "./components/Contact.vue";
import Hero from "./components/Hero.vue";
import Main from "./components/Main.vue";
import Biodata from "./components/Biodata.vue";

const routes = [
  { path: "/", component: Main },
  { path: "/home", component: Hero },
  { path: "/about", component: About },
  { path: "/projects", component: Projects },
  { path: "/contact", component: Contact },
    { path: "/biodata", component: Biodata },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
