
import { Route } from "./router/route.js";
import { Router } from "./router/router.js";

const router = new Router([
    new Route("home", "home.html", true),
    new Route("about", "about.html")
]);