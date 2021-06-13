function spiceMustFlow(startingYield) {
    let product = 0;
    let days = 0;

    //logic
    for (let i = 1; i < 230; i++) {
        if (startingYield >= 100) {
            product += startingYield - 26;
            startingYield -= 10;
            days++
        }

    }

    if (product < 26) {
        console.log(days);
        console.log(product);
    } else {
        console.log(days);
        console.log(product - 26);
    }
}

spiceMustFlow(224)