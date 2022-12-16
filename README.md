# SimpleDB
SimpleDB is an opensource alternative to firestore, based on JSON and CSV.

##Zeroth Version
SimpleDB v0 (developed by Hassaan Maqsood and Usman Shah) is based on CSV and takes input from URL WASWIG URL Standard.
In order to initialize SimpleDB, we have to create new object from Class SimpleDB passing parameters name and port.
`name` parameter would be used to store data to the csv file. For example: name = 'database' would save file database.csv.
`port` parameter is the port number where server would bind and listens too. Make sure it is a number.
After creating new SimpleDB object, call method connect to start listening to DB or just pass the parameters by calling the methods:
`add(entry)` - add a valid array into the database
`remove(index)` - given a valid index it would remove the entry from database
`get(index)` - given a valid index it would output an array
`search(queryString)` - given a string it would search for the entire database and returnt the an array of index it found the string in.

##Usage
1. Clone/Download the file SimpleDB.js in the directory you want to use SimpleDB in.
2. use `var SimpleDB = require('./SimpleDB.js')`
3. create a SimpleDB object by `var database = new SimpleDB('myfirstsimpledb')`
4. Go on as described previously 
