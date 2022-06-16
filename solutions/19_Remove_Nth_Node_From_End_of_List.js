/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

// Time = O(n + n) = O(n)
// Space = O(1)
var removeNthFromEnd = function(head, n) {
  // find length
  let len = 0;
  let curr = head;
  while (curr) {
      curr = curr.next;
      len++;
  }
  
  // find node to remove
  let indexBeforeN = (len - n) - 1;
  if (len == n) return head.next;

  
  let j = 0;
  curr = head;
  while (curr) {
      if (j == indexBeforeN) {
          curr.next = curr.next.next;
      }
      
      curr = curr.next;
      j++;
  }
  
  return head;
};
