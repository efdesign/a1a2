import module from './a1.module';


export let testService = function () {
    return {
        foo: function (): string {
            var msg = 'foo from test service foo()';
            console.log(msg);
            return msg;
        }
    }
}
// this will need a system import otherwise it's not getting recognized
// maybe there is a way with an ES6 import to just to just load it internally ? so that system js does not have to load it on it's own ?
module.service('testService', testService);