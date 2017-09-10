import { Component } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';
import a1Module from './a1.module';
import {A2Module} from './a2.module';

@Component({
    //moduleId: A2Module.id, /* fixes error on declarations, but still does not render */
    selector: "a2-component",
    template: `<div> hello i am an angular 2 downgraded component</div>`
})
export class A2Component {
    a2member: string;
    constructor() { }

    a2function(): string {
        return this.a2member;
    }
}

// downgrade and register in A1

// TO BE ABLE TO USE the downgraded component add it to
//declarations: [Ng2Component,A2Component,A2WowComponent],
//entryComponents: [Ng2Component,A2WowComponent],
// in the A2Module

a1Module.component('a2Component', downgradeComponent({ component: A2Component }));
