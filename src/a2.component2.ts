
import { Component } from '@angular/core';


@Component({
    selector: 'ng2-component2',
    
    template: `
      <div>ng2 component, this component is defined as a2 component but not downgraded, as such it's handled by Angualar. {{bar}}</div>
      <!--<a uiSref="app">Back to app</a>
      <ui-view></ui-view>-->
    `
}) export class A2Component2 {
    bar:string;
    constructor(){
        this.bar = 'bar';
    }
}

