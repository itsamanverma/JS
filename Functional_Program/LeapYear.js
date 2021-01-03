/************************************************************
 *  Execution     :  1. default node  cmd> node LeapYear.js
 *                   2. if nodemon installed  cmd> nodenom LeapYear.js
 *
 *  Purpose       :  Determines Whether a year is leap year is or not?
 *
 *  @description
 *
 *  @file         : LeapYear.js
 *  @overview     : LeapYear module to check whether user given year is leap year or not.
 *  @module       : This is optional if expeclictly its an npm or local package.
 *  @author       : AMAN VERMA <amanvermame786.gmail.com>
 *  @version      : 1.0
 *  @since        : 15-11-2020
 *
 *************************************************************/

var utility = require('./Utility.js');
var userInput = utility.input();

let leap = () => {
    userInput.question("Enter Year to check leap year or not = ", (year) => /*get user input*/ {
        if (year >= 0)
            return utility.checkLeapYear(year);/* call the function from utility file */
        else {
            console.log("Please enter correct year");
            userInput.close();
            return false;
        }
    });
}

leap();