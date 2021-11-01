# Tests. Homework.

### **1. Поиск гласных**
Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую массив гласных, которые содержаться в строке

Пример ввода 
```
const string = "AaBaaaai";
```

Пример вывода 
```
const string = [a, i];
```


### **2. Хранение времени получения сообщений**
Реализовать методы:
- `addMessage(message)` – добавляет сообщение с текущим временем
- `getTimeOfMessage(message)` – возвращает время получения сообщения

Пример использования методов:
```
const messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];


addMessage(messages[0]);
setTimeout(() => addMessage(messages[1]), 1000);
setTimeout(() => addMessage(messages[2]), 2000);

setTimeout() => {
    messages.splice(1, 1);
    messages.forEach(message => console.log(getTimeOfMessage(messages)));
}, 2100);

```

### **3. Анаграммы**
**[Анаграммы](https://ru.wikipedia.org/wiki/%D0%90%D0%BD%D0%B0%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0)** – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.

Нужно написать функцию, принимающую массив строк в качестве аргумента и объединяет элементы являющиеся анаграммами.

Пример входных данных:
```
["tom", "xyz", "mot", "xel", "zXy", "yxz"]
```
Пример выходных данных:
```
[["tom", "mot"], ["xyz", "zXy", "yxz"], ["xel"]]
```