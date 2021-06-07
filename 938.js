const rangeSumBST = (root, low, high) => {
  if (!root) return 0;
  let sum = 0;
  if (root.val >= low && root.val <= high) sum = root.val;
  return (
    sum +
    (root.val > low ? rangeSumBST(root.left, low, high) : 0) +
    (root.val < high ? rangeSumBST(root.right, low, high) : 0)
  );
};

const root = [10, 5, 15, 3, 7, null, 18];
const low = 7;
const high = 15;

console.log(rangeSumBST(root, low, high));
