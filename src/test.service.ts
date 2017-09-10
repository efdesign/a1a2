import module from './test.module';


export let testService = function(/* dependency */){
    this.foo = function(){
        console.log('foo from test service foo()');
    }
}

module.service('testService', testService)