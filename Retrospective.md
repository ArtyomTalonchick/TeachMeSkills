# Типы данных

### Примитивы:
- `undefined` - **Неопределённый тип** - *aвтоматически присваивается переменным, которые были только объявлены или аргументам, для которых не были установлены значения*
- `boolean` - **Логический тип**: `true` или `false`
- `number` - **Число** - *числовой тип данных в формате 64-битного числа двойной точности с плавающей запятой*
- `string` - **Строка** - *собой последовательность символов*
- `bigint` - **числовой тип данных** - *может представлять данные в формате длинной арифметики* : `2n`, `9007199254740992n` 
- `symbol` - **примитив ES6** - *экземпляры уникальны и неизменяемы*

### Объект:
- `object`
- `null`
- `function`


# Переменные

### Способы объявления:
- `let`
- `const`
- `var`


# Операторы

[Выражения и операторы](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_Operators)


# Приведение типов

<style type="text/css">
details, summary { font-style: italic; color: #c9ae76 }
details:hover { cursor: pointer }
</style>

<details>
    <summary>
        true + false
    </summary>
    1
</details>
<details>
    <summary>
        12 / "6"
    </summary>
    2
</details>
<details>
    <summary>
        "number" + 15 + 3
    </summary>
    "number153"
</details>
<details>
    <summary>
        15 + 3 + "number"
    </summary>
    "18number"
</details>
<details>
    <summary>
        [1] > null
    </summary>
    true
</details>
<details>
    <summary>
        [1] == 1
    </summary>
    true
</details>
<details>
    <summary>
        [1] === 1
    </summary>
    false
</details>
<details>
    <summary>
        [1] == [1]
    </summary>
    false
</details>
<details>
    <summary>
        "foo" + "bar"
    </summary>
    "foobar"
</details>
<details>
    <summary>
        "foo" + + "bar"
    </summary>
    "fooNaN"
</details>
<details>
    <summary>
        "true" == true
    </summary>
    false
</details>
<details>
    <summary>
        !!"false" == !!"true"
    </summary>
    true
</details>
<details>
    <summary>
        null == ""
    </summary>
    false
</details>
<details>
    <summary>
        ["x"] == "x"
    </summary>
    true
</details>
<details>
    <summary>
        [] + null + 1
    </summary>
    "null1"
</details>
<details>
    <summary>
        0 || "0" && {}
    </summary>
    {}
</details>
<details>
    <summary>
        {}+[]+{}+[1]
    </summary>
    "0[object Object]1"
</details>


[Неявное преобразование типов](https://habr.com/ru/company/ruvds/blog/347866/)

# Циклы

- `for...of` - проходит через **значения** итерируемых объектов (`Array`, `Map`, `Set`...)

- `for...in` - проходит через перечисляемые свойства объекта **в произвольном порядке**


# Массивы

### Цикл vs forEach:
1. Преждевременное прерываие работы
1. Читаемость кода
1. Меньше ошибок на единицу
1. Скорость

### Методы массива:
- `forEach`, `map`, `reduce`, `push`, `pop`, `shift`, `unshift`, `indexOf`, `splice`, `slice`

[Операции над массивом](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array)


### Функции
- Способы объявления функции
- Стрелочные функции

# Storage
### localStorage, sessionStorage
- `setItem`, `getItem`, `removeItem`, `clear`
### indexedDB

# Асинхронность
### Синхронный и асинхронный код
### Promise
### Async/await
### [Event loop](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)


# Взаимодействие с сетью
- Ajax
- Web-сокеты
- REST