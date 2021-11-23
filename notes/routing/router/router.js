export class Router {
    constructor(routes) {
        this.routes = routes;
        this.rootElem = document.getElementById("app");

        this.init();
    }

    init = () => {
        window.onpopstate = this.onChangedState;
        this.onChangedState();
    }

    onChangedState = () => {
        const hash = window.location.hash.substr(1);

        let route = this.routes.find(route => route.isActiveRoute(hash));

        if (!route) {
            route = this.routes.find(route => route.default);
        }
        this.goToRoute(route.htmlName);
    }

    goToRoute = (htmlName) => {
        const url = `pages/${htmlName}`;
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState === 4 && xhttp.status === 200) {
                this.rootElem.innerHTML = xhttp.responseText;
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    }
}