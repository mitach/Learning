function listOfProducts(list) {
    list.sort();

    for (let i = 0; i < list.length; i++) {
        let product = list[i];
        console.log(`${i + 1}.${product}`);
    }
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])