/**********************************************************************************
 *  Execution     :  1. default node  cmd> node addTwoNumber.js
 *                   2. if nodemon installed  cmd> nodenom addTwoNumber.js
 *
 *  Purpose       :  You are given two non-empty linked lists representing two non-negative integers.
 *                   The digits are stored in reverse order, and each of their nodes contains a single digit. 
 *                   Add the two numbers and return the sum as a linked list.
 *                   You may assume the two numbers do not contain any leading zero, except the number 0 itself. 
 *
 *  @description
 *
 *  @file         : addTwoNumber.js
 *  @overview     : implementation of addition of two non-negative linklist
 *  @module       : This is optional if expeclictly its an npm or local package.
 *  @author       : AMAN VERMA <amanvermame786.gmail.com>
 *  @version      : 1.0
 *  @since        : 20-11-2022
 *
 **********************************************************************************/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var carry = 0;
    var sum = 0;
    var head = new ListNode(0);
    var now = head;
    var a = l1;
    var b = l2;
    while (a !== null || b !== null) {
      sum = (a ? a.val : 0) + (b ? b.val : 0) + carry;
      carry = Math.floor(sum / 10);
      now.next = new ListNode(sum % 10);
      now = now.next;
      a = a ? a.next : null;
      b = b ? b.next : null;
    }
    if (carry) now.next = new ListNode(carry);
    return head.next;
  };

