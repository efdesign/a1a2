import module from './a1.module'
import 'jquery'
import * as my from './a1.controller'
import { Component } from '@angular/core';
import {Input, Output, EventEmitter } from '@angular/core';
import { downgradeComponent} from '@angular/upgrade/static';

//import testService from './test.service';

//import 'reflect-metadata' // for decorators
//import 'zonejs' // whatever 

/* a directive in A1, this will need to be migrated, for test purposes in A2 component or directive then downgraded for usage in a1 */
module.directive('fooBar', function () {
    return {
        template: '<span>A1 directive fooBar says "{{$ctrl.foo}}", jquery version {{$ctrl.jqueryVersion}}</span>',
        scope: {},
        restrict: 'E',
        controller: my.TestController,
        controllerAs: '$ctrl',
        link: function (scope: any, elm: any, attr: any, controller:any) {
            // fake some global dependency here...for later
            // console.log(jQuery.fn.jquery);
            controller.jqueryVersion = jQuery.fn.jquery;
            //testService.foo();
        }
    }


});