function shoppingList(input) {
    let groceries = input.shift().split('!');

    let line = input.shift();

    while (line != 'Go Shopping!') {
        let tokens = line.split(' ')
        let [command, product, newProduct] = [tokens[0], tokens[1], tokens[2]];

        switch (command) {
            case 'Urgent':
                if (!(groceries.includes(product))) {
                    groceries.unshift(product);
                }

                break;
            case 'Unnecessary':
                if (groceries.includes(product)) {
                    let index = groceries.indexOf(product);
                    groceries.splice(index, 1)
                }

                break;
            case 'Correct':
                if (groceries.includes(product)) {
                    let index = groceries.indexOf(product);
                    groceries.splice(index, 1, newProduct);
                }

                break;
            case 'Rearrange':
                if (groceries.includes(product)) {
                    let index = groceries.indexOf(product);
                    groceries.splice(index, 1);
                    groceries.push(product);
                }

                break;

        }

        line = input.shift();
    }

    console.log(groceries.join(', '));
}

shoppingList(['Tomatoes!Potatoes!Bread!Milk',
    'Unnecessary Milk',
    'Urgent Tomatoes',
    'Go Shopping!']);

shoppingList([
    'Milk!Pepper!Salt!Water!Banana',
    'Urgent Salt',
    'Unnecessary Milk',
    'Correct Pepper Onion',
    'Rearrange Water',
    'Correct Banana Potatoes',
    'Go Shopping!']);