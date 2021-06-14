function fuelMoney(distance, passengers, priceForOneLiter) {
    //find increase of fuel
    let increaseOfFuel = passengers * 0.100;

    //find hom many litres are needed
    let fuelLitres = (distance / 100) * (7 + increaseOfFuel);

    //find the price of the litres
    let price = (fuelLitres * priceForOneLiter).toFixed(2);

    //print result
    console.log(`Needed money for that trip is ${price}lv.`);

}

fuelMoney(260, 9, 2.49)