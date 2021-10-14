const findLeaves = (root) => {
  const ans = [];

  const dfs = (node) => {
    if (!node) return 0;

    const depth = Math.max(dfs(node.left), dfs(node.right));

    ans[depth] = ans[depth] || [];
    ans[depth].push(node.val);

    return depth + 1;
  };

  dfs(root);

  return ans;
};
