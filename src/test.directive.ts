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


module.component('wow',{
    template:"<span>wow: {{  $ctrl.foo }}</span>",
    bindings: {
        foo:"="
    },
    // bindToController:true, -> use bindings
    // link-> can't use
    //controllerAs:"$ctrl",
    controller: function(){
        this.foo = 'wow';
    }

});



// An Angular component
/*@Component({
    selector: 'ng2-component',
    template: `
      <h1>ng2 component</h1>
      <!--<a uiSref="app">Back to app</a>
      <ui-view></ui-view>-->
    `
}) export class Ng2Component { }

module.directive('angularComponent', downgradeComponent({component: Ng2Component}));*/