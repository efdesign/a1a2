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

import {A2Component} from './a2.component';


import module from './a1.module';
import {A2WowComponent} from './a2.wow.component';

//import 'reflect-metadata'
//import 'zonejs'





// An AngularJS component
module.component('ng1Component', {
    template: `
      <div>ng1 component, this component is directly defined in the a1 module</div>
      <!--<a ui-sref="app">Back to app</a>
      <ui-view></ui-view>-->
    `
})

// An Angular component
@Component({
    selector: 'ng2-component',
    template: `
      <div>ng2 component, this component is defined as a2 component in a2 module and downgraded throught downGrade component and registered in a1 module as component</div>
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
  declarations: [Ng2Component,A2Component,A2WowComponent],
  entryComponents: [Ng2Component,A2WowComponent],
}) export class A2Module {
  ngDoBootstrap() {
    /* no body: this disables normal (non-hybrid) Angular bootstrapping */
  }
}

// Using AngularJS config block, call `deferIntercept()`.
// This tells UI-Router to delay the initial URL sync (until all bootstrapping is complete)
// app.config([ '$urlServiceProvider', $urlService => $urlService.deferIntercept() ]);

// Manually bootstrap the Angular app
platformBrowserDynamic().bootstrapModule(A2Module).then(platformRef => {
  const injector = platformRef.injector;
  const upgrade = injector.get(UpgradeModule) as UpgradeModule;

  // The DOM must be already be available
  //upgrade.bootstrap(document.body, [module.name]);
  upgrade.bootstrap(document.body, [module.name]);

  // Intialize the Angular Module (get() any UIRouter service from DI to initialize it)
  //const url = injector.get(UrlService);

  // Instruct UIRouter to listen to URL changes
  //url.listen();
  //url.sync();
});