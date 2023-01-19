/***************************************************************
Implement the following in the problems/09-call-on-target.js file.

Write a function named callOnTarget(func, obj1, obj2) that
will accept a function func and two objects, obj1 and obj2.
callOnTarget should return thev result of the function func
invoked with obj1 as its context and obj2 as the first argument.
****************************************************************/

// function callOnTarget(func, obj1, obj2) {
//   const newFunc = func.bind(obj1, obj2)
//   return newFunc()
// }
// // both above and below work
function callOnTarget(func, obj1, obj2) {
  return func.call(obj1, obj2)
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = callOnTarget;
