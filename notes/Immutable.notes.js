// Неизменность (Immutability)
{
    console.log("// Неизменность (Immutability)");
    console.log("-----------------");

    {
        const a = [1, 2, 3];
        const b = a;
        console.log(a === b); // true

    
        b.push(4);
        console.log(a); // [ 1, 2, 3, 4 ]
    }
    {
        const push = (arr, item) => {
            const newArr = [...arr];
            newArr.push(item);
            return newArr;
        }

        const a = [1, 2, 3];
        const b = push(a, 4);
        console.log(a); // [ 1, 2, 3 ]
        console.log(b); // [ 1, 2, 3, 4 ]

    }

    {
        const a = { name: "Alex" };
        const b = a;
        
        console.log(a === b); // true
    
        b.name = "Julia";
        console.log(a.name); // Julia        
    }

    {
        const setName = (obj, name) => {
            const newObj = {...obj};
            newObj.name = name;
            return newObj;
        }
        const a = { name: "Alex" };
        const b = setName(a, "Julia");
        
        console.log(a);
        console.log(b);
    }

}


// Чистые функции
{

    // Использование глобального состояния
    {
        const COST_OF_ITEM = 250;

        const totalPrice = quantity => COST_OF_ITEM * quantity;

        console.log(totalPrice(2)); // 500
        console.log(totalPrice(2)); // 500
    }

    // Содержит Math.random или запросы на сервер
    {
        const generateID = () => Math.floor(Math.random() * 10000);

        console.log(generateID());
        console.log(generateID());
        console.log(generateID());
    }

    // Изменяет состояние приложения
    {
        let id = 0;

        const createPersone = name => ({
            id: ++id,
            name
        });

        console.log(createPersone("Alex"));
        console.log(createPersone("Julia"));
        console.log(id);
    }

    // Содержит побочный эффект “внешнего мира”
    {
        const logger = msg => {
            console.log(msg);
        };
          
        logger("Всем привет!");
    }

    // Мутирует объект
    {
        console.log("// Чистые функции");
        console.log("-----------------");
        const arr = [1, 2, 3];
        
        // Функция с побочным эффектом, изменяет массив вне функции
        const pushMutate = (arr, item) => {
            arr.push(item);
            return arr;
        }
        
        // Функция с без побочного эффекта, не изменяет массив, а возвращает новый
        const pushPure = (arr, item) => {
            const newArr = [...arr];
            newArr.push(item);
            return newArr;
        }
        
        console.log(pushPure(arr, 4));
        console.log(arr);
        console.log(pushMutate(arr, 4));
        console.log(arr);
    }
}


// Запоминание (memoization)
{
    const sumWithClosure = () => {
        const cache = {};
        return (a, b) => {
            const key = `${a};${b}`;
            if (!(key in cache)) {
                console.log('симуляция длительного вычисления');
                cache[key] = a + b;
            }    
            return cache[key];
        }
    }

    const sum = sumWithClosure();
}


// Карринг
{
    const multiplySimple = (a, b, c) => a * b * c;
    console.log(multiplySimple(1, 2, 3)); // 6
    
    const multiply = a => b => c => a * b * c;
    console.log(multiply(1)(2)(3)); // 6
}


// Частичное применение
{
    // карри
    {
        const getFromAPI = baseURL => endpoint => cb => {
            fetch(`${baseURL}${endpoint}`)
                .then(res => res.json())
                .then(data => cb(data))
                .catch(err => console.error(err.message));
        }
        
        const getGithub = getFromAPI("https://api.github.com");
    
        const getGithubUsers = getGithub("/users");
        const getGithubRepos = getGithub("/repositories");
    
        // getGithubUsers(console.log);
        // getGithubRepos(console.log);
    }

    // bind
    {
        const getFromAPI = (baseURL, endpoint, cb) => {
            fetch(`${baseURL}${endpoint}`)
                .then(res => res.json())
                .then(data => cb(data))
                .catch(err => console.error(err.message));
        }

        const getGithub = getFromAPI.bind(null, "https://api.github.com");
    
        const getGithubUsers = getGithub.bind(null, "/users");
        const getGithubRepos = getGithub.bind(null, "/repositories");

        // getGithubUsers(console.log);
        // getGithubRepos(console.log);
    }

}


// Композиция
{
    const upperCase = str => str.toUpperCase();
    const exclaim = str => `${str}!`;
    const repeat = str => `${str} `.repeat(3);

    {
        console.log(repeat(exclaim(upperCase("I love coding"))));
    }

    {
        const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

        const getFormatString = compose(
            repeat,
            exclaim,
            upperCase,
        );

        const formattedString = getFormatString("I love coding");

        console.log(formattedString);
    }

    {
        const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);

        const getFormatString = pipe(
            upperCase,
            exclaim,
            repeat,
        );

        const formattedString = getFormatString("I love coding");

        console.log(formattedString);
    }
}


// Правильный порядок аргументов
{
    // Неправильный порядок аргументов
    {
        const map = array => cb => array.map(cb);

        const arr = [1, 2, 3, 4, 5];
        const double = n => n * 2;

        const withArr = map(arr);

        console.log(withArr(double));
        console.log(withArr(n => n * 3));
    }

    // Правильный порядок аргументов
    {
        const map = cb => array => array.map(cb);

        const arr = [1, 2, 3, 4, 5];
        const double = n => n * 2;

        const withDouble = map(double);

        console.log(withDouble(arr));
        console.log(withDouble([2, 4, 6, 8, 10]));
    }

    // 
    {
        const prop = key => obj => obj[key];
        
        const getName = prop("name");
        
        const person = { name: "Alex" };
        
        getName(person);
    }

    {
        const map = cb => array => array.map(cb);

        const prop = key => obj => obj[key];

        const getName = prop("name");

        const people = [
            { name: "Alex" },
            { name: "Julia" },
            { name: "Leo" },
            { name: "Den" }
        ];

        console.log(map(getName)(people)); // ["Alex", "Julia", "Leo", "Den"]
    }
}


// Отладка функциональных композиций
{
    const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);
    const lowerCase = str => str.toLowerCase();
    const join = separator => xs => xs.join(separator);
    const map = fn => xs => xs.map(fn);
    const split = pattern => str => str.split(pattern);

    const bookTitles = [
        "JavaScript The Good Parts",
        "You Don’t Know JS",
        "Eloquent JavaScript"
    ];

    {
        // const slugify = pipe(
        //     map(split(" ")),
        //     map(lowerCase),
        //     join("-"),
        // );
    
        // const slugs = slugify(bookTitles);
    
        // console.log(slugs);        
    }

    {
        const trace = msg => x => (console.log(msg, x), x);

        const slugify = pipe(
            map(lowerCase),
            map(split(" ")),
            map(join("-")),
        );
    }



    

}