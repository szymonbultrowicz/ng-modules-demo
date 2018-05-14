# NgModules Demo

A sample application showing interaction between components and services.

[live demo](https://stackblitz.com/github/szymonbultrowicz/ng-modules-demo)

## Topics

1. Eager vs lazy modules: [routing module](src/app/app-routing.module.ts)
1. Kinds of components regarding bootstraping: [docs](https://angular.io/guide/entry-components)
   1. Declarative components
   1. Entry point components
      1. Routing components
      1. Bootstrap component
1. Components lifecycle: [docs](https://angular.io/guide/lifecycle-hooks)
1. Services lifecycle
1. Scope of services
1. Observables within services: [service](src/app/lazy-loaded/lazy.service.ts), [component](src/app/lazy-loaded/lazy-loaded.component.ts)
1. Code bundling, tree shaking
