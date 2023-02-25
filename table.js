module.exports = class table {
  constructor(...columns) {
    columns.forEach((column) => {
      this[column]=[];
    });
  };
  add(entry) {
    if (entry.length != Object.keys(this).length) {
      console.error("Size of Entry must be equal to Table");
      return false;
    }
    for (var index in entry) {
      this[Object.keys(this)[index]].push(entry[index]);
    }
    return true;
  };
  remove(removeIndex) {
    if(!(removeIndex >= 0 && removeIndex < this[Object.keys(this)[0]].length)) {
      console.error("Invalid Index");
      return false;
    };
    for (var index in Object.keys(this)) {
      this[Object.keys(this)[index]].splice(removeIndex,1);
    };
    return true;
  };
  update(column, index, entry) {
    //entry is not an array, a string or number
    if(!(index >= 0 && index < this[Object.keys(this)[0]].length)) {
      console.error("Invalid Index");
      return false;
    }
    this[column][index] = entry;
    return true;
  };
  get(getIndex) {
    //input as string
    if(!(getIndex >= 0 && getIndex < this[Object.keys(this)[0]].length)) {
      console.error("Invalid Index");
      return [];
    }
    let entry = [];
    for (var index in Object.keys(this)) {
      entry.push(this[Object.keys(this)[index]][getIndex]);
    }
    return entry;
  };
  search(string) {
    var resultArray = [];
    for(let key in this) {
      for (let index in this[key]) {
        if (this[key][index] == string) {
          resultArray.push({column: key, cellIndex:index});
        }
      }
    };
    return resultArray;
  };
  static query(columnArray, conditionFunction) {
    //return the entries (array) in column that statisfy conditionFunction
    //conditionFunction must return boleen
    //conditionFunction is security vunerability
    let queryResultArray = [];
    columnArray.forEach((entry) => {
      if(conditionFunction(entry)) {
        queryResultArray.push(entry);
      }
    });
    return queryResultArray;
  };
  static sortColumn(columnArray, sortFunction) {
    //crete an index range for reference to be used on other columns
    var arrayLength = columnArray.length
    const indexRange = Array.from({ arrayLength }, (_, i) => 0 + i);
    //bubble sort
    for (let i = 0; i < columnArray.length; i++) {
        for (let j = 0; j < columnArray.length - i -1 ; j++) {
            if (sortFunction(j, j+1)) {
                  // swap the two entreies
                  let temp = columnArray[j
