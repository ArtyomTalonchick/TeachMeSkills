- [Node.js](#node)
  - [Modules](#node_modules)
- [npm](#npm)
- [Модули](#modules)
- [Экспорт и импорт](#export_import)
- [Динамические импорты](#dynamic_import)
- [Lint](#lint)



# <a name="node"></a>  Node.js

**Node** или **Node.js** — программная платформа, основанная на движке V8 (транслирующем JavaScript в машинный код), превращающая JavaScript из узкоспециализированного языка в язык общего назначения. Node.js добавляет возможность JavaScript взаимодействовать с устройствами ввода-вывода через свой API, написанный на C++, подключать другие внешние библиотеки, написанные на разных языках, обеспечивая вызовы к ним из JavaScript-кода.

[**Установка Node.js**](https://nodejs.org/en/)


[**100% рабочая версия**](https://nodejs.org/es/blog/release/v8.17.0/)

### <a name="node_modules"></a>  Modules

- `module.exports` отмечает переменные и функции, которые должны быть доступны вне текущего модуля
- `require` позволяет импортировать функциональность из других модулей

*`calculator.js`*
```
class Calculator {
    static sum = (...args) => args.reduce((acc, item) => acc + item, 0);
    static mul = (...args) => args.reduce((acc, item) => acc * item, 1);
    static sub = (a, b) => a - b;
    static div = (a, b) => a / b;
}

module.exports = Calculator;
```

*`index.js`*
```
const Calculator = require("./calculator");

console.log(Calculator.sum(1, 2, 3));
```


# <a name="npm"></a>  npm

**Пакет в Node.js** - один или несколько JavaScript-файлов, представляющих собой какую-то библиотеку или инструмент

**npm** (node package manager) - это стандартный менеджер пакетов, автоматически устанавливающийся вместе с Node.js. Он используется для скачивания пакетов из [облачного сервера npm](https://www.npmjs.com/), либо для загрузки пакетов на эти сервера.

### Создание проекта

Для инициализация проекта необходимо:
- создать новую директории, в которой будет лежать проект
- выполнить команду `npm init` в созданной директории

**package.json** - файл содержащий в себе информацию о приложении: название, версия, зависимости и т.д.


### Работа с зависимостями

- Установка: `npm install lodash`
    - `--global` - сохранить пакет глабально на компьютере
    - `--save` - сохранить пакет как зависимость в `package.json`
    - `--dev` - сохранить пакет как зависимость в режиме разработки
- Обновление: `npm update lodash`
- Удаление: `npm uninstall lodash`

*[Lodash](https://www.npmjs.com/package/lodash)*


# <a name="modules"></a>  Модули

- `export` отмечает переменные и функции, которые должны быть доступны вне текущего модуля
- `import` позволяет импортировать функциональность из других модулей

*`calculator.js`*
```
class Calculator {
    static sum = (...args) => args.reduce((acc, item) => acc + item, 0);
    static mul = (...args) => args.reduce((acc, item) => acc * item, 1);
    static sub = (a, b) => a - b;
    static div = (a, b) => a / b;
}

export Calculator;
```

*`index.js`*
```
import Calculator from "./calculator.js";

console.log(Calculator.sum(1, 2, 3));
```

*Для использования функциональности модулей необходимо явно указать, что скрипты являются модулями `type="module"`*

### Особенности модулей

- всегда `use-strict`
- cвоя область видимости
- однокротное выполнение
- `import.meta` - содержит информацию о текущем модуле
- `this` - не определен
- `deferred` режим загрузки
  - не блокирует обработку HTML
  - ожидание загрузки HTML перед выполнением выполняются
  - сохраняется относительный порядок скриптов
- скрипты с одинаковым `src` запускаются только один раз
- скрипты с другого домена требуют заголовков `CORS`

### Поддержка модулей
В старых браузерах модели могут не поддерживаться: скрипты буду игнорироваться.
Для обработки можно использоват `nomodule`


# <a name="export_import"></a>  Экспорт и импорт

### Экспорт до объявления
```
export const apiUrl = "https://api.github.com";
export const usersUrl = "/users";
export const repUrl = "/repositories";
```

### Экспорт отдельно от объявления
```
const apiUrl = "https://api.github.com";
const usersUrl = "/users";
const repUrl = "/repositories";

export { apiUrl, usersUrl, repUrl };
```

### Импорт
```
import { apiUrl, usersUrl, repUrl } from "./api.js";

console.log(apiUrl);
console.log(usersUrl);
console.log(repUrl);
```

### Импорт всего
```
import * as urls from "./api.js";

console.log(urls.apiUrl);
console.log(urls.usersUrl);
console.log(urls.repUrl);
```

### Импорт "как"
```
import { apiUrl as baseUrl } from "./api.js";

console.log(baseUrl);
```

### Экспорт "как"
```
const apiUrl = "https://api.github.com";

export { apiUrl as baseUrl };
```

### Экспорт по умолчанию
```
export default class User {
  constructor(name) {
    this.name = name;
  }
}
```
```
export default class {
  constructor(name) {
    this.name = name;
  }
}
```
```
class User {
  constructor(name) {
    this.name = name;
  }
}

export default User;
```
```
class User {
  constructor(name) {
    this.name = name;
  }
}

export {User as default};
```

### Импорт по умолчанию
```
import User from "./user.js";

new User("Tom");
```

```
import {default as User} from "./user.js";

new User("Tom");
```

### Реэкспорт
```
export {default as User} from "./user.js";
```


# <a name="dynamic_import"></a>  Динамические импорты

Проблемы обычного испорта:
- путь к модулю - только строка
  ```
    import ... from getModuleName(); // ОШИБКА!
  ```
- нельзя использовать в блоках
  ```
    if(...) {
        import ...; // ОШИБКА!
    }

    {
        import ...; // ОШИБКА!
    }
  ```

Решение:

**`import(module)`** - загружает модуль и возвращает промис, результатом которого становится объект модуля, содержащий все его экспорты
-  
  ```
    import(getModuleName())
        .then(obj => <объект модуля>)
        .catch(err => <ошибка загрузки>)
  ```
- 
  ```
    if(...) {
        let { apiUrl, usersUrl, repUrl } = await import("./api.js");
    }
  ```





---



# <a name="lint"></a>  Lint

### ESLint
**Lint** - это статический анализатор кода, проверяющий соответствие стандартам оформления кода

**[ESLint](https://www.npmjs.com/package/eslint)** - это линтер для языка программирования JavaScript, написанный на Node.js

Возможности:
- найти существующие ошибки в коде
- избежать глупых ошибок
- избежать бесконечные циклы в условиях цикла for
- не разрешить выражения console.log (и аналогичные)
- проверить наличие дубликатов cases в switch
- проверить недоступный код

[Все возможные правила ESLint](https://eslint.org/docs/rules/)

Установка `ESLint`
```
    npm install eslint --save-dev
```

Создания конфига `.eslintrc`
```
    ./node_modules/.bin/eslint --init
```
```
    npx eslint --init
```

Отключить проверку в конктретном меесте
```
    /* eslint-disable no-alert, no-console */
        alert("test");
    /* eslint-enable */
```
```
    alert("test"); // eslint-disable-line no-alert, no-console
```

### Airbnb
**Airbnb** - руководство по написанию JavaScript-кода

[Airbnb(GitHub)](https://github.com/airbnb/javascript/)

[Airbnb(рус.)](https://leonidlebedev.github.io/javascript-airbnb/)

Установка `Airbnb`
```
    npm install eslint-config-airbnb --save-dev
```

Использовать `Airbnb` в `.eslintrc`
```
    "extends": "airbnb"
```

### Prettier
[Prettier](https://prettier.io/docs/en/index.html)

[Prettier(GitHub)](https://github.com/prettier/eslint-config-prettier)

Установка `Prettier`
```
    npm install prettier --save-dev
    npm install eslint-config-prettier --save-dev
```

Использовать `Prettier` в `.eslintrc`
```
    "extends": [ 
        ...
        "prettier"
    ],
    "rules": {
        ...
        "prettier/prettier": "error",
    }
```

Файл `.prettierrc.json`
```
  {
      "arrowParens": "always",
      "max-len": ["error", 140, 4],
      "tabWidth": 2,
      "useTabs": false
  }
```

[Prettier Rules](https://prettier.io/docs/en/options.html)


# Источники
[Node.js](https://nodejs.org/en/)

[npm](https://www.npmjs.com/)

[Модули](https://learn.javascript.ru/modules)

[Держи свой код чистым с помощью ESLint](https://frontend-stuff.com/blog/eslint/)

[ESLint](https://www.npmjs.com/package/eslint)

[ESLint rules](https://eslint.org/docs/rules/)

[Airbnb(GitHub)](https://github.com/airbnb/javascript/)

[Airbnb(рус.)](https://leonidlebedev.github.io/javascript-airbnb/)

[Prettier](https://prettier.io/docs/en/index.html)

[Prettier(GitHub)](https://github.com/prettier/eslint-config-prettier)

[Prettier Rules](https://prettier.io/docs/en/options.html)
