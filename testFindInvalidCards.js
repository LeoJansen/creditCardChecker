let TestModule = require('./main.js');

//This array serves as a template for checking
const checkArray  = [true,true,true,true,true,false,false,false,false,false,false,true,false,false,true]



let batch = [...TestModule.batch];



function testFindInvalidCards () {

    let resultBooleanArray;
    resultboolean = batch.map((element) => { 
        return TestModule.validateCred(element);
    })
    console.log(' ')
    console.log(' ')
    console.log(' ')
    console.log(' ')
    console.log ( ' Initializing tests on findInvalidCards function...')
    console.log(' ')
    console.log(' ')
    console.log(' ')
    let finalResult = true;
    for (let i = 0; i <= resultboolean.length ; i++) {
        if ( resultboolean[i] != checkArray[i]) {
             finalResult = false;  
        } else {
            console.log('Element ' + i + ' = ok')
        };
    };
    if ( finalResult == true) { 
        console.log(' ')
        console.log(' ')
        console.log(' ...Tests completed with success... ')
        console.log(' ')
        console.log(' Function works without problems ')
    } else {
        console.log(' ')
        console.log(' ')
        console.log(' ...Tests completed with success... ')
        console.log(' ')
        console.log('..........Error was found!.............')
        console.log(' ')
        console.log('Please, check the function code!')
        console.log(' ')
    };
};


testFindInvalidCards();



