//PAGES
import { HomePage } from "../../SAMPLE/sample_pages/HomePage";
import { About } from "../../SAMPLE/sample_pages/About";
import { Topics } from "../../SAMPLE/sample_pages/Topics";
//import UserProfile from "./SAMPLE/sample_pages/UserProfile/UserProfile";
//import { PageError } from "./SAMPLE/sample_pages/PageError";

const appRoutes = [
  {
    path: "/",
    redirect: "/app/home",
    exact: true,
    title: "My Products",
    layout: "/challenge",
    component: HomePage,
  },
  {
    path: "/app",
    redirect: "/app/home",
    title: "My Products",
    layout: "/challenge",
    component: HomePage,
  },
  {
    path: "/app/home",
    title: "My Products",
    layout: "/challenge",
    component: HomePage,
  },
  {
    path: "/about",
    title: "Add Product",
    layout: "/challenge",
    component: About,
  },
  {
    path: "/topics",
    title: "My Topics",
    layout: "/challenge",
    component: Topics,
  },
  {
    path: "/topics/:id",
    title: "Edit My Topics",
    layout: "/challenge",
    component: Topics,
  },
  {
    path: "/user-profile",
    title: "User Profile",
    layout: "/challenge",
    //component: Topics,
    // component: UserProfile,
  },
];

export default appRoutes;
