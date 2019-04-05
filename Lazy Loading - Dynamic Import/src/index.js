import { Router } from './router.mjs';

/** Elements */
const routerOutlet = document.getElementById('outlet');

/** Router */
import('./routerConfig.mjs').then(({
    routerConfig
}) => {
    const routerInstance = new Router(routerConfig, routerOutlet);
    routerInstance.renderPage(location.pathname || '/');
});