const MySet = require("../structures/set");

const myUnique = (array) => {
    const set = new MySet();
    array.forEach(item => set.add(item));
    return set.values();
};

let values = ["Tom", "Bob", "Alex", "Alex",
  "Tom", "Alex", "Tom", "Tom", "Bob"
];


console.log(myUnique(values));