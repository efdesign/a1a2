import module from './a1.module';


export let testService = function () {
    return {
        foo: function (): void {
            console.log('foo from test service foo()');
        }
    }
}

module.service('testService', testService)