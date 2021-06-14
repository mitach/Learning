function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armourPrice) {
    let helmetSum = 0;
    let swordSum = 0;
    let shieldSum = 0;
    let armourSum = 0;

    let brokenShieldCounter = 0;
    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 == 0) {
            helmetSum += helmetPrice
        }
        if (i % 3 == 0) {
            swordSum += swordPrice
        }
        if (i % 6 == 0) {
            shieldSum += shieldPrice
            brokenShieldCounter++;
        }
        // if (brokenShieldCounter != 0 && brokenShieldCounter % 2 == 0) {
        //     armourSum += armourPrice
        //     brokenShieldCounter = 0;
        // }
        if (i % 12 == 0) {
            armourSum += armourPrice
        }
    }

    let expenses = helmetSum + swordSum + shieldSum + armourSum;
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

gladiatorExpenses(23, 12.50, 21.50, 40, 200)