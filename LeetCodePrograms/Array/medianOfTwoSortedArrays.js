/**
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
 * The overall run time complexity should be O(log (m+n)).
 * Example 1:
 * Input: nums1 = [1,3], nums2 = [2]
 * Output: 2.00000
 * Explanation: merged array = [1,2,3] and median is 2.
 *
 * Example 2:
 * Input: nums1 = [1,2], nums2 = [3,4]
 * Output: 2.50000
 * Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 * @itsamanverma
 * @function  findMedianSortedArrays - Function to find the Median of two sorted arrays using Binary Search algorithm.
 * @author AMAN VERMA
 */

const utility = require("../Utility/Utility.js");
let arr1 = utility.inputreadLineArray();
let arr2 = utility.inputreadLineArray();
const userInput = utility.input();
let medianOfTwoSortedArray = () => {
  try {
    if (Array.isArray(arr1) && Array.isArray(arr2)) {
      console.log("median of sorted array:",utility.findMedianOfTwoSortedArray(arr1, arr2));
    } else {
      console.log("Enter the valid input");
    }
  } catch (error) {
    throw error;
  }
};

medianOfTwoSortedArray();
