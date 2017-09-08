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
System.register("bootstrap", ["angular", "test.module"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var test_module_1;
    return {
        setters: [
            function (_2) {
            },
            function (test_module_1_1) {
                test_module_1 = test_module_1_1;
            }
        ],
        execute: function () {
            exports_2("default", angular.element(document).ready(function () {
                angular.bootstrap(document, [test_module_1.default.name]);
            }));
        }
    };
});
System.register("test.controller", ["test.module"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var test_module_2;
    return {
        setters: [
            function (test_module_2_1) {
                test_module_2 = test_module_2_1;
            }
        ],
        execute: function () {
            test_module_2.default.controller('test.controller', function () {
                console.log('controller instantiated ');
                this.foo = 'foo';
                this.getFoo = function () {
                    return this.foo;
                };
            });
        }
    };
});
System.register("test.directive", ["test.module", "jquery"], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var test_module_3;
    return {
        setters: [
            function (test_module_3_1) {
                test_module_3 = test_module_3_1;
            },
            function (_3) {
            }
        ],
        execute: function () {
            test_module_3.default.directive('fooBar', function () {
                return {
                    template: '<span>{{$ctrl.foo}}</span>',
                    scope: {},
                    restrict: 'E',
                    controller: 'test.controller',
                    controllerAs: '$ctrl',
                    link: function (elm, attr) {
                        // fake some global dependency here...for later
                        console.log(jQuery.fn.jquery);
                    }
                };
            });
        }
    };
});
