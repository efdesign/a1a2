import module from './test.module'
import 'jquery'
import * as my from './test.controller'
import { Component } from '@angular/core';
import {Input, Output, EventEmitter } from '@angular/core';
import { downgradeComponent} from '@angular/upgrade/static';

//import testService from './test.service';

//import 'reflect-metadata' // for decorators
//import 'zonejs' // whatever 

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
            //testService.foo();
        }
    }


});