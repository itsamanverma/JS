/************************************************************
 *  Execution     :  1. default node  cmd> node NthHarmonicNumber.js
 *                   2. if nodemon installed  cmd> nodenom NthHarmonicNumber.js
 *
 *  Purpose       :  To generate nth harmonic value according to userinput and print the harmonic value.
 *
 *  @description
 *
 *  @file         : NthHarmonicNumber.js
 *  @overview     : NthHarmonicNumber module to print the nth Harmonic value.
 *  @module       : This is optional if expeclictly its an npm or local package.
 *  @author       : AMAN VERMA <amanvermame786.gmail.com>
 *  @version      : 1.0
 *  @since        : 03-01-2021
 *
 *************************************************************/

const utility = require('./Utility.js');
const userInput = utility.input();

let nthHarmonic = () => {
    userInput.question('Please enter value for harmonic value ', (Number) => {
        if (Number >= 0) {
            utility.nthHarmonic(Number);
        } else {
            console.log("Please Enter the correct Value");
            userInput.close();
        }
    })
}

nthHarmonic();
