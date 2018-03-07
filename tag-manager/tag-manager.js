function TagManager() {
  this.tags = [];
}

TagManager.prototype.add = function add(tag) {
  let wasAdded = false;
  if (tag != undefined && !this.contains(tag)) {
    this.tags.push(tag);
    wasAdded = true;
  }
  return wasAdded;
}

TagManager.prototype.remove = function remove(tag) {
  let removed = undefined;
  let index = this.tags.indexOf(tag);
  if (index != -1) {
    removed = this.tags.splice(index, 1);
  }
  return removed;
}

TagManager.prototype.contains = function contains(tag) {
  return this.tags.indexOf(tag) != -1;
}

TagManager.prototype.count = function size() {
  return this.tags.length;
}

TagManager.prototype.list = function size() {
  return this.tags.sort();
}

module.exports = TagManager;
