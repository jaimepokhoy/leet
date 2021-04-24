const GetImportance = (employees, id) => {
  let subordinates = [];
  let sum = 0;
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].id === id || subordinates.includes(employees[i].id)) {
      // sum = sum + employees[i].importance;
      subordinates = [...subordinates, ...employees[i].subordinates];
    }
  }

  for (let x = 0; x < employees.length; x++) {
    if (employees[x].id === id || subordinates.includes(employees[x].id)) {
      sum = sum + employees[x].importance;
    }
  }

  return sum;
};

const input = [
  [1, 5, [2, 3]],
  [2, 3, []],
  [3, 3, []],
];
