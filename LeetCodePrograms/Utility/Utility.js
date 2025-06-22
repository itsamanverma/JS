var read = require("readline-sync");

module.exports = {
  inputreadLineArray() {
    var l = read.question("How many element you want enter in array ");
    var arr = new Array(l);

    console.log("Enter " + l + " integer element in array");
    for (let index = 0; index < l; index++) {
      arr[index] = Number(read.question(""));
    }
    return arr;
  },
  input() {
    const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    return rl;
  },
  /* twoSum method is give the index value of given array for the wanted target
   *
   * @param  : array ,target
   * @return : array
   */
  twoSum(arr, target) {
    let map = new Map();
    for (var i = 0; i < arr.length; i++) {
      let complement = target - arr[i];
      if (map.has(complement)) {
        return [map.get(complement), i];
      }
      map.set(arr[i], i);
    }
  },
  /* solution 1*/
  VowelConsonants(s) {
    const userArray = [...s];
    const result = [];

    const newArray = userArray.reduce(
      (target, item) => {
        switch (item) {
          case "a":
          case "e":
          case "i":
          case "o":
          case "u":
            target[0].push(item);
            break;
          default:
            target[1].push(item);
            break;
        }

        return target;
      },
      [[], []]
    );
    console.log("newArray:", newArray);
    newArray.reduce((target, item) => {
      target.push(
        item.reduce((target, item) => {
          result.push(item);

          return target;
        }, [])
      );
      return target;
    }, []);

    result.map((item) => console.log(item));
  },
  /* Solution 2  */
  VowelConsonants1(s) {
    const vowel = ["a", "e", "i", "o", "u"];
    let { vowels, consonants } = (s.split("") || []).reduce(
      (target, item) => {
        target[vowel.includes(item) ? "vowels" : "consonants"].push(item);

        return target;
      },
      { vowels: [], consonants: [] }
    );

    vowels.concat(consonants).forEach((item) => {
      console.log(item);
    });
  },
  /* Solution 3 */
  VowelConsonants2(s) {
    const userArray = [...s];
    const result = [];

    const newArray = userArray.reduce(
      (target, item) => {
        switch (item) {
          case "a":
          case "e":
          case "i":
          case "o":
          case "u":
            target["vowels"].push(item);
            break;

          default:
            target["consonants"].push(item);
            break;
        }
        return target;
      },
      { vowels: [], consonants: [] }
    );

    result = [...newArray["vowels"], ...newArray["consonants"]].map((item) =>
      console.log(item)
    );
  },
  Regax(s) {
    // Declare a RegExp object variable named 're'
    // It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
    let re = /^([aieou]).+\1$/g;
    console.log(re.test(s));
  },
  Regax1(s) {
    // Declare a RegExp object variable named 're'
    // It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.',
    // followed by one or more letters.
    let re = /^(Mr|Mrs|Ms|Dr|Er)(\.)([a-zA-Z])+$/g;
    console.log(re.test(s));
  },
  /*  */
  trycatch(str) {
    if (typeof str === "string") {
      console.log(str.split("").reverse().join(""));
    } else {
      console.log("str.split is not a funtion" + "\n" + str);
    }
  },
  /*  */
  Throw(num) {
    if (num === 0) {
      throw Error("Zero Error");
    }
    if (num < 0) {
      throw Error("Negative Error");
    }
    return "YES";
  },
  /**
   * LinkList Node Common Function
   * @param val
   * @param next
   */

  ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  },

  /**
   * @details find the longest substring without repeating the charater
   * @itsamanverma
   * @param string
   */
  longestSubString(str) {
    try {
      let charSet = new Set();

      let s = 0;
      let e = 0;
      let n = str.length;
      let max = 0;
      while (e < n) {
        if (!charSet.has(str[e])) {
          charSet.add(str[e]);
          max = Math.max(charSet.size, max);
          e++;
        } else {
          charSet.delete(str[s]);
          s++;
        }
      }
      return max;
    } catch (error) {
      throw error;
    }
  },
  longestSubString1(str) {
    try {
      let charSet = new Set();
      let s = 0;
      let e = 0;
      let n = str.length;
      let max = 0;
      let longestSubstring = "";

      while (e < n) {
        if (!charSet.has(str[e])) {
          charSet.add(str[e]);
          if (charSet.size > max) {
            max = charSet.size;
            longestSubstring = str.substring(s, e + 1);
          }
          e++;
        } else {
          charSet.delete(str[s]);
          s++;
        }
      }

      return { length: max, substring: longestSubstring };
    } catch (error) {
      throw error;
    }
  },

  /**
   * @param arr1
   * @param arr2
   * @itsamanverma
   * @function findMedianOfTwoSortedArray
   */
  findMedianOfTwoSortedArray(arr1, arr2) {
    try {
      let sortedArray;
      if (arr1.length >= 1 && arr2.length >= 1) {
        sortedArray = [...arr1, ...arr2];
      } else {
        sortedArray = arr1.length === 0 ? [...arr2] : [...arr1];
      }

      sortedArray.sort((a, b) => a - b); //  Sort the array in ascending order
      const length = sortedArray.length; //  Length of the combined array

      if (length % 2 === 1) {
        return sortedArray[Math.floor(length / 2)];
      } else {
        const midIndex = length / 2;
        return (sortedArray[midIndex - 1] + sortedArray[midIndex]) / 2;
      }
    } catch (error) {
      throw error;
    }
  },

  /**
   * @param {s, left, right}
   * @itsamanverma
   * @Author AMAN VERMA
   * @function expandFromCenter
   */
  expandFromCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.slice(left + 1, right);
  },

  /**
   * @param {str}
   * @itsamanverma
   * @function longestPalindromicSubStringUsingExpandAroundCenter
   * @algorithm 1 Implementation of Manacher's Algorithm to find Longest Palindromic Substring from a given string
   * @algorithm 2 Implementation of Expand Around Center Algorithm to Find Longest Palindrome String (take each character in the given string to be the midpoint of a palindrome and extend in both directions to discover the longest palindrome possible)
   */
  longestPalindromicSubStringUsingExpandFromCenter(str) {
    try {
      if (str.length <= 1) {
        return str;
      }

      let longestPalindrome = "";

      for (let i = 0; i < str.length; i++) {
        const palindrome1 = this.expandFromCenter(str, i, i); // Odd length palindrome
        const palindrome2 = this.expandFromCenter(str, i, i + 1); // Even length palindrome
        const currentLongest =
          palindrome1.length > palindrome2.length ? palindrome1 : palindrome2;

        if (currentLongest.length > longestPalindrome.length) {
          longestPalindrome = currentLongest;
        }
      }

      return longestPalindrome;
    } catch (error) {
      throw error;
    }
  },

  /**
   * @param {str}
   * @itsamanverma
   * @function longestPalindromicSubStringUsingBruteForce
   * @algorithhm Brute Force Algorithm to find Longest Palindrome Substring
   * @TimeComplexity O(n power 3)
   */
  longestPalindromicSubStringUsingBruteForce(str) {
    try {
      const n = str.length;
      let longestSubstring = "";
      for (let i = 0; i < n; i++) {
        for (let j = i + 1; j <= n; j++) {
          const substring = str.slice(i, j);
          if (
            this.isPalindrome(substring) &&
            substring.length > longestSubstring.length
          ) {
            longestSubstring = substring;
          }
        }
      }
      return longestSubstring;
    } catch (error) {
      throw error;
    }
  },

  /**
   *
   * @param {*} str
   * @returns boolean
   */
  isPalindrome(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return false;
      }
    }
    return true;
  },

  /**
   * @params str
   * @return  stringTo32bit
   */
  stringTo32BitInteger(s) {
    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);

    let i = 0,
      sign = 1,
      result = 0;
 
    // 1. Skip leading whitespaces
    while (s[i] === " ") i++;

    // 2. Handle optional sign
    if (s[i] === "+" || s[i] === "-") {
      sign = s[i] === "-" ? -1 : 1;
      i++;
    }

    // 3. Read digits and build the result
    while (i < s.length && s[i] >= "0" && s[i] <= "9") {
      const digit = s.charCodeAt(i) - 48;

      // 4. Clamp if overflow is about to happen
      if (
        result > Math.floor(INT_MAX / 10) ||
        (result === Math.floor(INT_MAX / 10) && digit > INT_MAX % 10)
      ) {
        return sign === 1 ? INT_MAX : INT_MIN;
      }

      result = result * 10 + digit;
      i++;
    }

    return result * sign;
  },
};
