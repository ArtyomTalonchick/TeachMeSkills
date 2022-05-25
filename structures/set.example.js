let values = ["Tom", "Bob", "Alex", "Alex",
  "Tom", "Alex", "Tom", "Tom", "Bob"
];

// const myUnique = (array) => {
//     const set = new Set();
//     array.forEach(element => set.add(element));
//     return set.values();
// }
const myUnique = (array) => [...new Set(array)];

console.log(myUnique(values));
