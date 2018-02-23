class Sorter {
  constructor() {
  this.Array = []; 
  this.comparator=(function(a,b){
      return a-b;
     });     
  }

  add(element) {
    this.Array.push(element);
  }

  at(index) {
    return this.Array[index];
  }

  get length() {
    return this.Array.length;
  }

  toArray() {
    return this.Array;
  }

  sort(indices) {
    var tmpList = [];
    indices.sort();
    var i = 0;
    while (i < indices.length) {
      tmpList.push(this.Array[indices[i]]);
      i++;
    }
    tmpList.sort(this.comparator);
    var i = 0;
    while (i < tmpList.length) {
      this.Array[indices[i]] = tmpList[i];
      i++;
    }
  }
  

  setComparator(compareFunction) {
   
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;