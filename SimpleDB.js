
class server {
  constructor(port, onConnectCallback) {
    const http = require('http');
    this.port = port;
    this.onConnectCallback = onConnectCallback;
    this.http = http;
  }
  start(port, onConnectCallback) {
    this.http.createServer(onConnectCallback).listen(port, () => console.log(`Server is running and port is ${PORT}`));
  };

  close(onConnectCallback) {
    this.http.createServer(onConnectCallback).close();
  };
};

export default class SimpleDB {

  constructor(name) {
    console.log("Intializing SimpleDB...\n");
    var fs = require('fs'); //file handling
    let dbArray = [];
    if(fs.existsSync(`${name}.csv`)) {
      console.log(`Reading the file ${name}.csv \n`);
      let content = fs.readFileSync(`${name}.csv`, 'utf8');
      console.log("Parsing...\n");
      let rows = content.split('\n');
      for (let i in rows) {
          dbArray.push(rows[i].split(','));
      }
      if (dbArray[dbArray.length - 1].length <= 1) {
          dbArray.pop();
      }
    } else {
      console.log(`Creating the file ${name}.csv \n`);
      fs.writeFileSync(`${name}.csv`,"", 'utf8');
    };
    this.db = dbArray;
    this.type = 'csv';
  };

  connect(port) {
    his.server = new server(port,this.onConnect);
    this.server.start();
  };

  disconnect() {
    this.server.close();
  }

  onConnect() {
    const url = require('node:url'); // to parse url
    let {vale} = url.parse(req.url);
    const pram = new URLSearchParams(value);
    const operation = pram.getAll('opr');
    let oprStr = operation.toString();
    switch(oprStr) {
        case "ADD":
            let i = 1;
            let arr = []
            while (i <= columnLength) {
              arr.push(pram.getAll(`var${i}`))
              i++;
            }
            if(add(arr)){
                res.end(true);
            }
            break;
        case "DEL":
            let j = pram.getAll('index');
            res.end(remove(j));
            break;
        case "SER":
            let Str = ''
            Str = pram.getAll('str')
            res.end(search(Str))
            break;
    }
  };

  updateFile() {
    let str = '';
    for (let a in this.db) {
        for (let b in this.db[a]) {
            if (b == (this.db[a].length - 1)) {
                str = str + this.db[a][b] + '\r\n';
            }
            else {
                str = str + this.db[a][b] + ",";
            }
        }
    }
    fs.writeFileSync(`${name}.csv`, str);
  };

  add(entry) {
    if(entry.length === this.db[0].length) {
        this.db.push(entry);
        updateFile();
        return true;
    } else {
        console.error(` Invalid length. Must be of length ${this.db[0].length}`)
        return false;
    }
  };

  remove(index) {
    if(index >= 0 && index <= this.db.length -1 ){
        this.db.splice(index,1);
        updateFile();
        console.log(`deleted row ${index}`);
        return true;
    } else {
        console.error(`invalid index`)
        return false;
    }
  };

  get(index) {
    if (index >= 0 && index <= this.db.length -1){

    } else {
        return this.db[index];
    }
  };

  search(queryString) {
    let entry = []
    for (let a in this.db) {
        for (let b in this.db[a]){
          if(this.db[a][b] === queryString){
              entry.push(a);
          }
        }
    };
    return entry;
  };
};
