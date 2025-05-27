
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/features/home/home.routes.ts": [
    {
      "path": "chunk-3IRBSYCT.js",
      "dynamicImport": false
    }
  ],
  "src/app/features/contacts/contacts.routes.ts": [
    {
      "path": "chunk-Y4EVVO6P.js",
      "dynamicImport": false
    }
  ],
  "src/app/features/projects/projects.routes.ts": [
    {
      "path": "chunk-7P2GK722.js",
      "dynamicImport": false
    }
  ],
  "src/app/features/about/about.routes.ts": [
    {
      "path": "chunk-QXRZWS54.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 24160, hash: 'd49c77119d1ce144399855c25906b9dfc8f8645e7004cb2022850d627c1f31c1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17290, hash: 'd311b5b46091cf92a39f6d5b4bf2c00264a720356fee1b00d1b685cc537c3b2e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-CAVWQXL4.css': {size: 7440, hash: 'M+0TZbHkZgQ', text: () => import('./assets-chunks/styles-CAVWQXL4_css.mjs').then(m => m.default)}
  },
};
