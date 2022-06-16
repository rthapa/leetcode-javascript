/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
  let slow = head;
  let fast = head;
  
  let hasCycle = false;
  while (fast != null && fast.next !== null) {
      
      slow = slow.next;
      fast = fast.next.next
      
      if (fast == slow) {
          hasCycle = true;
          break;
      }
  }
  
  if (!hasCycle) {
      return null;
  }
  
  slow = head;
  
  while (fast != slow) {
      slow = slow.next;
      fast = fast.next;
  }
  
  return fast;
};