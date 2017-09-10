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
    selector:'wow',
    template:`<span>A2 wow component says: {{foo}}</span>`
})
export class A2WowComponent{
    foo:string;

    constructor(){
        this.foo = 'wow';
    }
}

module.directive('a2WowComponent', downgradeComponent({component: A2WowComponent}));
