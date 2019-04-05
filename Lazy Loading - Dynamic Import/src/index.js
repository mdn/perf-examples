import { Router } from './router.mjs';

/** Elements */
const routerOutlet = document.getElementById('outlet');

/** Router */
let routerInstance;
import('./routerConfig.mjs').then(({
    routerConfig
}) => {
    routerInstance = new Router(routerConfig, routerOutlet);
    routerInstance.renderPage(location.pathname || '/');
});