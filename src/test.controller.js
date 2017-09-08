angular.module('test').controller('test.controller', function () {
    console.log('controller instantiated ');
    this.foo = 'foo';
    this.getFoo = function () {
        return this.foo;
    }
});