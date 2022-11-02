var isPalindrome = function (head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let next;
    let prev = slow;
    let curr = slow.next;
    prev.next = null;

    while (curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    while (prev) {
        if (head.val !== prev.val) return false;
        head = head.next;
        prev = prev.next;
    }

    return true;
};
