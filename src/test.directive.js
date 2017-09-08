import module from './test.module'
import 'jquery'
import * as my from './test.controller'

module.component('fooBar',  {
    
        template:'<span>{{$ctrl.foo}}</span>',
        bindings: {},
        // restrict: 'E',
        controller: my.TestController,
        // controllerAs: '$ctrl',
        link:function(elm,attr){
            // fake some global dependency here...for later
            console.log(jQuery.fn.jquery);
        }
        
    
});