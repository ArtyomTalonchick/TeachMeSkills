- [Webpack](#webpack)
- [Установка](#install)
- [Точка входа](#entry)
- [Создание билда](#build)
- [Точка выхода](#output)
- [Режимы сборки](#mode)
- [Зависимости](#dependencies)
- [Loaders](#loaders)
- [Babel](#babel)
- [Плагины](#plugins)
- [Сервер для разработки](#server)
- [Command Line Interface](#cli)
- [Источники](#links)


# <a name="webpack"></a>  Webpack

**Webpack** - это сборщик модулей. Он анализирует модули приложения, создает граф зависимостей, затем собирает модули в правильном порядке в один или более бандл (bundle), на который может ссылаться файл "index.html"

Проблемы импорта большого количества скриптов в "index.html":
- Неудобно
- Важен порядок
- Можно забыть про какой-нибудь модуль


# <a name="install"></a>  Установка

1. Инициализировать проект с помощью `npm`
1. Установить `webpack` и `webpack-cli`

    ```
    npm i webpack webpack-cli -D
    ```

1. Создать конфиг `webpack.config.js`

    ```
    module.exports = {}
    ```

# <a name="entry"></a>  Точка входа

**Точка входа** - это *главный* модуль (js файл), который включает в себя все остальные модули

С помощью точки входа Webpack создает граф зависимостей приложения

Установка точки входа:
```
module.exports = {
    entry: "./app/index.js"
}
```

# <a name="build"></a>  Создание билда

Запуск Webpack производится с помощью `npx`:
```
npx webpack
```

Для более удобного использования можно сохранить этот скрипт в `package.json`:
```
"scripts": {
  "build": "webpack"
}
```

И в дальнешем запускать:
```
npm run build
```

# <a name="output"></a>  Точка выхода

Установка точки выхода:
```
const path = require("path");

module.exports = {
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "index_bundle.js"
  }
}
```

# <a name="mode"></a>  Режимы сборки

Требования к продакшен билду:
- минификации кода
- уменьшения размера бандла
  - удаление комментариев
  - удаление инструментов разработки (`debugger`)

Webpack поддерживает два режима сборки: *production* и *development*

Установка режима сборки:
```
module.exports = {
    mode: "production"
}
```

# <a name="dependencies"></a>  Зависимости

При использовании Webpack можно использовать зависимости из `node_modules`

Установка зависимости:
```
npm i lodash
```

Использование зависимости:
```
import _ from "lodash";

console.log(_.defaults({ "a": 1 }, { "a": 3, "b": 2 }));
```


# <a name="loaders"></a>  Loaders

**Loaders** - это преобразования, которые применяются к исходному коду модуля. Они позволяют предварительно обрабатывать файлы при их импорте или "загрузке".

Loaders могут:
- преобразовывать файлы с другого языка (например, TypeScript) в JavaScript
- или загружать встроенные изображения как URL-адреса данных
- позволяют импортировать файлы CSS прямо из модулей JavaScript
- использовать препроцессоры

Установка:
```
  npm i css-loader style-loader -D 
```

Использование:
```
module.exports = {
  module: {
    rules: [
      { test: /\.css$/, use: [ "style-loader", "css-loader" ] }
    ]
  }
}

```

Использование препроцессоров:
```
npm i sass-loader sass -D
```
```
module.exports = {
  module: {
    rules: [
      { test: /\.(sass|scss)$/, use: ["style-loader", "css-loader", "sass-loader"] },
    ]
  }
}
```


# <a name="babel"></a>  Babel

Преобразование современного `EcmaScript` в `JavaScript` используется `babel`

Установка:
```
npm i @babel/core babel-loader -D 
```

Использование:
```
module.exports = {
  module: {
    rules: [
      { 
        test: /\.(js)$/,
        exclude: /(node_modules|bower_components)/,
        use: "babel-loader"
      }
    ]
  }
}
```

Babel поддерживает собственную конфигурацию в файле `.babelrc`
Примеры плагинов: `@babel/proposal-class-properties`, `@babel/plugin-transform-classes`, `@babel/plugin-transform-arrow-functions`

# <a name="plugins"></a>  Плагины

**Плагины** позволяют выполнять задачи после сборки бандла


### <a name="HtmlWebpackPlugin"></a>  HtmlWebpackPlugin
**HtmlWebpackPlugin** упрощает создание файлов HTML для обслуживания пакетов веб-пакетов.

Установка:
```
npm i html-webpack-plugin -D
```

Использование:
```
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  plugins: [
    new HtmlWebpackPlugin()
  ]
}
```

[Опции](https://github.com/jantimon/html-webpack-plugin#options)

### <a name="HtmlWebpackPlugin"></a>  HtmlWebpackPlugin
[CleanWebpackPlugin](https://www.npmjs.com/package/clean-webpack-plugin) удаляет все файлы внутри каталога `output.path` webpack, а также все неиспользуемые ресурсы webpack после каждой успешной перестройки

### <a name="Dotenv"></a>  Dotenv
[Dotenv](https://www.npmjs.com/package/dotenv) - модуль с нулевой зависимостью, который загружает переменные среды из файла `.env` в `process.env`

### <a name="DefinePlugin"></a>  DefinePlugin
[DefinePlugin](https://webpack.js.org/plugins/define-plugin/) - заменяет переменные в вашем коде другими значениями или выражениями во время компиляции


### <a name="CopyWebpackPlugin"></a>  CopyWebpackPlugin
[CopyWebpackPlugin](https://webpack.js.org/plugins/copy-webpack-plugin/) - https://webpack.js.org/plugins/copy-webpack-plugin/



# <a name="server"></a>  Сервер для разработки

Инструмент для разработки - `webpack-dev-server` - создает локальный сервер, сохраняет билд в кэш-памяти. При изменении исходного билд сразу пересобирается и обновляется страница в браузере.

Установка:
```
npm i webpack-dev-server -D 
```

Создаем скрипт в `package.json`:
```
"scripts": {
  "start": "webpack-dev-server"
}
```

Запускаем:
```
npm run start
```


# <a name="cli"></a>  Command Line Interface

Для управления режимом разработки можно использовать [Command Line Interface](https://webpack.js.org/api/cli/)
`package.json`
```
"scripts": {
    "build": "webpack --mode='production'",
    "start": "webpack-dev-server --mode='development'"
}
```


# <a name="links"></a>  Источники

[Webpack: руководство для начинающих](https://habr.com/ru/post/514838/)

[Webpack Production](https://webpack.js.org/guides/production/)

[Webpack Concepts](https://webpack.js.org/concepts/)

[HTML Webpack Plugin](https://github.com/jantimon/html-webpack-plugin)



























