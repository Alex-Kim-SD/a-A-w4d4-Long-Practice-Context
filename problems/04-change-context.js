/***********************************************************************
Implement the following in the problems/04-change-context.js file.

Write a function named changeContext(func, obj) that will accept a function func
and an object obj. The changeContext function should return the result of the
function func invoked with the object obj as its context.

Test your implementation by running the test specs in the
test/04-change-context-spec.js file. Run the specs with the following command:
************************************************************************************/

function changeContext(func, obj) {
  const newFunc = func.bind(obj)
  return newFunc()
}
// // Both above and below work
// function changeContext(func, obj) {
//   return func.bind(obj)()
// }

class Person {
  constructor(name) {
    this.name = name;
  }
}

function extractName() {
  return this.name;
}

const kristen = new Person('Kristen');
console.log(changeContext(extractName, kristen)); // => Kristen

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;
