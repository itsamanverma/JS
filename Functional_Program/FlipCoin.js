/************************************************************
 *  Execution     :  1. default node  cmd> node FlipCoin.js
 *                   2. if nodemon installed  cmd> nodenom FlipCoin.js
 *
 *  Purpose       :  Determines by Flip Coin and print percentage of Heads and Tails?
 *
 *  @description
 *
 *  @file         : FlipCoin.js
 *  @overview     : FlipCoin module to print percentage of Heads and Tails by Flip Coin.
 *  @module       : This is optional if expeclictly its an npm or local package.
 *  @author       : AMAN VERMA <amanvermame786.gmail.com>
 *  @version      : 1.0
 *  @since        : 23-12-2020
 *
 *************************************************************/

const utility = require('./Utility.js');
const userInput = utility.input();

let flipCoin = () => {
    userInput.question("How many times you wants to flip the Coin ", (flip) => {/* input taken by user */
        if (flip >= 0) {
            utility.flipCoin(flip);
        } else {
            console.log("Please Flip the Coin to get Head Or Tail Percentage...!");
            userInput.close();
        }
    })
};

flipCoin();