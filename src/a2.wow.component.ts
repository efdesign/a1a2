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
    template:`<div (click)="onClick()">A2 wow(selector) component (downgraded)  says: <strong>{{foo}}</strong> bar is an input with value <strong>{{bar}}</strong> from the template</div>`
})

export class A2WowComponent{
    foo:string; // hardcoded in constructor
    @Input() bar:string; // this allows for [] input binding in the template
    
   // There's one notable exception to the rule of using Angular attribute syntax for downgraded components. It has to do with input or output names that consist of multiple words. In Angular, you would bind these attributes using camelCase:
    // But when using them from AngularJS templates, you must use kebab-case: in template my-event
    //@Output() click = new EventEmitter();
    

    constructor(){
        this.foo = 'wow';
    }

    // custom event, handler function
    onClick() {
        //this.click.emit('I am a custom event return type in a2wow component');
        console.log('click works ');
      }
}

module.directive('a2WowComponent', downgradeComponent({component: A2WowComponent}));
