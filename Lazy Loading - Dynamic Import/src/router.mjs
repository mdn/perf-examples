export class Router {
    constructor(config, outlet) {
        /** Store Properties locally */
        this.config = config;
        this.outlet = outlet;

        /** Add Listener to links */
        document.addEventListener('click', (event) => this.linkListener(event), true);
        window.addEventListener('popstate', (event) => this.popstateListener(event), true);
    }

    popstateListener(event) {
        if (this.config[location.pathname]) {
            this.renderPage(location.pathname);
        }
    }

    linkListener(event) {
        /** If the element clicked is an anchor */
        if (event.target instanceof HTMLAnchorElement) {
            const {
                pathname
            } = event.target;
            /** If the path of the link is in the configuration */
            if (this.config[pathname]) {
                event.preventDefault();
                this.renderPage(pathname);
            }
        }
    }

    renderPage(href) {
        /** Reset Outlet */
        this.resetOutlet();
        /** Fetch and render */
        this.config[href]().then((view) => {
            this.setOutletContent(view.default);
            /** Push new state */
            history.pushState(null, null, href);
        });
    }

    resetOutlet() {
        this.outlet.innerHTML = '';
    }

    setOutletContent(content) {
        this.outlet.innerHTML = content;
    }    
}