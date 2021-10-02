var TimeMap = function () {
  this.map = new Map();
};

TimeMap.prototype.set = function (key, value, timestamp) {
  if (this.map.has(key)) {
    this.map.set(key, [...this.map.get(key), [value, timestamp]]);
  } else {
    this.map.set(key, [value, timestamp]);
  }
};

TimeMap.prototype.get = function (key, timestamp) {
  let values;

  if (this.map.has(key)) {
    values = this.map.get(key);

    if (values.length > 1) {
      for (let i = values.length; i >= 0; i--) {
        if (values[i][1] >= timestamp) {
          return values[i][0];
        }
      }
    }
    return values[0][0];
  }
};
