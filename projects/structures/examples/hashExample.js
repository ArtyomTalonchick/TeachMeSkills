const HashTable = require("../structures/hashTable");

const _data = require("./usersMock");
let data1 = [], data2 = [];
for (let i = 0; i < 100; i ++) {
    data1 = [...data1, ..._data];
    data2 = [...data2, ..._data];
}


let time = Date.now();
const hashFunction = (user) => user.first_name.toLowerCase() + user.last_name.toLowerCase();
const usersTable = new HashTable(hashFunction);
data1.forEach(user => usersTable.add(user, user));
console.log(Date.now() - time);

console.log("----------------");
const searchUser = {"first_name":"Nathanael","last_name":"Strevens"};
const test = (params) => {
    let time = Date.now();
    let result = usersTable.lookup(params);
    console.log(Date.now() - time);
    // console.log(result);
    
    console.log("----------------");
    
    time = Date.now();
    result = data2.filter(user => hashFunction(user) === hashFunction(params));
    console.log(Date.now() - time);
    // console.log(result);

}

test(searchUser);
