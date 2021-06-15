// function mathPower(x, n) {
//     console.log(x ** n);
// }
// mathPower(2, 8)

function mathPowerTwo(x, n) {
    let sum = 1;

    for (let i = 0; i < n; i++) {
        sum *= x;
    }

    console.log(sum);
}
mathPowerTwo(2, 8)