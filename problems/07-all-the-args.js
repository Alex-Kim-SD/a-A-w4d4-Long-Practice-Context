/****************************************************************
Implement the following in the problems/07-all-the-args.js file.

Write a function named allTheArgs(func, ...args) that will accept a function func
and any number of arguments. The allTheArgs function should return the passed-in
function func modified to always be invoked with the
passed-in arguments args. See code block below for further details.
********************************************************************/

function allTheArgs(func, ...args) {
    const newFunc = func.bind(null,...args)
    return newFunc
  }

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
