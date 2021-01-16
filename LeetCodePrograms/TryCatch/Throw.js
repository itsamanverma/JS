/************************************************************
 *  Execution     :  1. default node  cmd> node Throw.js
 *                   2. if nodemon installed  cmd> nodenom Throw.js
 *
 *  Purpose       :  If the value of  is positive, it must return the string YES. Otherwise, it must throw an Error according to the following rules:
 *                   If  is , throw an Error with  Zero Error.
 *                   If  is negative, throw an Error with  Negative Error..
 *
 *  @description  :
 *
 *  @file         : Throw.js
 *  @overview     : Throw module to Try to reverse string s using the split, reverse, and join methods.
 *  @module       : This is optional if expeclictly its an npm or local package.
 *  @author       : AMAN VERMA <amanvermame786.gmail.com>
 *  @version      : 1.0
 *  @since        : 12-01-2021
 *
 *************************************************************/

const utility = require('../Utility/Utility.js');
const userInput = utility.input();

let Throw = () => {
    userInput.question('Enter the Number to show the Custom Error base on Condition ', (num) => {
        try {
            console.log(typeof (Number(num)));
            console.log(num);
            if (typeof (Number(num)) === 'number') {
                console.log(utility.Throw(num));
            } else {
                throw Error("Enter the Valid Number..!");
            }
        } catch (error) {
            console.log(error.message);
        }
    });
}
Throw();