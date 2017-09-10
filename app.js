"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
System.register("test.module", ["angular"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var m;
    return {
        setters: [
            function (_1) {
            }
        ],
        execute: function () {
            m = angular.module('test', []);
            exports_1("default", m);
        }
    };
});
//import module from './test.module'
// conversion to component
System.register("test.controller", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
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
            exports_2("TestController", TestController);
        }
    };
});
System.register("test.service", ["test.module"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var test_module_1, testService;
    return {
        setters: [
            function (test_module_1_1) {
                test_module_1 = test_module_1_1;
            }
        ],
        execute: function () {
            exports_3("testService", testService = function () {
                this.foo = function () {
                    console.log('foo from test service foo()');
                };
            });
            test_module_1.default.service('testService', testService);
        }
    };
});
System.register("wowng2", ["test.module", "jquery", "@angular/core", "@angular/upgrade/static"], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var test_module_2, core_1, static_1, Wowng2;
    return {
        setters: [
            function (test_module_2_1) {
                test_module_2 = test_module_2_1;
            },
            function (_2) {
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (static_1_1) {
                static_1 = static_1_1;
            }
        ],
        execute: function () {
            Wowng2 = /** @class */ (function () {
                function Wowng2() {
                    this.foo = 'wow';
                }
                Wowng2 = __decorate([
                    core_1.Component({
                        selector: 'wowng2',
                        template: "<span>wow: {{  $ctrl.foo }}</span>"
                    })
                ], Wowng2);
                return Wowng2;
            }());
            exports_4("Wowng2", Wowng2);
            test_module_2.default.directive('angularComponent', static_1.downgradeComponent({ component: Wowng2 }));
        }
    };
});
// https://github.com/ui-router/angular-hybrid/tree/master/example
System.register("a2.app", ["@angular/upgrade/static", "@angular/core", "@angular/platform-browser", "@angular/platform-browser-dynamic", "test.module"], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var static_2, static_3, core_2, platform_browser_1, platform_browser_dynamic_1, core_3, test_module_3, Ng2Component, RootModule;
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
            function (test_module_3_1) {
                test_module_3 = test_module_3_1;
            }
        ],
        execute: function () {
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
            test_module_3.default.component('ng1Component', {
                template: "\n      <h1>ng1 component</h1>\n      <!--<a ui-sref=\"app\">Back to app</a>\n      <ui-view></ui-view>-->\n    "
            });
            Ng2Component = /** @class */ (function () {
                function Ng2Component() {
                }
                Ng2Component = __decorate([
                    core_3.Component({
                        selector: 'ng2-component',
                        template: "\n      <h1>ng2 component</h1>\n      <!--<a uiSref=\"app\">Back to app</a>\n      <ui-view></ui-view>-->\n    "
                    })
                ], Ng2Component);
                return Ng2Component;
            }());
            exports_5("Ng2Component", Ng2Component);
            test_module_3.default.directive('ng2Component', static_3.downgradeComponent({ component: Ng2Component }));
            RootModule = /** @class */ (function () {
                function RootModule() {
                }
                RootModule.prototype.ngDoBootstrap = function () {
                    /* no body: this disables normal (non-hybrid) Angular bootstrapping */
                };
                RootModule = __decorate([
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
                        declarations: [Ng2Component],
                        entryComponents: [Ng2Component],
                    })
                ], RootModule);
                return RootModule;
            }());
            exports_5("RootModule", RootModule);
            // Using AngularJS config block, call `deferIntercept()`.
            // This tells UI-Router to delay the initial URL sync (until all bootstrapping is complete)
            // app.config([ '$urlServiceProvider', $urlService => $urlService.deferIntercept() ]);
            // Manually bootstrap the Angular app
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(RootModule).then(function (platformRef) {
                var injector = platformRef.injector;
                var upgrade = injector.get(static_2.UpgradeModule);
                // The DOM must be already be available
                //upgrade.bootstrap(document.body, [module.name]);
                upgrade.bootstrap(document.body, ['test']);
                // Intialize the Angular Module (get() any UIRouter service from DI to initialize it)
                //const url = injector.get(UrlService);
                // Instruct UIRouter to listen to URL changes
                //url.listen();
                //url.sync();
            });
        }
    };
});
/*
import 'angular'
import module from './test.module'


export default angular.element(document).ready(function () {
    angular.bootstrap(document, [module.name]);
});
*/
System.register("test.directive", ["test.module", "jquery", "test.controller"], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var test_module_4, my;
    return {
        setters: [
            function (test_module_4_1) {
                test_module_4 = test_module_4_1;
            },
            function (_3) {
            },
            function (my_1) {
                my = my_1;
            }
        ],
        execute: function () {
            //import testService from './test.service';
            //import 'reflect-metadata' // for decorators
            //import 'zonejs' // whatever 
            test_module_4.default.directive('fooBar', function () {
                return {
                    template: '<span>{{$ctrl.foo}}</span>',
                    scope: {},
                    restrict: 'E',
                    controller: my.TestController,
                    controllerAs: '$ctrl',
                    link: function (elm, attr) {
                        // fake some global dependency here...for later
                        console.log(jQuery.fn.jquery);
                        //testService.foo();
                    }
                };
            });
        }
    };
});
//# sourceMappingURL=app.js.map