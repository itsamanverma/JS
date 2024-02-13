/**
 * Given a string s, return the longest palindromic substring in s. 
 * Example 1:
 * Input: s = "babad"
 * Output: "bab"
 * Explanation: "aba" is also a valid answer.
 * Example 2:
 * Input: s = "cbbd"
 * Output: "bb"
 * @itsamanverma
 * @Author AMAN VERMA
 * @function Longest Palindromic Substring
 */

const utility = require('../Utility/Utility.js');
const userInput = utility.input();

let longestPalindromicSubString = () => {
    userInput.question("Enter the string to find longest palindromic substring: ", (string) => {
        try {
            if (string.length > 0 ) {
                console.log("longest palindromic substring", utility.longestPalindromicSubStringUsingExpandFromCenter(string));
            }else{
                console.log("Enter the value string to find longest Palindromic substring.");
            }
        } catch (error) {
            throw error;
        }
    })
}

longestPalindromicSubString();