import { Router } from "./Router.js";

const router = new Router();
router.setRoutes([
    {
        hash: "home",
        html: "./pages/home.html",
        isDefault: true,
    },
    {
        hash: "about",
        html: "./pages/about.html",
    },
]);
router.init();