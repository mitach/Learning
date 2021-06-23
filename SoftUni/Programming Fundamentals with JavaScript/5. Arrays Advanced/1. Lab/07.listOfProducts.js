function listOfProducts(list) {
    list.sort();

    for (let i = 0; i < list.length; i++) {
        let product = list[i];
        let position = i + 1;
        console.log(`${position}.${product}`);
    }
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);