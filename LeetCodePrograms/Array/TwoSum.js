/************************************************************
 *  Execution     :  1. default node  cmd> node TwoSum.js
 *                   2. if nodemon installed  cmd> nodenom TwoSum.js
 *
 *  Purpose       :  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 *                   You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *                   You can return the answer in any order.
 *
 *  @description   : @param {number[]} nums ,@param {number} target ,@return {number[]}
 *
 *  @file         : TwoSum.js
 *  @overview     : TwoSum module to print indices of the two numbers such that they add up to target.
 *  @module       : This is optional if expeclictly its an npm or local package.
 *  @author       : AMAN VERMA <amanvermame786.gmail.com>
 *  @version      : 1.0
 *  @since        : 30-12-2020
 *
 *************************************************************/

const utility = require('../Utility/Utility.js');
let arr = utility.inputreadLineArray();
console.log("array is ", arr);
const userInput = utility.input();
let twoSum = () => {
    userInput.question("Enter the target value you want", (target) => {
        try {
            console.log("target is ", target);
            if (target >= 0) {
                console.log("index of value which sum is target ", utility.twoSum(arr, target));
            }
        } catch (error) {
            console.log(error);
        }
    })
};
twoSum();