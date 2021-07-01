function shoppingList(input) {
    let groceries = input.shift().split('!');

    for (let line of input) {
        if (line == 'Go Shopping!') {
            break;
        }

        let [command, product, newProduct] = line.split(' ');

        if (command === 'Urgent') {
            if (groceries.includes(product) === false) {
                groceries.unshift(product);
            }
        } else if (command === 'Unnecessary') {
            if (groceries.includes(product) === true) {
                let index = groceries.indexOf(product);
                groceries.splice(index, 1);
            }
        } else if (command === 'Correct') {
            if (groceries.includes(product) === true) {
                let index = groceries.indexOf(product);
                groceries[index] = newProduct;
            }
        } else if (command === 'Rearrange') {
            if (groceries.includes(product) === true) {
                let index = groceries.indexOf(product);
                groceries.splice(index, 1);
                groceries.push(product)
            }
        }
    }

    console.log(groceries.join(', '));
}

shoppingList([
    'Tomatoes!Potatoes!Bread',
    'Unnecessary Potatoes',
    'Urgent Grapes',
    'Correct Bread Onion',
    'Go Shopping!']);

shoppingList([
    'Milk!Pepper!Salt!Water!Banana',
    'Urgent Salt',
    'Unnecessary Grapes ',
    'Correct Pepper Onion',
    'Rearrange Grapes',
    'Correct Tomatoes Potatoes',
    'Go Shopping!']);