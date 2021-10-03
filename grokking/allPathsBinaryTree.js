class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const helper = (node, sum)

const find_paths = function (root, sum) {
  allPaths = [];
  
  if (root.value === sum && root.right == null && root.left == null) {
    allPaths.push
  }

  return allPaths;
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
sum = 23;
console.log(`Tree paths with sum: ${sum}: ${find_paths(root, sum)}`);
