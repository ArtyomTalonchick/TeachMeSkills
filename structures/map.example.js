const users = [
    { name: "Alex" },
    { name: "Bob" },
    { name: "Tom" },
];

const towns = [
    { name: "Minsk" },
    { name: "Moscow" },
];

// const object = {};
// object[towns[0]] = [
//     users[0],
//     users[1],
// ];
// object[towns[1]] = [
//     users[2],
// ];
// console.log(object);

const map = new Map();
map.set(towns[0], [
    users[0],
    users[1],
]);
map.set(towns[1], [
    users[2],
]);

console.log(map.get(towns[0]));

