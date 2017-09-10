import module from './a1.module'
import 'jquery'
import * as my from './a1.controller'
import { Component } from '@angular/core';
import {Input, Output, EventEmitter } from '@angular/core';
import { downgradeComponent} from '@angular/upgrade/static';

import testService from './a1.testService.service';

//import 'reflect-metadata' // for decorators
//import 'zonejs' // whatever

@Component({
    selector:'wow', // used in angular 2 ignored by angular 1
    template:`<div>A2 wow(selector) component (downgraded)  says: <strong>{{foo}}</strong> bar is an input with value <strong>{{bar}}</strong> from the template</div>`
})

export class A2WowComponent{
    foo:string; // hardcoded in constructor
    @Input() bar:string; // this allows for [] input binding in the template

    constructor(){
        this.foo = 'wow';
    }
}

module.directive('a2WowComponent', downgradeComponent({component: A2WowComponent}));
