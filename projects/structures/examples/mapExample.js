const users = [
    { name: "Alex" },
    { name: "Bob" },
    { name: "Tom" },
];

const towns = [
    { name: "Minsk" },
    { name: "Moscow" },
];


const object = {};
object[users[0]] = towns[0];
object[users[1]] = towns[0];
object[users[2]] = towns[1];
console.log(object[users[1]]);


const map = new Map();
map.set(users[0], towns[0]);
map.set(users[1], towns[0]);
map.set(users[2], towns[1]);

console.log(map.get(users[1]));