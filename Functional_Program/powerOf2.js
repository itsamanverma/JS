/************************************************************
 *  Execution     :  1. default node  cmd> node powerOf2.js
 *                   2. if nodemon installed  cmd> nodenom powerOf2.js
 *
 *  Purpose       :  This program takes a command-line argument N and prints a table of the powers of 2 
 *                   that are less than or equal to 2^N
 *
 *  @description
 *
 *  @file         : powerOf2.js
 *  @overview     : powerOf2 module to prints a table of the powers of 2 that are less than or equal to 2^N
 *  @module       : This is optional if expeclictly its an npm or local package.
 *  @author       : AMAN VERMA <amanvermame786.gmail.com>
 *  @version      : 1.0
 *  @since        : 25-12-2020
 *
 *************************************************************/

const utility = require('./Utility.js');
let powerOf2 = () => {
    var number =+process.argv[2];//input from command line argument.
    if (number >= 0)
        utility.powerOf2(number);// calling of powerOf2 method.    
    else
        console.log("Please enter correct input through command line argument");
}
powerOf2();
