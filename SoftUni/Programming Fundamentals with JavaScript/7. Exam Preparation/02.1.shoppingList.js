function shoppingList(input) {
    let groceries = input.shift().split('!');
    let line = input.shift();

    while (line != 'Go Shopping!') {
        let [command, product, newProduct] = line.split(' ');

        switch (command) {
            case 'Urgent':
                urgent(groceries, product);
                break;
            case 'Unnecessary':
                unnecessary(groceries, product);
                break;
            case 'Correct':
                correct(groceries, product, newProduct);
                break;
            case 'Rearrange':
                rearrange(groceries, product);
                break;
        }
        line = input.shift();
    }

    function urgent(array, addItem) {
        if (!(array.includes(addItem))) {
            array.unshift(addItem);
        }
    }

    function unnecessary(array, removeItem) {
        if (array.includes(removeItem)) {
            let index = array.indexOf(removeItem);
            array.splice(index, 1)
        }
    }

    function correct(array, oldItem, newItem) {
        if (array.includes(oldItem)) {
            let index = array.indexOf(oldItem);
            array[index] = newItem;
        }
    }

    function rearrange(array, rearrangeItem) {
        if (array.includes(rearrangeItem)) {
            let index = array.indexOf(rearrangeItem);
            array.splice(index, 1);
            array.push(rearrangeItem);
        }
    }

    console.log(groceries.join(', '));
}

shoppingList([
    'Tomatoes!Potatoes!Bread',
    'Urgent Milk',
    'Unnecessary Tomatoes',
    'Correct Bread Grapes',
    'Rearrange Potatoes',
    'Go Shopping!']);

shoppingList([
    'Tomatoes!Potatoes!Bread',
    'Unnecessary Milk',
    'Urgent Tomatoes',
    'Go Shopping!']);

shoppingList([
    'Milk!Pepper!Salt!Water!Banana',
    'Urgent Salt',
    'Unnecessary Grapes ',
    'Correct Pepper Onion',
    'Rearrange Grapes',
    'Correct Tomatoes Potatoes',
    'Go Shopping!']);