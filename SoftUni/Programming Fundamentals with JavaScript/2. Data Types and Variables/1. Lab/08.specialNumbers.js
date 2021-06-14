function specialNumbers(num) {
    //initializing
    let sum = 0
    let result = '';

    //logic
    for (let i = 1; i <= num; i++) {
        sum = 0;
        i = i.toString();

        for (let j = 0; j < i.length; j++) {
            sum += Number(i[j]);
        }

        if (sum == 5 || sum == 7 || sum == 11) {
            result = `${i} -> True`
        } else {
            result = `${i} -> False`
        }

        //print result
        console.log(result);
    }
}
specialNumbers(15)