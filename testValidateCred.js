let TestModule = require('./main.js');

console.log(' ')
console.log(' ')
console.log('Test Module Valid Section')
console.log(' ')
let test1 = TestModule.validateCred(TestModule.valid1)
console.log(test1);
let test2 = TestModule.validateCred(TestModule.valid2)
console.log(test2);
let test3 = TestModule.validateCred(TestModule.valid3)
console.log(test3);
let test4 = TestModule.validateCred(TestModule.valid4)
console.log(test4);
let test5 = TestModule.validateCred(TestModule.valid5)
console.log(test5);
console.log(' ')
console.log(' ')

console.log('Test Module Invalid Section')
console.log(' ')
let test6 = TestModule.validateCred(TestModule.invalid1)
console.log(test6);
let test7 = TestModule.validateCred(TestModule.invalid2)
console.log(test7);
let test8 = TestModule.validateCred(TestModule.invalid3)
console.log(test8);
let test9 = TestModule.validateCred(TestModule.invalid4)
console.log(test9);
let test10 = TestModule.validateCred(TestModule.invalid5)
console.log(test10);
console.log(' ')
console.log(' ')

console.log('Test Module Mystery Section')
console.log(' ')
console.log(' ')
let test11 = TestModule.validateCred(TestModule.mystery1)
console.log(test11);
let test12 = TestModule.validateCred(TestModule.mystery1)
console.log(test12);
let test13 = TestModule.validateCred(TestModule.mystery1)
console.log(test13);
let test14 = TestModule.validateCred(TestModule.mystery1)
console.log(test14);
let test15 = TestModule.validateCred(TestModule.mystery1)
console.log(test15);

console.log(' ')
console.log(' ')
console.log(' ....................Test finished............... ')
console.log(' ')
