/************************************************************
 *  Execution     :  1. default node  cmd> node ReplaceString.js
 *                   2. if nodemon installed  cmd> nodenom ReplaceString.js
 *
 *  Purpose       :  User Input and Replace String Template “Hello <<UserName>>, How are you?”
 *
 *  @description
 *
 *  @file         : ReplaceString.js
 *  @overview     : ReplaceString module replace the user input with string template.
 *  @module       : This is optional if expeclictly its an npm or local package.
 *  @author       : AMAN VERMA <amanvermame786.gmail.com>
 *  @version      : 1.0
 *  @since        : 23-12-2020
 *
 *************************************************************/

const utility = require('./Utility.js');
let userInput = utility.input();/* calling the input method from utility */

let replaceString = () => {
    userInput.question('Enter Your Name? ', (answer) => {
        if (answer >= 0 && answer < 3) {
            console.log('Enter the valid Name Input..!');
        } else {
            utility.replace(answer);
            userInput.close();
        }
    })
};

replaceString();
