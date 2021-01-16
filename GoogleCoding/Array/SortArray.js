/************************************************************
 *  Execution     :  1. default node  cmd> node SortArray.js
 *                   2. if nodemon installed  cmd> nodenom SortArray.js
 *
 *  Purpose       :  Given an array of integers A sorted in non-decreasing order,
 *                   return of the squares of each number, also in sorted non-deceasing order.
 * 
 *  @description   : @param {number[]} nums ,@return {number[]}
 *
 *  @file         : SortArray.js
 *  @overview     : SortArray module to print sorted sqaures of each elements array.
 *  @module       : This is optional if expeclictly its an npm or local package.
 *  @author       : AMAN VERMA <amanvermame786.gmail.com>
 *  @version      : 1.0
 *  @since        : 15-01-2021
 *
 *************************************************************/

const utility = require('../Utility/Utility.js');
const arr = utility.inputreadLineArray();

console.log(' array is ', arr);

let sortArray = () => {
    try {
        if (Array.isArray(arr)) {
            utility.sortArray(arr);
        } else {
            throw Error('Enter the Valid input Array ');
        }
    } catch (error) {
        console.log(error.message);
    }
}

sortArray();

