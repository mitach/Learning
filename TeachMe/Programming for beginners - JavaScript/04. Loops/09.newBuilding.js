function newBuilding(floors, apartments) {
    let result = ``;

    for (let i = floors; i >= 1; i--) {

        if (i == floors) {
            for (let j = 0; j < apartments; j++) {
                result += `L${i}${j} `;
            }
        } else {
            if (i % 2 == 0) {
                for (let j = 0; j < apartments; j++) {
                    result += `O${i}${j} `;
                }
            } else {
                for (let j = 0; j < apartments; j++) {
                    result += `A${i}${j} `;
                }
            }
        }

        console.log(result);
        result = ``;
    }

}

newBuilding(10, 10);

