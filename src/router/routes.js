import Landing from "@/views/Landing";
import About from "@/views/About";
import Menu from "@/views/Menu";
import Profile from "@/views/Profile";

import Status from "@/views/Status";
import Nav from "@/components/Navigation";

export default [
  {
    path: "/",
    name: "Landing",
    component: Landing
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/menu",
    name: "Menu",
    component: Menu
  },

  {
    path: "/status",
    name: "Status",
    component: Status
  },
  {
    path: "/nav",
    name: "Nav",
    component: Nav
  },
  {
    path: "/profile/",
    name: "Profile",
    component: Profile
  }
];
