import Menu from "@/views/Menu";
import About from "@/views/About";
import Status from "@/views/Status";
import Landing from "@/views/Landing";
import Profile from "@/views/Profile";
import Nav from "@/components/Navigation";
import FreeCoupons from "@/views/FreeCoupons";
import DiscountCard from "@/views/DiscountCard";

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
  },
  {
    path: "/discountcard",
    name: "DiscountCard",
    component: DiscountCard
  },
  {
    path: "/freecoupons",
    name: "FreeCoupons",
    component: FreeCoupons
  }
];
