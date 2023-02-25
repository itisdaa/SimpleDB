//need to add functionality to add, update or remove a column
class table {
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
    if(!(getIndex >= 0 && getIndex < this[Object.keys(this)[0]].length)) {
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
      for (let index in key) {
        if (key[index] == string) {
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
    for (i = 0; i < columnArray.length; i++) {
        for (j = 0; j < columnArray.length - i -1 ; j++) {
            if (sortFunction(j, j+1)) {
                  // swap the two entreies
                  let temp = columnArray[j];
                  columnArray[j] = columnArray[j + 1];
                  columnArray[j + 1] = temp;
                  temp = indexRange[j];
                  indexRange[j] = indexRange[j+1];
                  indexRange[j+1] = temp;
                  temp = null;
            };
        }
    }
    return {index:indexRange, sortedColumnArray: columnArray};
  };
  static sortByIndex(columnArray, indexArray) {
    if(Math.max(...indexArray) != columnArray.length) {
      return [];
    }
    let sortedColumnArray = [];
    indexArray.forEach((element) => {
        sortedColumnArray.push(columnArray[index]);
    });
    return sortedColumnArray;
  }
  static isMember(string, array) {
    let memberArray = [];
    for (let index in array) {
      if(string == array[index]) {
        memberArray.push(1);
      } else {
        memberArray.push(0);
      }
    }
    return memberArray;
  };
};
//module.exports = {table};
