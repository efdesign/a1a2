angular.module('test').directive('fooBar', function () {
    return {
        template:'<span>{{$ctrl.foo}}</span>',
                scope: {},
        restrict: 'E',
        controller: 'test.controller',
        controllerAs: '$ctrl',
        
    }
});