function chessBoard(number) {
    let result = '<div class="chessboard">\n';
    let color = 'black'

    for (let i = 1; i <= number; i++) {
        result += '  <div>\n';

        for (let j = 1; j <= number; j++) {

            result += `    <span class="${color}"></span>\n`;
            if (color === "black") {
                color = 'white'
            } else {
                color = 'black'
            }
        }

        if (number % 2 == 0 && color === "black") {
            color = 'white'
        } else if (number % 2 == 0 && color === "white") {
            color = 'black'
        }

        result += '  </div>\n';
    }

    result += '</div>';

    console.log(result);
}

chessBoard(3)