- [Хэш-таблица](#hash__table)
- [Стэк](#stack)
- [Очередь](#queue)
- [Set](#set)
- [Map](#map)
- [WeakMap и WeakSet](#weak__set__map)


# <a name="hash__table"></a>  Хэш-таблица

**Хэш-таблица** — это структура данных, которая строится по принципу ключ-значение

![Схема хэш-таблицы](./assets/structures/hash-table.png)

- **`Hash function`** — преобразует ключи в список номеров, которые используются как имена (значения) ключей
- **`O(1)`** — время поиска значения по ключу может достигать `O(1)`

Методы:
 - `add`: добавить пару ключ/значение
 - `remove`: удалить пару
 - `lookup`: найти значение по ключу


# <a name="stack"></a>  Стэк

**LIFO** — Last In First Out — последним вошел, первым вышел

![Стэк](./assets/structures/stack.png)

Методы:
- `push`: добавить новый элемент
- `pop`: вернуть верхний элемент и удалить его
- `peek`: вернуть верхний элемент
- `length`: вернуть количество элементов в стеке


# <a name="queue"></a>  Очередь

**FIFO** — First In First Out — первым вошел, первым вышел

![Очередь](./assets/structures/queue.png)

Методы:
- `enqueue`: добавить элемент в конец
- `dequeue`: вернуть первый элемент и удалить его
- `front`: вернуть первый элемент
- `size`: вернуть количество элементов в очереди
- `isEmpty`: проверить, пуста ли очередь


# <a name="set"></a>  Set

**Коллекция (Set)** — коллекция, которая не допускает включения повторяющихся элементов и не содержит индексов

![Set](./assets/structures/set.png)

Методы:
- `add`: добавить элемент
- `delete`: удалить элемент
- `has`: проверить, имеется ли элемент в коллекции
- `values`: вернуть все элементы в коллекции
- `size`: вернуть количество элементов
- `union`: вренуть объединения двух коллекций
- `intersection`: вренуть пересечание двух коллекций
- `difference`: вернуть разность двух коллекций
- `subset`: проверить, является ли одна коллекция подмножеством другой

*`add` и `delete` возвращают `true` или `false` в зависимости от успеха операции*

# <a name="map"></a>  Map 

**Map** – это коллекция ключ/значение, как и Object. Но основное отличие в том, что Map позволяет использовать ключи любого типа.

Методы:
- `set(key, value)` – записывает по ключу `key` значение `value`
- `get(key)` – возвращает значение по ключу
- `has(key)` – возвращает `true`, если ключ `key` присутствует в коллекции, иначе `false`
- `delete(key)` – удаляет элемент по ключу `key`
- `clear()` – очищает коллекцию от всех элементов
- `map.size` – возвращает текущее количество элементов




# <a name="weak__set__map"></a>  WeakMap и WeakSet 

[WeakMap и WeakSet](https://learn.javascript.ru/weakmap-weakset)


---

# Источники:
[8 распространенных структур данных на примере JavaScript](https://habr.com/ru/post/497476/)

[Простые алгоритмы и структуры данных в JS](https://techrocks.ru/2019/02/23/%D0%BF%D1%80%D0%BE%D1%81%D1%82%D1%8B%D0%B5-%D0%B0%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC%D1%8B-%D0%B8-%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D1%8B-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85/)

[10 структур данных, которые вы должны знать](https://proglib.io/p/data-structures)

[Map и Set](https://learn.javascript.ru/map-set)

[WeakMap и WeakSet](https://learn.javascript.ru/weakmap-weakset)

[Алгоритмы и структуры данных на JavaScript](https://github.com/trekhleb/javascript-algorithms/blob/master/README.ru-RU.md)
