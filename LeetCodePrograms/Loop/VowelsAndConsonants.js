/************************************************************
 *  Execution     :  1. default node  cmd> node TwoSum.js
 *                   2. if nodemon installed  cmd> nodenom TwoSum.js
 *
 *  Purpose       :  Complete the vowelsAndConsonants function in the editor below. It has one parameter, a string, s , consisting of lowercase English alphabetic letters (i.e., a through z). The function must do the following:
 *                   First, print each vowel in  on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in s.
 *                   Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in s.
 *
 *  @description   : @param {string s},}
 *
 *  @file         : VowelsAndConsonants.js
 *  @overview     : VowelsAndConsonants module to print the vowels & Consonants appeared in the user String.
 *  @module       : This is optional if expeclictly its an npm or local package.
 *  @author       : AMAN VERMA <amanvermame786.gmail.com>
 *  @version      : 1.0
 *  @since        : 08-01-2021
 *
 *************************************************************/

const utility = require('../Utility/Utility.js');
const userStringInput = utility.input();

let VowelsAndConsonants = () => {
    userStringInput.question("Enter the String for which you wants print Vowels && Consonants ", (string) => {
        try {
            console.log("User String:", string);
            if (string >= 0 && string < 3) {
                console.log('Enter the Valid Input String ...!');
            } else {
                console.log("VowelsAndConsonants: ", utility.VowelConsonants2(string));
                userStringInput.close();
            }
        } catch (error) {
            console.log("error", error);
        }
    })
}
VowelsAndConsonants();