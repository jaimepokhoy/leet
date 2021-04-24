/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.cache = [];
};

const incrementLives = cache =>
  cache.map(entry => ({ ...entry, life: entry.life + 1 }));

const reduceIt = cache => {
  cache.sort((a, b) => (b.life > a.life ? -1 : 1)).pop();
  return cache;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  let foundEntry = -1;
  this.cache = incrementLives(this.cache);

  this.cache.map(entry => {
    if (entry.key === key) {
      entry.life = 0;
      foundEntry = entry;
    }
    return entry;
  });

  return foundEntry.value || -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.get(key) > -1) {
    this.cache = this.cache.map(entry => {
      if (entry.key === key) {
        entry.value = value;
        entry.life = 0;
      }
    });
    return;
  }

  if (this.cache.length === this.capacity) {
    this.cache = reduceIt(this.cache);
  }
  this.cache = incrementLives(this.cache);
  this.cache.push({ key, value, life: 0 });
  return null;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

var obj = new LRUCache(2);
// * var param_1 = obj.get(key)
obj.put(1, 1);
obj.put(2, 2);
console.log(obj.get(1));
console.log(obj.cache);
// obj.put(3, 3);
// obj.get(2);
// obj.put(4, 4);

// console.log(obj);
