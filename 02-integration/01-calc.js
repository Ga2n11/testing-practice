// ==================================================
// DEFINE FUNCTION(S)
// ==================================================
function calc(x,y,z) {
 if(x=='add'){ sum(y,z);}
    else if(x=='subtract'){subtract(y,z);}
    else if(x=='multiply'){multiply(y,z);}
    else if(x=='divide'){divide(y,z);}
    else{console.log("Operation not supported");}
}

function sum(x,y) {

  if (x === undefined) {
        x=0;
  }

  if (y === undefined) {
        y=0;
  }

   return x+y;
}

function subtract(x,y) { 

  if (x === undefined) {
        x=0;
  }

  if (y === undefined) {
        y=0;
  }

   return x-y;
}


function multiply(x,y) { 

  if (x === undefined) {
        x=1;
  }

  if (y === undefined) {
        y=1;
  }

   return x*y;
}




function divide(x,y) { 

  if (x === undefined) {
        x=1;
  }

  if (y === undefined) {
        y=1;
  }

  if (y === 0) {
        console.log("Error in division");
	return 0;
  }



   return x/y;
}


// ==================================================
// DEFINE AND EXECUTE TEST CASES
// ==================================================
try {
  // --------------------------------------------------
  // Test Case 1
  // --------------------------------------------------
  // It should return the correct sum when the user provides: 'add', 1, 1.
  var result = calc('add', 1, 1);
  if (result !== 2) throw new Error('Expected calc("add", 1, 1) to be 2. Received: ' + result);

  // --------------------------------------------------
  // Test Case 2
  // --------------------------------------------------
  // It should return the correct difference when the user provides: 'subtract', 20, 10.
     var result = calc( 'subtract', 20, 10);
  if (result !== 10) throw new Error('Expected calc("add", 1, 1) to be 2. Received: ' + result);

  // --------------------------------------------------
  // Test Case 3
  // --------------------------------------------------
  // It should return the correct product when the user provides: 'multiply', 9, 9.

     var result = calc( 'multiply', 9, 9);
  if (result !== 81) throw new Error('Expected calc("add", 1, 1) to be 2. Received: ' + result);
  // --------------------------------------------------
  // Test Case 4
  // --------------------------------------------------
  // It should return the correct quotient when the user provides: 'divide', 9, 3.
var result = calc('divide', 9, 3);
  if (result !== 3) throw new Error('Expected calc("add", 1, 1) to be 2. Received: ' + result);
  // --------------------------------------------------
  // Test Case 5
  // --------------------------------------------------
  // It should return the message 'Operation not supported.' when the user provides: exponent, 2, 8.

  console.log('All tests passed successfully.');

// ==================================================
// PRINT ERRORS
// ==================================================
} catch (e) {
  console.warn('Whoops, the following test did not pass:');
  console.error(e.message);
}
