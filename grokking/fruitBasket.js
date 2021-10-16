const fruitBasket = (fruits) => {
  let map = new Map();
  let results = [];

  for (let i = 0; i < fruits.length; i++) {
    if (map.has(fruits[i])) {
      map.set(fruits[i], map.get(fruits[i]) + 1);
    } else {
      if (map.size == 2) {
        results.push([...map.values()].reduce((acc, num) => acc + num, 0));

        map.delete(map.keys().next().value);
        map.set(fruits[i], 1);
      } else {
        map.set(fruits[i], 1);
      }
    }
  }

  results.push([...map.values()].reduce((acc, num) => acc + num, 0));

  return Math.max(...results);
};

const fruits = ["A", "B", "C", "A", "C"];

console.log(fruitBasket(fruits));
