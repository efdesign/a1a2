import module from './a1.module'
import 'jquery'
import * as my from './a1.controller'
import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';

import testService from './a1.testService.service';

//import 'reflect-metadata' // for decorators
//import 'zonejs' // whatever

@Component({
    selector: 'wow', // used in angular 2 ignored by angular 1
    template: `<div [ngStyle]="{'color':color}" (click)="onClick()">A2 wow(selector) component (downgraded)  says: <strong>{{foo}}</strong> bar is an input with value <strong [style.color]="color2" >{{bar}}</strong> from the template. Click this row to demonstrate property binding on click event. <span [hidden]="visible">(will toggle visibility of this text text)</span></div>`
})

export class A2WowComponent {
    foo: string; // hardcoded in constructor
    visible: boolean;
    color:string;
    color2:string;
    @Input() bar: string; // this allows for [] input binding in the template

    // There's one notable exception to the rule of using Angular attribute syntax for downgraded components. It has to do with input or output names that consist of multiple words. In Angular, you would bind these attributes using camelCase:
    // But when using them from AngularJS templates, you must use kebab-case: in template my-event
    //@Output() click = new EventEmitter();


    constructor() {
        this.foo = 'wow';
    }

    // custom event, handler function
    //https://angular.io/guide/template-syntax#event-binding---event-
    onClick() {
        //this.click.emit('I am a custom event return type in a2wow component');
        console.log('click works ');
        this.visible = !this.visible;
        this.color = this.random_rgba();
        this.color2 = this.random_rgba();
      }

    random_rgba(): string { // just shades of blue, really...and not too light
        var o = Math.round, r = Math.random, s = 255;
        return 'rgba(0,0,' + o(r() * s) + ',1)';
    }
}

module.directive('a2WowComponent', downgradeComponent({ component: A2WowComponent }));
