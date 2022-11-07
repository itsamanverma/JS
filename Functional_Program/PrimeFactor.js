/************************************************************
 *  Execution     :  1. default node  cmd> node PrimeFactor.js
 *                   2. if nodemon installed  cmd> nodenom PrimeFactor.js
 *
 *  Purpose       :  Computes the prime factorization of N using brute force
 *
 *  @description
 *
 *  @file         : PrimeFactor.js
 *  @overview     : Computes the prime factorization of N using brute force.
 *  @module       : This is optional if expeclictly its an npm or local package.
 *  @author       : AMAN VERMA <amanvermame786.gmail.com>
 *  @version      : 1.0
 *  @since        : 07-11-2022
 *
 *************************************************************/

const utility = require('./Utility.js');
let userInput = utility.input();/* calling the input method from utility */

let primeFactor = () => {
    userInput.question("Enter your number " , (number) => {
        if (number > 1) {
              utility.calPrimeFactor(number);
              userInput.close();
        } else {
            console.log("Enter the valid Number to get prime factor");
        }
    })
};

primeFactor();