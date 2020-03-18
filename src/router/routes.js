import Landing from "@/views/Landing";
import About from "@/views/About";
import Menu from "@/views/Menu";
import Cart from "@/views/Cart";
import Status from "@/views/Status";
import Nav from "@/components/Navigation";

export default [{
        path: "/landing",
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
        path: "/cart",
        name: "Cart",
        component: Cart
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
    }
];