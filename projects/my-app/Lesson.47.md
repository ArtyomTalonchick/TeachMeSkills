### Routes
[NavLink](https://v5.reactrouter.com/web/api/NavLink)

# Authentication

### Endpoints

Создаем `endpoint` для аутентификации
- Принимает логин и пароль
- В случае неудачи возвращает `code = 403`
- В случае успеха возвращает найденого пользователя, и `token` для доступа
- Сохраням `token` в `localStorage`


---
**Решили сохранять юзера в `localStorage`**

~~`Создаем `endpoint` для получения юзера по `token`~~
- ~~На старте приложения проверяем `localStorage` на наличие `token`~~
  - ~~если `token` есть, то делаем запрос на получения юзера~~
  - ~~если `token` отсутсвует, перенапровляем на страницу логина~~

---

### Login page

Создаем страницу для аутентификации

---
**Не успели**

##### Refs
~~Используем [Ref](https://ru.reactjs.org/docs/refs-and-the-dom.html) для автофокуса на странице логина~~

---



### Закрываем приложение

Обращение к другим `endpoint`
- Для доступа к другим данным помещаем `token` в `header`: `Authentication: Basic [token]`
- Если получаем `code = 403`, то удаляем `token` и перенаправляем на страницу для логина

*Для перенаправления юзера юспользуем компонент [useNavigate](https://reactrouter.com/docs/en/v6/getting-started/overview#navigation)*


# Context

Используем [Context](https://ru.reactjs.org/docs/context.html) для хранения данных о юзере

[Сравнение Классовых и Функциональных компонентов](https://www.taniarascia.com/using-context-api-in-react/)

Создание контекста
```
const AuthContext = React.createContext({
  user: {},
  setUser: () => {},
});
```

Поставщик контекста
```
...
[]
...

<AuthContext.Provider value={{user, setUser}}>
    <.../>
</AuthContext.Provider>
```

Подписка на контекст
```
<AuthContext.Consumer>
  {value => /* отрендерить что-то, используя значение контекста */}
</AuthContext.Consumer>
```

```
const {user, setUser} = useContext(AuthContext);
```