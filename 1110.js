/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function (root, to_delete) {
  let roots = [];
  const toDeleteSet = new Set(to_delete);

  const traverse = node => {
    if (node == null) {
      return node;
    }
    if (node.left)
      node.left = traverse(node.left)
    if (node.right)
      node.right = traverse(node.right)

    if (toDeleteSet.has(node.val)) {
      if (node.left)
      roots.push(node.left)
    if (node.right)
      roots.push(node.right)

      return null;
    }

  }

  if (!toDeleteSet.has(root)) {
    roots.push(root);
  }
  traverse(root);

  return roots;
};
