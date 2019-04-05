export const routerConfig = {
    '/': () => import('./views/home.mjs'),
    '/help': () => import('./views/help.mjs'),
    '/about': () => import('./views/about.mjs'),
    '/contact': () => import('./views/contact.mjs')
}