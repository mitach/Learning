function solve(input) {
    let list = input.shift().split(', ');

    for (let line of input) {
        if (line === 'No More Money') {
            break;
        }

        let [command, biscuit, index] = line.split(' ');

        if (command === 'OutOfStock') {
            while (list.includes(biscuit)) {
                list[list.indexOf(biscuit)] = 'None';
            }
        } else if (command === 'Required') {
            let length = list.length - 1;
            if (index <= length && list[index] != 'None') {
                list.splice(index, 1, biscuit);
            }
        } else if (command === 'Last') {
            list.push(biscuit);
        }

    }

    let newArr = [];

    for (let stock of list) {
        if (stock != 'None') {
            newArr.push(stock);
        }
    }

    console.log(newArr.join(' '));
}

solve(["Vanilla, Chocolate, Raspberry, Chocolate",
    "OutOfStock Chocolate",
    "Required BBB 3",
    'Last Grapes',
    "No More Money"]);