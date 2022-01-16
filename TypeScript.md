
### ts-node

[ts-node](https://github.com/TypeStrong/ts-node) - это механизм выполнения TypeScript для Node.js

Установка
```
npm i -g ts-node
```

Использование
```
ts-node script.ts  
```

**[Песочница](https://www.typescriptlang.org/play)**

### Типы данных

**TypeScript** является строго типизированным языком, и каждая переменная и константа в нем имеет определенный тип.

#### `boolean`
```
let variable: boolean = false;
```
#### `number`
```
let value: number = 3.14;
```
#### `string` - строки
```
let name: string = "Alex";
```
#### `null`
```
let n: null = null;
```
#### `undefined`
```
let u: undefined = undefined;
```
#### `void` - отсутствие значения
```
const sayHello = (): void => console.log("Hello");
```
#### `Array`
```
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
```
#### `Tuple`
```
let x: [string, number] = ["1", 1];
```
#### `Any`
```
let list: any[] = ["1", 1, true];
let x: any = 1;
```
#### `Enum`
```
enum Sides {
    Up,
    Down,
    Left,
    Right,
}
Sides.Right;
Sides[2];
enum Messages {
    success = "Success",
    loading = "Wait...",
    error = "Something went wrong",
}
```
#### `Never` -  представляет отсутствие значения и используется в качестве возвращаемого типа функций, которые генерируют или возвращают ошибку
```
const error = (msg: string): never => { throw new Error(msg) };
const loop = (): never => { while (true) {} };
```
#### `Object`
```
const obj: Object = { name: "Alex", age: 12 };
```


#### Custom type

```
type User = {
  name: string;
  age: number;
};

const alex: User = { name: "Alex", age: 12 };
```


### Functions

#### Arguments type
```
const sayHello = (name: string) => console.log(`Hello, ${name}`);
```

#### Multiple arguments type
```
const printAge = (age: number | string) => console.log(`Age is ${age}`);
```

#### Default arguments type
```
const printAge = (age: number | string = 0) => console.log(`Age is ${age}`);
```

#### Optional argument
```
const printAge = (age?: number | string) => {
    if (!!age) {
        console.log(`Age is ${age}`);
    } else {
        console.log(`Age not specified`);        
    }
}
```

#### REST
```
const printSum = (...numbers: number[]) => {
    const result = numbers.reduce((acc: number, v: number) => acc + v, 0);
    console.log(result);
}
printSum(1, 3, 4);
```

#### Returned type
```
const getSum = (...numbers: number[]): number => {
    return numbers.reduce((acc: number, v: number) => acc + v, 0);
}
console.log(getSum(1, 3, 4));
```

#### Describe fucntion
```
let f: (arg: string) => void;
...
f = (name: string): void => console.log("123");
```


### Objects

#### Define object type
```
let user: { name: string, age: number } = {
    name: "Alex",
    age: 30,
}
```

#### Custom object type
```
type User = {
  name: string;
  age: number;
  address?: string;
};

const alex: User = { name: "Alex", age: 12 };
```

### Classes

```
class User {
    name: string;
    age: number;

    constructor(name: string, age?: number) {
        this.name = name;

        if (age) {
            this.age = age;
        }
    }
}

new User("Alex", 18);
```

#### Access Modifiers
- `Public` - По умолчанию члены (свойства и методы) класса TypeScript являются общедоступными. Публичные члены доступны везде без ограничений
- `Private` - Доступ к закрытому члену невозможен за пределами содержащего его класса. Доступ к закрытым членам возможен только внутри класса
- `Protected` - Доступ к защищенному члену невозможен за пределами содержащего его класса. Доступ к защищенным членам возможен только внутри класса и экземпляром его подкласса/дочернего класса
- `Readonly` - Свойства Readonly должны быть инициализированы при их объявлении или в конструкторе
```
class User {
    readonly name: string;
    protected age: number;
    private count: number = 0;

    constructor(name: string, age?: number) {
        this.name = name;

        if (age) {
            this.age = age;
        }
    }
}
```

#### Minimization of Class properties
```
class User {
    constructor(
        readonly name: string,
        protected age: number,
    ) {
    }
}
```

#### Access to private property
```
class User {
    constructor(
        private age: number
    ) {
    }

    setAge = (age: number) => {
        if (age > 0) {
            this.age = age;
        }
    }

    getAge = () => this.age;

    set myAge(age: number) {
        if (age > 0) {
            this.age = age;
        }
    }

    get myAge(): number {
        return this.age;
    }
}

const user = new User(0);

user.myAge = 18;
console.log(user.myAge);

user.setAge(12);
console.log(user.getAge());
```


#### Static
```
class User {
    private static _count: number = 0;
    constructor() {
        User._count++;
    }

    static get count():number {
        return User._count;
    }
}

new User();
new User();
new User();
new User();

console.log(User.count);
```

#### Abstract Class
```
abstract class Animal {
    abstract kind: string;
    constructor(public name: string) {}

    abstract sayHello(): void;
}

class Cat extends Animal {
    kind: string = "Cat";

    sayHello(): void {
        console.log(`Hello, ${this.name} (${this.kind})`);
    }
}

(new Cat("Tom")).sayHello();
```

### Namespace
```
namespace MathVars {
    const x = 2;
    export const PI: number = 3.14;
}
console.log(MathVars.PI);
```

### Interface
```
interface User {
    name: string,
    age: number,
}
```

#### Readonly
```
interface User {
    readonly name: string,
    age?: number,
}
const alex: User = {
    name: "Alex",
}
```

#### Extension
```
interface User {
    readonly name: string,
    age?: number,
    [prop: string]: any,
}
```

#### class interface
```
interface User {
    readonly name: string,
    getName(): string,
}

class Client implements User {
    name: string = "Client";

    getName(): string {
        return this.name;
    }
}
```

#### Extends
```
interface User {
    readonly name: string,
    age?: number,
}
interface Admin extends User {
    readonly role: string,
}
```

### Generic
```
const getter = <T>(data: T): T => {
    return data;
}
getter(0);
getter<number>(10);
```

#### Extends
```
const double = <T extends number>(n: T): number => {
    return n ** 2;
}
```