/**Given a string s, find the length of the longest substring without repeating characters.

Example 1: (medium level)

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 10 power 4
s consists of English letters, digits, symbols and spaces.
@author AMAN VERMA
@itsamanverma 
@function Given a string s, find the length of the longest substring without repeating characters.
*/

const utility = require('../Utility/Utility.js');
const userInput = utility.input();

let longestSubString = () => {
    userInput.question("Enter the string to find longest substring without repeating characters: ", (string) => {
        try {
            if (string.length > 0 ) {
                console.log("longest substring without repeating characters", utility.longestSubString1(string));
            }else{
                console.log("Enter the value string to find longest substring without repeating characters.");
            }
        } catch (error) {
            throw error;
        }
    })
}

longestSubString();