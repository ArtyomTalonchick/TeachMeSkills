import { data, UserType } from "./data";




// 1.
// Получить строку с именами и фамилиями всех пользователей через
// запятую.
const f1 = (users: UserType[]): string => {
    const array: string[] = users.map((user) => {
        return (`${user.first_name} ${user.last_name}`);
    });

    return array.join(", ");
}

const _f1 = (users: UserType[]): string => {
    return users.reduce((acc, user) => 
            `${acc}${acc.length ? ", " : ""}${user.first_name} ${user.last_name}`,
        "");
}




// 2.
// Создать массив из emails по алфавиту.
const f2 = (users: UserType[]): string[] => {
    // return [...users]
    //     .sort((a, b) => a.email.localeCompare(b.email))
    //     .map((item) => item.email);
    return users
        .map((item) => item.email)
        .sort();
}




// 3.
// Создать новый массив пользователей, где объект пользователя должен
// содержать только id и поле, отвечающее за имя пользователя(например
// username), которое должно содержать имя и фамилию.
type SimpleUserType = {
    id: number,
    username: string,
}
const f3 = (users: UserType[]): SimpleUserType[] => {
    return users
        .map((item) => ({
            id: item.id,
            username: `${item.first_name} ${item.last_name}`,
        }));
}




// 4.
// Создать массив юзеров, где они отсортированы по возрасту по
// возрастанию и все пользователи младше 40 лет.
const f4 = (users: UserType[]): UserType[] => {
    return users
        .filter((item) => item.age < 40)
        .sort((a, b) => a.age - b.age);
}




// 5.
// Получить объект, где были бы
// a) данные о среднем возрасте пользователей
// b) количество пользователей старше 30
// c) количество пользователей старше 40
// d) количество пользователей старше 18
type UsersAggregatedInfo = {
    midAge: number,
    count30: number,
    count40: number,
    count18: number,
}
const f5 = (users: UserType[]): UsersAggregatedInfo => {
    const r = users.reduce((acc, item) => {
        const result: UsersAggregatedInfo = { ...acc };
        result.midAge += item.age;
        if (item.age > 30) {
            result.count30 ++;
        }
        if (item.age > 40) {
            result.count40 ++;
        }
        if (item.age > 18) {
            result.count18 ++;
        }
        return result;
    }, {
        midAge: 0,
        count30: 0,
        count40: 0,
        count18: 0,
    });

    r.midAge /= users.length;
    return r;
}




// 6
// Создать объект, где ключ, это первая буква фамилии, а значение -
// массив из фамилий пользователей начинающихся на эту букву. Объект
// должен состоять только из ключей существующих фамилий в этом
// массиве. Например в этом массиве нет фамилии с букву Y, а значит и
// такого поля не должно быть в объекте. Пример того, что надо получить,
// когда пользователи имеют следующие фамилии Snow, Felton , Ford,
// Ferdinand:
// { s: [‘Snow’], f: ['Felton', 'Ford', 'Ferdinand' }
type HashUserType = {
    [prop: string]: string[],
}
const f6 = (users: UserType[]): HashUserType => {
    const obj: HashUserType = {};
    users.forEach((item) => {
        const key = item.first_name[0].toLowerCase();
        if (!obj[key]) {
            obj[key] = [item.first_name];
        } else {
            obj[key].push(item.first_name);
        }
    });

    return obj;
}


// forEach
// filter
// find
// map
// reduce

console.log(f6(data));