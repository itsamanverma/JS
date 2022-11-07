/*************************************************************************************
 *  Execution     :  1. default node  cmd> node 2DArray.js
 *                   2. if nodemon installed  cmd> nodenom 2DArray.js
 *
 *  Purpose       :  A library for reading in 2D arrays of integers, doubles, or booleans from standard input and printing them out to standard output
 *
 *  @description
 *
 *  @file         : 2DArray.js
 *  @overview     : A library for reading in 2D arrays of integers, doubles, or booleans from standard input and printing them out to standard output.
 *  @module       : This is optional if expeclictly its an npm or local package.
 *  @author       : AMAN VERMA <amanvermame786.gmail.com>
 *  @version      : 1.0   
 *  @since        : 07-11-2022
 *
 *************************************************************************************/

const utility = require('./Utility.js');
const user2DArrayInput = utility.user2DArrayInput();

console.log('2DArray is' ,user2DArrayInput);



