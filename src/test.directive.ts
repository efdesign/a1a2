import module from './test.module'
import 'jquery'
import * as my from './test.controller'

module.directive('fooBar', function () {
    return {
        template: '<span>{{$ctrl.foo}}</span>',
        scope: {},
        restrict: 'E',
        controller: my.TestController,
        controllerAs: '$ctrl',
        link: function (elm: any, attr: any) {
            // fake some global dependency here...for later
            console.log(jQuery.fn.jquery);
        }
    }


});