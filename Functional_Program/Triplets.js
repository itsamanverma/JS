/*************************************************************************************
 *  Execution     :  1. default node  cmd> node Triplets.js
 *                   2. if nodemon installed  cmd> nodenom Triplets.js
 *
 *  Purpose       :  A program with cubic running time. Read in N integers and counts the   number of triples that sum to exactly 0.
 *
 *  @description
 *
 *  @file         : Triplets.js
 *  @overview     : A program with cubic running time. Read in N integers and counts the   number of triples that sum to exactly 0.
 *  @module       : This is optional if expeclictly its an npm or local package.
 *  @author       : AMAN VERMA <amanvermame786.gmail.com>
 *  @version      : 1.0   
 *  @since        : 07-11-2022
 *
 *************************************************************************************/

const utility = require('./Utility.js');
const userInputLinearArray = utility.inputreadLinearArray();

console.log('User Array is ', userInputLinearArray);

const userInput = utility.input();

let triplets = () => {
    try {
        if(Array.isArray(userInputLinearArray)){
            utility.calTriplets(userInputLinearArray);
        }else{
            throw Error('Enter the Valid input Array ');  
        }
    } catch (error) {
        console.log(error.message);
    }
}

triplets();