import { createRouter, createWebHistory } from "vue-router";
import Auth from "../views/Auth.vue";
import Home from "../views/Home.vue";
import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp.vue";
import SignOut from "../components/SignOut.vue";

const routes = [
  { path: "/", component: Home },
  {
    path: "/auth",
    component: Auth,
    children: [
      { path: "login", component: SignIn },
      { path: "sign-up", component: SignUp },
    ],
  },

];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;