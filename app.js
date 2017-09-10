"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//import module from './test.module'
// conversion to component
System.register("a1.controller", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TestController;
    return {
        setters: [],
        execute: function () {
            //import testService from './test.service';
            TestController = /** @class */ (function () {
                //testService:any;
                function TestController() {
                    console.log('controller instantiated ');
                    this.foo = 'foo';
                    this.getFoo = function () {
                        return this.foo;
                    };
                    //this.testService = testService;
                }
                return TestController;
            }());
            exports_1("TestController", TestController);
        }
    };
});
System.register("a1.module", ["angular"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var m;
    return {
        setters: [
            function (_1) {
            }
        ],
        execute: function () {
            m = angular.module('a1Module', []);
            exports_2("default", m);
        }
    };
});
System.register("a1.fooBar.directive", ["a1.module", "jquery", "a1.controller"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var a1_module_1, my;
    return {
        setters: [
            function (a1_module_1_1) {
                a1_module_1 = a1_module_1_1;
            },
            function (_2) {
            },
            function (my_1) {
                my = my_1;
            }
        ],
        execute: function () {
            //import testService from './test.service';
            //import 'reflect-metadata' // for decorators
            //import 'zonejs' // whatever 
            /* a directive in A1, this will need to be migrated, for test purposes in A2 component or directive then downgraded for usage in a1 */
            a1_module_1.default.directive('fooBar', function () {
                return {
                    template: '<span>A1 directive fooBar says "{{$ctrl.foo}}", jquery version {{$ctrl.jqueryVersion}}</span>',
                    scope: {},
                    restrict: 'E',
                    controller: my.TestController,
                    controllerAs: '$ctrl',
                    link: function (scope, elm, attr, controller) {
                        // fake some global dependency here...for later
                        // console.log(jQuery.fn.jquery);
                        controller.jqueryVersion = jQuery.fn.jquery;
                        //testService.foo();
                    }
                };
            });
        }
    };
});
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
System.register("a1.testService.service", ["a1.module"], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var a1_module_2, testService;
    return {
        setters: [
            function (a1_module_2_1) {
                a1_module_2 = a1_module_2_1;
            }
        ],
        execute: function () {
            exports_4("testService", testService = function () {
                return {
                    foo: function () {
                        console.log('foo from test service foo()');
                    }
                };
            });
            a1_module_2.default.service('testService', testService);
        }
    };
});
System.register("a2.wow.component", ["a1.module", "jquery", "@angular/core", "@angular/upgrade/static"], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var a1_module_3, core_1, static_1, A2WowComponent;
    return {
        setters: [
            function (a1_module_3_1) {
                a1_module_3 = a1_module_3_1;
            },
            function (_3) {
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (static_1_1) {
                static_1 = static_1_1;
            }
        ],
        execute: function () {
            A2WowComponent = /** @class */ (function () {
                function A2WowComponent() {
                    this.foo = 'wow';
                }
                A2WowComponent = __decorate([
                    core_1.Component({
                        selector: 'wow',
                        template: "<span>A2 wow component says: {{foo}}</span>"
                    })
                ], A2WowComponent);
                return A2WowComponent;
            }());
            exports_5("A2WowComponent", A2WowComponent);
            a1_module_3.default.directive('a2WowComponent', static_1.downgradeComponent({ component: A2WowComponent }));
        }
    };
});
// https://github.com/ui-router/angular-hybrid/tree/master/example
System.register("a2.module", ["@angular/upgrade/static", "@angular/core", "@angular/platform-browser", "@angular/platform-browser-dynamic", "a2.component", "a1.module", "a2.wow.component"], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var static_2, static_3, core_2, platform_browser_1, platform_browser_dynamic_1, core_3, a2_component_1, a1_module_4, a2_wow_component_1, Ng2Component, A2Module;
    return {
        setters: [
            function (static_2_1) {
                static_2 = static_2_1;
                static_3 = static_2_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
                core_3 = core_2_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (a2_component_1_1) {
                a2_component_1 = a2_component_1_1;
            },
            function (a1_module_4_1) {
                a1_module_4 = a1_module_4_1;
            },
            function (a2_wow_component_1_1) {
                a2_wow_component_1 = a2_wow_component_1_1;
            }
        ],
        execute: function () {
            //import 'reflect-metadata'
            //import 'zonejs'
            // An AngularJS component
            a1_module_4.default.component('ng1Component', {
                template: "\n      <div>ng1 component, this component is directly defined in the a1 module</div>\n      <!--<a ui-sref=\"app\">Back to app</a>\n      <ui-view></ui-view>-->\n    "
            });
            Ng2Component = /** @class */ (function () {
                function Ng2Component() {
                }
                Ng2Component = __decorate([
                    core_3.Component({
                        selector: 'ng2-component',
                        template: "\n      <div>ng2 component, this component is defined as a2 component in a2 module and downgraded throught downGrade component and registered in a1 module as component</div>\n      <!--<a uiSref=\"app\">Back to app</a>\n      <ui-view></ui-view>-->\n    "
                    })
                ], Ng2Component);
                return Ng2Component;
            }());
            exports_6("Ng2Component", Ng2Component);
            a1_module_4.default.directive('ng2Component', static_3.downgradeComponent({ component: Ng2Component }));
            A2Module = /** @class */ (function () {
                function A2Module() {
                }
                A2Module.prototype.ngDoBootstrap = function () {
                    /* no body: this disables normal (non-hybrid) Angular bootstrapping */
                };
                A2Module = __decorate([
                    core_2.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            // Provide Angular upgrade capabilities
                            static_2.UpgradeModule
                            //,
                            // Provides the @uirouter/angular-hybrid directives
                            //UIRouterUpgradeModule,
                            // Provides the @uirouter/angular directives
                            //UIRouterModule,
                        ],
                        declarations: [Ng2Component, a2_component_1.A2Component, a2_wow_component_1.A2WowComponent],
                        entryComponents: [Ng2Component, a2_wow_component_1.A2WowComponent],
                    })
                ], A2Module);
                return A2Module;
            }());
            exports_6("A2Module", A2Module);
            // Using AngularJS config block, call `deferIntercept()`.
            // This tells UI-Router to delay the initial URL sync (until all bootstrapping is complete)
            // app.config([ '$urlServiceProvider', $urlService => $urlService.deferIntercept() ]);
            // Manually bootstrap the Angular app
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(A2Module).then(function (platformRef) {
                var injector = platformRef.injector;
                var upgrade = injector.get(static_2.UpgradeModule);
                // The DOM must be already be available
                //upgrade.bootstrap(document.body, [module.name]);
                upgrade.bootstrap(document.body, [a1_module_4.default.name]);
                // Intialize the Angular Module (get() any UIRouter service from DI to initialize it)
                //const url = injector.get(UrlService);
                // Instruct UIRouter to listen to URL changes
                //url.listen();
                //url.sync();
            });
        }
    };
});
System.register("a2.component", ["@angular/core", "@angular/upgrade/static", "a1.module"], function (exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var core_4, static_4, a1_module_5, A2Component;
    return {
        setters: [
            function (core_4_1) {
                core_4 = core_4_1;
            },
            function (static_4_1) {
                static_4 = static_4_1;
            },
            function (a1_module_5_1) {
                a1_module_5 = a1_module_5_1;
            }
        ],
        execute: function () {
            A2Component = /** @class */ (function () {
                function A2Component() {
                }
                A2Component.prototype.a2function = function () {
                    return this.a2member;
                };
                A2Component = __decorate([
                    core_4.Component({
                        //moduleId: A2Module.id, /* fixes error on declarations, but still does not render */
                        selector: "a2-component",
                        template: "<div> hello i am an angular 2 downgraded component</div>"
                    })
                ], A2Component);
                return A2Component;
            }());
            exports_7("A2Component", A2Component);
            // downgrade and register in A1
            // TO BE ABLE TO USE the downgraded component add it to
            //declarations: [Ng2Component,A2Component,A2WowComponent],
            //entryComponents: [Ng2Component,A2WowComponent],
            // in the A2Module
            a1_module_5.default.component('a2Component', static_4.downgradeComponent({ component: A2Component }));
        }
    };
});
//# sourceMappingURL=app.js.map