import module from './test.module'
import 'jquery'
import * as my from './test.controller'
import { Component } from '@angular/core';
import {Input, Output, EventEmitter } from '@angular/core';
import { downgradeComponent} from '@angular/upgrade/static';

import testService from './test.service';

//import 'reflect-metadata' // for decorators
//import 'zonejs' // whatever

@Component({
    selector:'wowng2',
    template:`<span>wow: {{  $ctrl.foo }}</span>`
})
export class Wowng2{
    foo:string;

    constructor(){
        this.foo = 'wow';
    }
}

module.directive('angularComponent', downgradeComponent({component: Wowng2}));
