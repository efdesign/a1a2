SORRY FOR THIS MESS,
this is just a reminder to myself + some bibliography links.

https://angular.io/guide/deployment
https://www.npmjs.com/package/@types/angular

iterable on es5 (add lib to tsconfig for compilation)
https://github.com/angular/angular/issues/14595
https://github.com/DefinitelyTyped/DefinitelyTyped/issues/17239

https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript#including-built-in-type-declarations-with---lib

https://blog.nrwl.io/upgrading-angular-applications-upgrade-shell-4d4f4a7e7f7b


rxjs issues
https://github.com/angular/angular/issues/9359

add 'https://unpkg.com/rxjs@5.0.0-beta.12/bundles/Rx.js' as script to index.html
add 'rxjs/*': 'https://unpkg.com/rxjs@5.0.0-beta.12/bundles/Rx.js' in paths to 'sytem.config.js'
comment 'rxjs': 'npm:rxjs' in 'system.config.js'

https://github.com/angular/angular/issues/9359



UI router + mix and match...maybe a good guide
https://github.com/ui-router/angular-hybrid
https://github.com/ui-router/sample-app-angular-hybrid

Upgrade guides
https://hackernoon.com/angular-v4-hybrid-upgrade-application-73d5afba1e01
https://medium.com/@SevenLee/configuration-tips-to-build-hybrid-angular-1-and-angular-2-project-in-real-world-230b715629dc
https://hotell.gitbooks.io/ng-metadata/content/docs/recipes/ng-upgrade.html

https://vsavkin.com/migrating-angular-1-applications-to-angular-2-in-5-simple-steps-40621800a25b


https://github.com/ui-router/angular-hybrid/tree/master/example KEY CODE FOR UPGRADE BOOT
https://github.com/ui-router/sample-app-angular-hybrid


https://hackernoon.com/angular-v4-hybrid-upgrade-application-73d5afba1e01

AUGURY -> does not work for me (yet)

//----------------------/----------------------/----------------------/----------------------/----------------------/

Component directives should not use the following attributes:

compile. This will not be supported in Angular.
replace: true. Angular never replaces a component element with the component template. This attribute is also deprecated in AngularJS.
priority and terminal. While AngularJS components may use these, they are not used in Angular and it is better not to write code that relies on them.

need rewriting to NOT use these


remove unusable member -> switch to component -> switch to A2

Controller lifecycle hook methods $onInit(), $onDestroy(), and $onChanges()



UpgradeModule. This is a module that contains utilities for bootstrapping and managing hybrid applications that support both Angular and AngularJS code.



This happens in three main areas: Dependency injection, the DOM, and change detection.


//----------------------/----------------------/----------------------/----------------------/----------------------/

DI SERVICES

You can make AngularJS services available for injection to Angular code by upgrading them. The same singleton instance of each service is shared between the frameworks. In Angular these services will always be in the root injector and available to all components.
You can also make Angular services available for injection to AngularJS code by downgrading them. Only services from the Angular root injector can be downgraded. Again, the same singleton instances are shared between the frameworks. When you register a downgraded service, you must explicitly specify a string token that you want to use in AngularJS.

//----------------------/----------------------/----------------------/----------------------/----------------------/

COMPONENT/ELEMENT OWNERSHIP

The key thing to understand about a hybrid application is that every element in the DOM is owned by exactly one of the two frameworks. The other framework ignores it. If an element is owned by AngularJS, Angular treats it as if it didn't exist, and vice versa.

//----------------------/----------------------/----------------------/----------------------/----------------------/


The DOM element <a-component> will remain to be an AngularJS managed element, because it's defined in an AngularJS template. That also means you can apply additional AngularJS directives to it, but not Angular directives. It is only in the template of the <a-component> where Angular steps in. This same rule also applies when you use AngularJS component directives from Angular.

//----------------------/----------------------/----------------------/----------------------/----------------------/
HYBRID APPLICATION AND MODULARITY
In a hybrid application you run both versions of Angular at the same time. That means that you need at least one module each from both AngularJS and Angular. You will import UpgradeModule inside the NgModule, and then use it for bootstrapping the AngularJS module.


You must bootstrap the Angular bits first and then ask the UpgradeModule to bootstrap the AngularJS bits next.

****************
quickstart (repo layout)
git clone https://github.com/angular/quickstart.git quickstart  


systemjs angular loader ??? WHAT IS THIS ? cusom js found in the quickstart folder


****************
UI ROUTER HYBRID APP (non trivial, with webpack pipeline ad ui-router-upgrade/hybrid)
https://github.com/ui-router/sample-app-angular-hybrid



RISK ********
debugging a compiled app, with no sourcemap is basically impossible...


//----------------------/----------------------/----------------------/----------------------/----------------------/
declarations and entry components note

Because HeroDetailComponent is an Angular component, you must also add it to the declarations in the AppModule.

And because this component is being used from the AngularJS module, and is an entry point into the Angular application, you must add it to the entryComponents for the NgModule.


Note that this AngularJS is an element directive (restrict: 'E') called heroDetail. An AngularJS element directive is matched based on its name. The selector metadata of the downgraded Angular component is ignored.




//----------------------/----------------------/----------------------/----------------------/----------------------/
import * as angular from...UMD and IAngularStatic... 

Why declare angular as angular.IAngularStatic?
@types/angular is declared as a UMD module, and due to the way UMD typings work, once you have an ES6 import statement in a file all UMD typed modules must also be imported via import statements instead of being globally available.

AngularJS is currently loaded by a script tag in index.html, which means that the whole app has access to it as a global and uses the same instance of the angular variable. If you used import * as angular from 'angular' instead, you'd also have to load every file in the AngularJS app to use ES2015 modules in order to ensure AngularJS was being loaded correctly.

This is a considerable effort and it often isn't worth it, especially since you are in the process of moving your code to Angular. Instead, declare angular as angular.IAngularStatic to indicate it is a global variable and still have full typing support.


//----------------------/----------------------/----------------------/----------------------/----------------------/
DI , INJECTABLES , SERVICES
Registering at a component level means you get a new instance of the service with each new instance of that component.

Points to remember about dependency injection:
https://angular.io/guide/architecture#dependency-injection
Dependency injection is wired into the Angular framework and used everywhere.
The injector is the main mechanism.
An injector maintains a container of service instances that it created.
An injector can create a new service instance from a provider.
A provider is a recipe for creating a service.
Register providers with injectors.