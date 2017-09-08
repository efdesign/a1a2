//import module from './test.module'
// conversion to component



export class TestController{

    foo:string;
    getFoo:Function;

    constructor () {
        console.log('controller instantiated ');
        this.foo = 'foo';
        this.getFoo = function () {
            return this.foo;
        }
    }
}


//module.controller('test.controller', TestController);