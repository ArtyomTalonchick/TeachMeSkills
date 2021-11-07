// x - n - целые
const pow = (x, n) => {
    if (typeof x !== "number" || typeof n !== "number") return NaN;
    if (n < 0) return 1 / pow(x, -n);

    let result = x;
    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}