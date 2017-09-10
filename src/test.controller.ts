//import module from './test.module'
// conversion to component

//import testService from './test.service';

export class TestController{

    foo:string;
    getFoo:Function;
    //testService:any;

    constructor () {
        console.log('controller instantiated ');
        this.foo = 'foo';
        this.getFoo = function () {
            return this.foo;
        }
        //this.testService = testService;
    }
}


//module.controller('test.controller', TestController);