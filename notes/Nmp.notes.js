// require lodash
{
    const _ = require("lodash");
    
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    console.log(_.chunk(arr, 2))
}

// Особенности модулей
{
    // use-strict
    {
        <script type="module">
            a = 5; // ошибка
        </script>
    }

    // область видимости
    {
        // user.js
        let user = "John";

        // hello.js
        alert(user); // в этом модуле нет такой переменной

        // для использования нужно импортировать
    }

    // однокротное выполнение
    {
        // 📁 alert.js
        alert("Модуль выполнен!");

        // 📁 1.js
        import `./alert.js`; // Модуль выполнен!

        // 📁 2.js
        import `./alert.js`; // (ничего не покажет)
    }

    // однокротное выполнение
    {
        // 📁 admin.js
        export let admin = {
            name: "John"
        };

        // 📁 1.js
        import {admin} from './admin.js';
        admin.name = "Pete";

        // 📁 2.js
        import {admin} from './admin.js';
        alert(admin.name); // Pete

        // Оба файла, 1.js и 2.js, импортируют один и тот же объект
        // Изменения, сделанные в 1.js, будут видны в 2.js
    }
}

// ожидание загрузки HTM
{
    /*
        <script type="module">
            const btn = document.getElementById("button");
            console.log("module", btn);
        </script>
        
        
        <script>
            const btn = document.getElementById("button");
            console.log("script", btn);
        </script>
        
        <button id="button"></button>
    */
}
// nomodule
{
    /*
        <script nomodule>
        alert("Современные браузеры понимают оба атрибута - и type=module, и nomodule, поэтому пропускают этот тег script")
        alert("Старые браузеры игнорируют скрипты с неизвестным атрибутом type=module, но выполняют этот.");
        </script>
    */
}