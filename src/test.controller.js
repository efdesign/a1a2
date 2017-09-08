import module from './test.module'

module.controller('test.controller', function () {
    console.log('controller instantiated ');
    this.foo = 'foo';
    this.getFoo = function () {
        return this.foo;
    }
}); 