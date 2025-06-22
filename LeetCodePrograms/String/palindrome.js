/**
 *  palindrome 
    Given an integer x, return true if x is a palindrome, and false otherwise.

    The algorithm for palindrome(number n) is as follows:
    @author AMAN VERMA
    @itsamanverma 
    @function Given an integer x, return true if x is a palindrome, and false otherwise.
 */

const utility = require("../Utility/Utility.js");
const userInput = utility.input();

let palindrome = () => {
  userInput.question("Enter the number to find palindrome number: ", (x) => {
    try {
      if (x) {
        console.log("number is palindrome number", utility.isPalindromeNum(x));
      } else {
        console.log("Enter the value palindrome number.");
      }
    } catch (error) {
      throw error;
    }
  });
};

palindrome();
