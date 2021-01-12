/************************************************************
 *  Execution     :  1. default node  cmd> node Regax.js
 *                   2. if nodemon installed  cmd> nodenom Regax.js
 *
 *  Purpose       :  Complete the function in the editor below by returning a RegExp object, re,
 *                   that matches any string s that begins and ends with the same vowel.
 *                   Recall that the English vowels are a, e, i, o, and u.
 *
 *  @description  :
 *
 *  @file         : Regax.js
 *  @overview     : Regax module to valid the string in which start & End vowel is Same.
 *  @module       : This is optional if expeclictly its an npm or local package.
 *  @author       : AMAN VERMA <amanvermame786.gmail.com>
 *  @version      : 1.0
 *  @since        : 10-01-2021
 *
 *************************************************************/

const { log } = require('console');
const utility = require('../Utility/Utility.js');
const userInput = utility.input();

let Regax = () => {
    userInput.question("Enter the String to pass the Regax expression ", (string) => {
        try {
            if (string.length > 0) {
                utility.Regax(string);
            } else {
                log("Enter the Valid String");
            }
        } catch (error) {
            log(error);
        }
    })
}
Regax();