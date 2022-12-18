# SimpleDB
SimpleDB is an opensource JSON based database as an alternative to firestore.

## Zeroth Version
SimpleDB v0 is a CSV-based database developed by Hassaan Maqsood and Usman Shah, which accepts input via the WASWIG URL Standard.

## Usage
1. Clone/Download the file SimpleDB.js in the directory you want to use SimpleDB in.
2. use `var SimpleDB = require('./SimpleDB.js')`
3. create a SimpleDB object by `var database = new SimpleDB('myfirstsimpledb')`
4. Call the `connect(port)` method to start listening for requests.
5. Use the following methods to interact with the database:
   - `add(entry)` to add a valid array to the database.
   - `remove(index)` to delete an entry at a specific index.
   - `get(index)` to retrieve an array at a specific index.
   - `search(string)` to search the entire database for a given string and return an array of indices where the string was found.
