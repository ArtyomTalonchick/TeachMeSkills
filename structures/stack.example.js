/* 
    Необходимо реализовать функцию, которая проверяет, что парные скобки сбалансированы. 
    То есть каждая открывающая скобка имеет закрывающую: (), ((()())). 
    А вот пример несбалансированных скобок: (, ), )(. 
    Для проверки баланса недостаточно считать количество, важен так же порядок в котором они идут.
*/

const checkIsBalanced = (exression) => {
    const stack = [];
    for (const symbol of exression) {
        if (symbol === "(") {
            stack.push(symbol);
        } else { // symbol === ")"
            const prev = stack.pop();
            if (!prev) return false;
        }
    }

    return stack.length === 0;
}

console.log(checkIsBalanced("((()()))"));
console.log(checkIsBalanced("("));
console.log(checkIsBalanced("(()"));
console.log(checkIsBalanced("())"));