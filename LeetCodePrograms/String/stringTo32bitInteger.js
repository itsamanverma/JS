/**
 *  String to Integer (atoi)
    Medium
    Topics
    premium lock icon
    Companies
    Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.

    The algorithm for myAtoi(string s) is as follows:

    Whitespace: Ignore any leading whitespace (" ").
    Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity if neither present.
    Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
    Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
    Return the integer as the final result.

    @author AMAN VERMA
    @itsamanverma 
    @function Given a string s, convert into 32 bit-integer.
 */

const utility = require('../Utility/Utility.js');
const userInput = utility.input();

let stringTo32BitInteger = () => {
    userInput.question("Enter the string to coverte in 32 bits integer: ", (string) => {
        try {
            if (string.length > 0 ) {
                console.log("here your string to 32 bit interger", utility.stringTo32BitInteger(string));
            }else{
                console.log("Enter the value string to find longest substring without repeating characters.");
            }
        } catch (error) {
            throw error;
        }
    })
}

stringTo32BitInteger();