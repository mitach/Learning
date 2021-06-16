function charactersInRange(firstChar, secondChar) {
    let first;
    let second;

    let firstCharAsNum = firstChar.charCodeAt(0);
    let secondCharAsNum = secondChar.charCodeAt(0);

    if (firstCharAsNum > secondCharAsNum) {
        first = secondCharAsNum;
        second = firstCharAsNum;
    } else {
        first = firstCharAsNum;
        second = secondCharAsNum;
    }

    let result = '';
    for (let i = first + 1; i < second; i++) {
        result += `${String.fromCharCode(i)} `;
    }

    console.log(result);
}

charactersInRange('d', 'a');