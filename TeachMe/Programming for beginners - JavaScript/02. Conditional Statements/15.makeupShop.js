function makeupShop(moneyNeeded, powders, lipsticks, mascara, eyeShadows, concealer) {
    let moneyEarned = (powders * 2.60) + (lipsticks * 3) + (mascara * 4.10) + (eyeShadows * 8.20) + (concealer * 2);
    let numberOfMakeups = powders + lipsticks + mascara + eyeShadows + concealer;

    if (numberOfMakeups >= 50) {
        moneyEarned = moneyEarned * 0.75;
    }

    let moneyAfterRent = moneyEarned * 0.9;

    if (moneyAfterRent > moneyNeeded) {
        console.log(`Yes! ${(moneyAfterRent - moneyNeeded).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(moneyNeeded - moneyAfterRent).toFixed(2)} lv needed.`);
    }
}

makeupShop(40.8, 20, 25, 30, 50, 10);
makeupShop(320, 8, 2, 5, 5, 1);
