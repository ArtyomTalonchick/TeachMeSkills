/* 
    Необходимо реализовать функцию, которая проверяет, что парные скобки сбалансированы. 
    То есть каждая открывающая скобка имеет закрывающую: (), ((()())). 
    А вот пример несбалансированных скобок: (, ((), )(. 
    Для проверки баланса недостаточно считать количество, важен так же порядок в котором они идут.
*/

const Stack = require("../structures/stack");

const checkIsBalanced = (expression) => {
    const stack = new Stack();
    for (const symbol of expression) {
        if (symbol === '(') {
            stack.push(symbol);
        } else if (symbol === ')') {
            const prev = stack.pop();
            if (!prev) return false;
        }
    }

    return stack.size() === 0;
}

console.log(checkIsBalanced("((()()))"));
console.log(checkIsBalanced("(()"));
console.log(checkIsBalanced("())"));