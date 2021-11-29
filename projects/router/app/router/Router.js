export class Router {
    constructor() {
        this.rootElem = document.getElementById("root");
    }

    init() {
        this.initEvents();
        this.onChangeHash();
    }

    initEvents() {
        window.addEventListener("hashchange", this.onChangeHash);
    }

    setRoutes = (routes) => {
        this.routes = routes;
    }

    onChangeHash = () => {
        const hash = location.hash.substr(1);

        let route = this.routes.find(route => route.hash === hash);

        if (!route) {
            route = this.routes.find(route => route.isDefault);
        }

        if (route) {
            this.loadPage(route);
        }
    }

    loadPage = route => {
        this.rootElem.innerHTML = route.htmlContent;
    }
}