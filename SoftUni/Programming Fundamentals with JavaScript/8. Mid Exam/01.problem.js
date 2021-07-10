function solve(input) {
    let neededExp = input.shift();
    let battlesCount = input.shift();
    let currExp = 0;
    let counter = 0;
    let smallCounter = 0;
    let battles = 0;

    for (let line of input) {
        line = Number(line);
        counter++;

        if (currExp >= neededExp) {
            break;
        }

        if (counter % 3 == 0) {
            currExp += line + (line * 0.15);
            smallCounter++;
            if (smallCounter % 15 == 0) {
                currExp += line + (line * 0.05);
                smallCounter = 0;
            }
        } else if (counter % 5 == 0) {
            currExp += line - (line * 0.10);
        } else {
            currExp += line;
        }
        battles++;
    }

    if (currExp >= neededExp) {
        console.log(`Player successfully collected his needed experience for ${battles} battles.`);
    } else {
        console.log(`Player was not able to collect the needed experience, ${(neededExp - currExp).toFixed(2)} more needed.`);
    }
}

solve(([500,
    5,
    50,
    100,
    200,
    100,
    30]));