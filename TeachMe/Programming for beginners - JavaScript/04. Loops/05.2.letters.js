function letters(word) {
    let wordArr = word.split('')

    for (let i = 0; i < wordArr.length; i++) {
        console.log(wordArr[i]);
    }
}

letters('hello');
letters('TeachMe');