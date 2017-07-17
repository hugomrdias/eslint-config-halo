
function test() {
    const value = 1;
    const a = 1;
    const b = 2;
    const c = 2;
    const d = false;
    const result = `${value * 25 + 20 % 2} px`;

    const foo = (a && b < 0) || c > 0 || d + 1 === 0;

    console.log(result);

    return result;
}
console.log(test);
