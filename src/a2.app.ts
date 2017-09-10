// https://github.com/ui-router/angular-hybrid/tree/master/example


// https://blog.nrwl.io/ngupgrade-in-depth-436a52298a00
// https://angular.io/guide/ngmodule
// https://github.com/vsavkin/upgrade-book-examples/tree/master/ngupgrade/mixing-di/src  /* concrete co-existance example */
import { UpgradeModule} from '@angular/upgrade/static'
import { downgradeComponent} from '@angular/upgrade/static';


import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';


import module from './test.module';
import {Wowng2} from './wowng2';

//import 'reflect-metadata'
//import 'zonejs'

// var app = angular.module('minimal', ['ui.router.upgrade']);

/*app.run(($stateRegistry, $urlService) => {
  $urlService.rules.initial({state: 'app'});

  $stateRegistry.register({
      url: '',
      name: 'app',
      template: `
        <a ui-sref=".ng1" ui-sref-active-eq="active">app.ng1</a>
        <a ui-sref=".ng1.ng2" ui-sref-active-eq="active">app.ng1.ng2</a>
        <a ui-sref=".ng2" ui-sref-active-eq="active">app.ng2</a>
        <a ui-sref=".ng2.ng2" ui-sref-active-eq="active">app.ng2.ng2</a>
        <ui-view></ui-view>
      `
  });

  // route to ng1 component
  $stateRegistry.register({
      url: '/ng1',
      name: 'app.ng1',
      component: 'ng1Component',
  });

  // nested route to ng2 component
  $stateRegistry.register({
      url: '/ng2',
      name: 'app.ng1.ng2',
      component: Ng2Component,
  });

  // route to ng2 component
  $stateRegistry.register({
      url: '/ng2',
      name: 'app.ng2',
      component: Ng2Component,
  });

  // nested route to ng2 component
  $stateRegistry.register({
      url: '/ng2',
      name: 'app.ng2.ng2',
      component: Ng2Component,
  });
});*/



// An AngularJS component
module.component('ng1Component', {
    template: `
      <h1>ng1 component</h1>
      <!--<a ui-sref="app">Back to app</a>
      <ui-view></ui-view>-->
    `
})

// An Angular component
@Component({
    selector: 'ng2-component',
    template: `
      <h1>ng2 component</h1>
      <!--<a uiSref="app">Back to app</a>
      <ui-view></ui-view>-->
    `
}) export class Ng2Component { }

module.directive('ng2Component', downgradeComponent({component: Ng2Component}));

// The root Angular module
@NgModule({
  imports: [
    BrowserModule,
    // Provide Angular upgrade capabilities
    UpgradeModule
    //,
    // Provides the @uirouter/angular-hybrid directives
    //UIRouterUpgradeModule,
    // Provides the @uirouter/angular directives
    //UIRouterModule,
  ],
  declarations: [Ng2Component],
  entryComponents: [Ng2Component],
}) export class RootModule {
  ngDoBootstrap() {
    /* no body: this disables normal (non-hybrid) Angular bootstrapping */
  }
}

// Using AngularJS config block, call `deferIntercept()`.
// This tells UI-Router to delay the initial URL sync (until all bootstrapping is complete)
// app.config([ '$urlServiceProvider', $urlService => $urlService.deferIntercept() ]);

// Manually bootstrap the Angular app
platformBrowserDynamic().bootstrapModule(RootModule).then(platformRef => {
  const injector = platformRef.injector;
  const upgrade = injector.get(UpgradeModule) as UpgradeModule;

  // The DOM must be already be available
  //upgrade.bootstrap(document.body, [module.name]);
  upgrade.bootstrap(document.body, ['test']);

  // Intialize the Angular Module (get() any UIRouter service from DI to initialize it)
  //const url = injector.get(UrlService);

  // Instruct UIRouter to listen to URL changes
  //url.listen();
  //url.sync();
});