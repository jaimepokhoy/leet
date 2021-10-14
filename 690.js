const getImportance = (employees, id) => {
  const employeeMap = new Map();

  for ({ id, importance, subordinates } of employees) {
    employeeMap.set(id, { importance, subordinates });
  }

  function dfs(id) {
    let sum = employeeMap.get(id).importance;
    for (sub of employeeMap.get(id).subordinates) {
      sum += dfs(sub);
    }

    return sum;
  }

  dfs(id);
};

const input = [
  { id: 1, importance: 5, subordinates: [2, 3] },
  { id: 2, importance: 3, subordinates: [] },
  { id: 3, importance: 3, subordinates: [] },
];

console.log(getImportance(input, 1));
