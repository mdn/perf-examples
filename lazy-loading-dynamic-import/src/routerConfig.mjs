export const routerConfig = {
    '/': () => import('./views/home.mjs'),
    '/perf-examples/lazy-loading-dynamic-import/': () => import('./views/home.mjs'),
    '/perf-examples/lazy-loading-dynamic-import/help': () => import('./views/help.mjs'),
    '/perf-examples/lazy-loading-dynamic-import/about': () => import('./views/about.mjs'),
    '/perf-examples/lazy-loading-dynamic-import/contact': () => import('./views/contact.mjs')
}