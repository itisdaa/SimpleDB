//Use table.js to create database functions
//A database could have multiple tables and a table could have multiple properties
//a database must have a table and a table must have a property, entry is optional

const table = require("./table");

/* 
Basic Ops
    -Create Database
    --Create a table object with unique ID property
    --Add, Update or Remove table
    --Add, Update or Remove property of a table except unique ID property
    -Perform Querries with Logics AND and OR using single function
Advanced Ops
    -Authentication
    -Add, Update and Remove relation betweent tables or table properties
    -Predict the missing Value/Entry
*/

//Create databases with multiple tables and properties

/* 
 {
    :table objects with the name
    :methods for adding and removing a table
    :methods for quering, adding, updating or removing entries to table/s
    - another way to add, remove or update entry is by passing the path to entry and new entry
 }
*/

//checks are not implemented
module.exports = class database {
    constructor() {};

    addTable(name, ...columns) {
        this[name] = new table(...columns);
    };
    deleteTable(tableName) {
        delete this[tableName];
    };
    addEntry(tableName, entry) {
        this[tableName].add(entry);
    };
    deleteEntryByIndex(tableName, index) {
        //requires to upgrade with built in querry condition to find and delete specific entry
        this[tableName].remove(index);
    };
    updateEntryByIndex(tableName, columnName, index, newEntry) {
        this[tableName].update(columnName, index, newEntry);
    };
};