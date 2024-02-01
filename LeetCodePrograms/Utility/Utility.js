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
};
