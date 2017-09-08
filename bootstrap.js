System.register("bootstrap", ["angular"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var angular_1;
    return {
        setters: [
            function (angular_1_1) {
                angular_1 = angular_1_1;
            }
        ],
        execute: function () {
            angular_1.default.element(document).ready(function () {
                angular_1.default.bootstrap(document, ['test']);
            });
        }
    };
});
System.register("test.controller", ["test.module"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var test_module_1;
    return {
        setters: [
            function (test_module_1_1) {
                test_module_1 = test_module_1_1;
            }
        ],
        execute: function () {
            test_module_1.default.controller('test.controller', function () {
                console.log('controller instantiated ');
                this.foo = 'foo';
                this.getFoo = function () {
                    return this.foo;
                };
            });
        }
    };
});
System.register("test.directive", ["test.module", "jquery"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var test_module_2, jQuery;
    return {
        setters: [
            function (test_module_2_1) {
                test_module_2 = test_module_2_1;
            },
            function (jQuery_1) {
                jQuery = jQuery_1;
            }
        ],
        execute: function () {
            test_module_2.default.directive('fooBar', function () {
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
System.register("test.module", ["angular"], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var m;
    return {
        setters: [
            function (_1) {
            }
        ],
        execute: function () {
            m = angular.module('test', []);
            exports_4("default", m);
        }
    };
});
