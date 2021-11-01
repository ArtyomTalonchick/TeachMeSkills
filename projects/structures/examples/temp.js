const input = ["tom", "xyz", "mot", "xel", "zxy", "yxz"];

const obj = {};
input.forEach(v => {
    const key = v.split("").sort().join();
    obj[key] ? obj[key].push(v) : obj[key] = [v];
})

const res = Object.values(obj);
console.log(res);
