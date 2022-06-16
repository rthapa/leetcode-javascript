/**
 * 
 * Space complexity = O(1)
 * Time complexity = O(n)
 * Floyd's Tortoise and Hare technique
 */
function hasCycle(head) {
  let fast = head;
  let slow = head;
  
  while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
      if (fast == slow) return true;
  }
  
  return false;
};

/**
 * 
 * Space complexity = O(n)
 * Time complexity = O(n2)
 */

/*
function hasCycle(head) {
    const visitedNode = [];
  
    let i = 0;
    let hasCycle = false;
    while (head.next && !hasCycle) {
        visitedNode.push(head.val);
        if (visitedNode.includes(head.val)) {
            hasCycle = true;
        }
    }
  
    return hasCycle;
};
*/
