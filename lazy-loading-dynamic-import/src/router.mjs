export class Router {
    constructor(config, outlet) {
        /** Store Properties locally */
        this.config = config;
        this.outlet = outlet;

        /** Add Listener to links */
        document.addEventListener('click', (event) => this.linkListener(event), true);
        window.addEventListener('popstate', (event) => this.popstateListener(event), true);
    }

    /**
     * Listener for window popstate events
     * @param event popstate event
     */
    popstateListener(event) {
        if (this.config[location.pathname]) {
            this.renderPage(location.pathname);
        }
    }

    /**
     * Listener for <a> anchor elements click
     * @param event 
     */
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

    /**
     * Fetches and renders a view based on the url
     * The router takes the configuration with the format
     * 
     * {
     *   '/pathname': () => import('./view/filename')
     * }
     * 
     * So whenever a route event is triggered, the location is pushed into the history
     * and the dynamic import of the view is executed
     * 
     * Then the outlet innerHTML is set to the view content
     * 
     * @param href url
     */
    renderPage(href) {
        /** Fetch and render, dynamically */
        this.config[href]().then((view) => {
            this.setOutletContent(view.default);
            /** Push new state */
            history.pushState(null, null, href);
        });
    }

    /**
     * sets the HTML content
     * @param content html content
     */
    setOutletContent(content) {
        this.outlet.innerHTML = content;
    }
}