/************************************************************
 *  Execution     :  1. default node  cmd> node TryCatch.js
 *                   2. if nodemon installed  cmd> nodenom TryCatch.js
 *
 *  Purpose       :  Complete the function in the editor below by returning a RegExp object, re,
 *                   that matches any string s that begins and ends with the same vowel.
 *                   Recall that the English vowels are a, e, i, o, and u.
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