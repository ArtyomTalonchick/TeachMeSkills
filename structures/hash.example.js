let data = require("./data");


// Делаем больше элементов в массиве
data = [...data, ...data, ...data];
data = [...data, ...data, ...data];
data = [...data, ...data, ...data];
data = [...data, ...data, ...data];


// Создаем хэш
const hashData = {};
data.forEach(element => {
    hashData[element.id] = element;
});


const t = Date.now();
[...new Array(10000)].forEach(() => {
    const id = 943253;

    // Поиск элемента в массиве
    // const item1 = data.filter(element => element.id === id);

    // Поиск элемента в хэш таблице
    const item2 = hashData[id];
})
console.log(Date.now() - t);