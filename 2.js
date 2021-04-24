const addTwoNumbers = (l1, l2) => {
    let l3 = new ListNode();
    let p3 = l3;
    let digitSum = 0;

    while (l1 || l2) {
        digitSum = Math.floor(digitSum / 10);

        if (l1) {
            digitSum += l1.val;
            l1 = l1.next;
        }

        if (l2) {
            digitSum += l2.val;
            l2 = l2.next;
        }

        l3.next = new ListNode(digitSum % 10);
        l3 = l3.next;
    }

    if (Math.floor(digitSum / 10) === 1) {
        l3.next = new ListNode(1);
    }

    return p3.next;
}