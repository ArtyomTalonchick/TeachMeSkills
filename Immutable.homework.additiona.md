# Immutable. Homework. Additional

Нужно написать набор функций, и заюзать из для решения следующих тасок:

### **1. Определение email провайдера**

Имеется страка, представляющая собое email адрес пользователя, нужно вывести email провайдера

<style type="text/css">
details, summary { font-style: italic; color: #c9ae76 }
details:hover { cursor: pointer }
</style>

<details>
    <summary>
        Пример ввода
    </summary>
    
    "lmolloy0@gmail.com"

</details>

<details>
    <summary>
        Пример вывода
    </summary>
    
    "gmail.com"

</details>

### **2. Поиск email провайдеров**

Имеется массив объектов (пользовательей), нужно вывести массив email провайдеров, которые используют изеры

<details>
    <summary>
        Пример ввода
    </summary>
    
    [
        {"id":1,"first_name":"Linette","last_name":"Molloy","email":"lmolloy0@gmail.com","gender":"Male","ip_address":"210.180.83.109"},
        {"id":2,"first_name":"Skipton","last_name":"Margrie","email":"smargrie1@mail.ru","gender":"Bigender","ip_address":"84.130.226.85"},
        {"id":3,"first_name":"Clarine","last_name":"Tiebe","email":"ctiebe2@gmail.com","gender":"Polygender","ip_address":"225.228.226.150"},
        {"id":4,"first_name":"Dukie","last_name":"Beauly","email":"dbeauly3@zdnet.com","gender":"Bigender","ip_address":"231.20.227.213"},
        {"id":5,"first_name":"Candy","last_name":"Ygo","email":"cygo4@mail.ru","gender":"Polygender","ip_address":"195.177.180.178"},
        {"id":6,"first_name":"Harley","last_name":"Ginn","email":"hginn5@gmail.com","gender":"Polygender","ip_address":"234.97.176.83"},
        {"id":7,"first_name":"Ashlin","last_name":"Agdahl","email":"aagdahl6@nymag.com","gender":"Genderfluid","ip_address":"73.99.213.176"},
        {"id":8,"first_name":"Bear","last_name":"Tourne","email":"btourne7@mail.ru","gender":"Non-binary","ip_address":"182.111.69.95"},
        {"id":9,"first_name":"Aldis","last_name":"Dreelan","email":"adreelan8@apple.com","gender":"Genderfluid","ip_address":"218.146.175.229"},
        {"id":10,"first_name":"Shayne","last_name":"Cosker","email":"scosker9@apple.com","gender":"Polygender","ip_address":"102.6.251.170"},
        {"id":11,"first_name":"Kimmy","last_name":"Bockler","email":"kbocklera@odnoklassniki.ru","gender":"Agender","ip_address":"11.69.194.10"},
    ]

</details>

<details>
    <summary>
        Пример вывода
    </summary>
    
    ["gmail.com", "mail.ru", "zdnet.com", "nymag.com", "apple.com", "odnoklassniki.ru"]

</details>

### **3. URL-слаги**

Имеется массив строк, нужно каждую строку привести к нижнему регистру и заменить пробелы на дефисы

<details>
    <summary>
        Пример ввода
    </summary>
    
    [
        "JavaScript The Good Parts",
        "You Don’t Know JS",
        "Eloquent JavaScript"
    ]

</details>

<details>
    <summary>
        Пример вывода
    </summary>
    
     [
        "javascript-the-good-parts",
        "you-don’t-know-js",
        "eloquent-javascript"
    ]

</details>

---

**Примечание.** Необходимо использовать следующие концепции *функционального программирования*:
- **Декларативный** стиль кода
- **Неизменность** (Immutability)
- **Карринг**
- **Частичное применение**
- **Композиция**