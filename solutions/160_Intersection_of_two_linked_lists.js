// Time O(n + m)
// Space O(1)
var getIntersectionNode = function(headA, headB) {
  let p1 = headA;
  let p2 = headB;
  
  while (p1 != p2) {
      p1 = p1 ? p1.next : headB;
      p2 = p2 ? p2.next : headA;
  }
  
  return p1;
};

// Time O(n x m)
// Space O(1)
// var getIntersectionNode = function(headA, headB) {
//     while (headA) {
//         let listBCurr = headB;
//         while (listBCurr) {
//             if (headA == listBCurr) {
//                 return headA
//             }
//             listBCurr = listBCurr.next;
//         }
//         headA = headA.next;
//     }  
  
//     return null;
// };

