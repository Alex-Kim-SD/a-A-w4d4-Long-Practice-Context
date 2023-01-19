/**********************************************************************
 Implement the following in the problems/05-bind-to-an-arg.js file.

Write a function named bindToAnArg(func, arg) that will accept a function func and
any argument arg. The bindToAnArg function should return the
passed-in function func modified to always be invoked with the passed-in argument arg.


***********************************************************************/



function bindToAnArg(func, arg) {
  const newFunc = func.bind(null,arg)
  return newFunc
}


function add(num1, num2) {return num1 + num2;}

const addTwo = bindToAnArg(add, 2);
const addThree = bindToAnArg(add, 3);

const twoPlusSix = addTwo(6);
const twoPlusSeven = addTwo(7);
const threePlusSeven = addThree(7);
const threePlusEight = addThree(8);

// console.log(twoPlusSeven,twoPlusSix)
console.log(
  {
  twoPlusSix,     // => 8
  twoPlusSeven,   // => 9
  threePlusSeven, // => 10
  threePlusEight  // => 11
  }
);
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;
