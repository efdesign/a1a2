import module from './test.module'
import 'jquery'

module.component('fooBar',  {
    
        template:'<span>{{$ctrl.foo}}</span>',
        // scope: {},
        // restrict: 'E',
        controller: 'test.controller',
        // controllerAs: '$ctrl',
        link:function(elm,attr){
            // fake some global dependency here...for later
            console.log(jQuery.fn.jquery);
        }
        
    
});