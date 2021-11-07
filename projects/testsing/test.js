describe("проверка метода pow", () => {

    describe("исключительны значения", () => {
        const tests = [
            // дорасмотреть
            ["возведение отрицательно числа", -2, 2, 4],
            ["возведение в дробную степень", 3, .25, 3],
            ["возведение отрицательно числа в дробную степень", -3, 2.25, -27],
            // дорасмотреть
        ];
        tests.forEach(test => 
            it(test[0], () => {
                assert.equal(pow(test[1], test[2]), test[3]);
            })
        );
    });

    describe("реазультат NaN", () => {
        const tests = [
            ["возведение строки", "123", 1, NaN],
            ["возведение строки", "sdf", 1, NaN],
            ["возведение массива", [], 3, NaN],
            ["возведение в строку", 1, "sdf", NaN], 
            ["возведение массива", [], 3, NaN],
            ["возведение массива", 3, [], NaN],
        ];
        tests.forEach(test => 
            it(test[0], () => {
                assert.isNaN(pow(test[1], test[2]));
            })
        );
    });

    describe("возведение в степень 2", () => {
        for (let i = 0; i < 15; i++) {
            const x = Math.random() * 1000;
            it(`возводит ${x} в 2`, () => {
                assert.equal(pow(x, 2), x * x);
            });
        }
    });

    describe("возведение в степень 3", () => {
        for (let i = 0; i < 15; i++) {
            const x = Math.random() * 1000 - 500;
            it(`возводит ${x} в 3`, () => {
                assert.equal(pow(x, 3), x * x * x);
            });
        }
    });

    describe("возведение в степень 4", () => {
        for (let i = 0; i < 15; i++) {
            const x = Math.random() * 1000;
            it(`возводит ${x} в 4`, () => {
                assert.equal(pow(x, 4), x * x * x * x);
            });
        }
    });

    describe("возведение в степень -3", () => {
        for (let i = 0; i < 15; i++) {
            const x = Math.random() * 100;
            it(`возводит ${x} в -3`, () => {
                assert.equal(pow(x, -3), 1 / (x * x * x));
            });
        }
    });
});
