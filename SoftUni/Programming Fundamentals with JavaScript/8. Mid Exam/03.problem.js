function solve(input) {
    let cardsArr = input.shift().split(':');
    let newArr = [];

    for (let line of input) {
        if (line === 'Ready') {
            break;
        }

        let [command, card, option] = line.split(' ')

        if (command === 'Add') {
            if (cardsArr.includes(card)) {
                newArr.push(card)
            } else {
                console.log(`Card not found.`);
            }
        } else if (command === 'Insert') {
            let length = newArr.length - 1;
            if (option >= 0 && option <= length && cardsArr.includes(card)) {
                newArr.splice(option, 0, card);
            } else {
                console.log(`Error!`);
            }
        } else if (command === 'Remove') {
            if (newArr.includes(card)) {
                newArr.splice(newArr.indexOf(card), 1)
            } else {
                console.log(`Card not found.`);
            }
        } else if (command === 'Swap') {
            let index1 = newArr.indexOf(card);
            let index2 = newArr.indexOf(option);
            newArr[index1] = option;
            newArr[index2] = card
        } else if (command === 'Shuffle') {
            newArr.reverse();
        }
    }

    console.log(newArr.join(' '));
}

// solve(["Innervate:Moonfire:Pounce:Claw:Wrath:Bite",
//     "Add Moonfire",
//     "Add Pounce",
//     "Add Bite",
//     "Add Wrath",
//     "Insert Claw 0",
//     "Swap Claw Moonfire",
//     "Remove Bite",
//     "Shuffle deck",
//     "Ready"]);

solve(["Wrath:Pounce:Lifeweaver:Exodia:Aso:Pop",
    "Add Pop",
    "Add Exodia",
    "Add Aso",
    "Remove Wrath",
    "Add SineokBqlDrakon",
    "Shuffle deck",
    "Insert Pesho 0",
    "Ready"]);

