//PAGES
import { HomePage } from "../../SAMPLE/sample_pages/HomePage";
import { About } from "../../SAMPLE/sample_pages/About";
import { Gallery } from "../../SAMPLE/sample_pages/Gallery";
import { Products } from "../../SAMPLE/sample_pages/Products";
import { Topics } from "../../SAMPLE/sample_pages/Topics";

import { UserProfile } from "../../SAMPLE/sample_pages/UserProfile";

//import { PageError } from "../../SAMPLE/sample_pages/PageError";

const appRoutes = [
  {
    path: "/",
    redirect: "/app/home",
    exact: true,
    title: "Home",
    layout: "/challenge",
    component: HomePage,
  },
  {
    path: "/app",
    redirect: "/app/home",
    title: "Home",
    layout: "/challenge",
    component: HomePage,
  },
  {
    path: "/app/home",
    title: "Home",
    layout: "/challenge",
    component: HomePage,
  },
  {
    path: "/about",
    title: "About",
    layout: "/challenge",
    component: About,
  },
  {
    path: "/products",
    title: "Products",
    layout: "/challenge",
    component: Products,
  },
  {
    path: "/gallery",
    title: "Gallery",
    layout: "/challenge",
    component: Gallery,
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
    component: UserProfile,
  },
];

export default appRoutes;
