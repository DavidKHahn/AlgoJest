/*

 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 
Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL

Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?

*/

// Iterative Solution:
// const reverseList = function(head) {
//   var tmp = null;
//   var newHead = null;
//   while (!head == null) {
//     tmp = head;
//     head = head.next;
//     tmp.next = newHead;
//     newHead = tmp;
//   }
//   return newHead;
// };

// Recursive Solution:
const reverseList = function(head) {
  return head ? reverse(head, null) : head;
};

function reverse(node, previous) {
  let newHead = node;

  // recursive call to tail
  if (node.next) newHead = reverse(node.next, node);
  // reverse from tail all the way up to the head
  node.next = previous;

  return newHead;
}
