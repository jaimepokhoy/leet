const isValidBST = root => {
  return helper(root);
}

const helper = (node, min, max) => {
  if (!node) {
    return true
  }

  if (node.val >= max || node.val <= min) {
    return false;
  }

  return (helper(node.right, node.val, max) && helper(node.left, min, node.val))
}