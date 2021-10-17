const GetImportance = (employees, id) => {
  const employeeMap = new Map();

  for ({ id, subordinates, importance } of employees) {
    employeeMap.set(id, { subordinates, importance });
  }

  const dfs = (id) => {
    let sum = employeeMap.get(id).importance;

    for (sub of employeeMap.get(id).subordinates) {
      sum += dfs(sub);
    }

    return sum;
  };

  return dfs(id);
};

const input = [
  [1, 5, [2, 3]],
  [2, 3, []],
  [3, 3, []],
];
