/************************************************************
 *  Execution     :  1. default node  cmd> node TryCatch.js
 *                   2. if nodemon installed  cmd> nodenom TryCatch.js
 *
 *  Purpose       :  Complete the reverseString function; it has one parameter, . You must perform the following actions:
 *                   Try to reverse string  using the split, reverse, and join methods.
 *                   If an exception is thrown, catch it and print the contents of the exception's  on a new line.
 *                   Print  on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.
 *
 *  @description  :
 * 
 *  @file         : TryCatch.js
 *  @overview     : TryCatch module to Try to reverse string s using the split, reverse, and join methods.
 *  @module       : This is optional if expeclictly its an npm or local package.
 *  @author       : AMAN VERMA <amanvermame786.gmail.com>
 *  @version      : 1.0
 *  @since        : 12-01-2021
 *
 *************************************************************/

const utility = require('../Utility/Utility.js');
const userInput = utility.input();

let trycatch = () => {
    userInput.question("Enter the string you want to reverse it ", (string) => {
        try {
            if (string.length > 0) {
                utility.trycatch(string);
            } else {
                throw new Error("Enter the Valid string to reverse it.");
            }
        } catch (error) {
            console.log(error.message);
        }
    });
}
trycatch();