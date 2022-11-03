var reverseList = function (head) {
    if (head === null) return head;

    let next;
    let prev = head;
    let curr = head.next;
    prev.next = null;

    while (curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
};
