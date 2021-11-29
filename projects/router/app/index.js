import { Router } from "./router/Router.js";
import homeHtml from "./pages/home.html";
import aboutHtml from "./pages/about.html";

const router = new Router();

router.setRoutes([
    {
        hash: "home",
        htmlContent: homeHtml,
        isDefault: true,
    },
    {
        hash: "about",
        htmlContent: aboutHtml,
    },
]);

router.init();