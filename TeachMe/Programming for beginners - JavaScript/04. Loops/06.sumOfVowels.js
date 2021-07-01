function sumOfVowels(word) {
    let sum = 0;
    let length = word.length
    for (let i = 0; i < length; i++) {
        let letter = word[i];

        switch (letter) {
            case 'a':
                sum += 1;
                break;
            case 'e':
                sum += 2;
                break;
            case 'i':
                sum += 3;
                break;
            case 'o':
                sum += 4;
                break;
            case 'u':
                sum += 5;
                break;
        }
    }

    console.log(sum);
}

sumOfVowels('hello');
sumOfVowels('hi');
sumOfVowels('bye');
sumOfVowels('zzz');
