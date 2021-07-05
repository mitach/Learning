function buildAWall(input) {
    let concreteDaily = 0;
    let concreteForWall = 0;
    let costs = 0;
    let crews = input.filter(length => length < 30).length;
    let totalConcrete = [];

    while (crews !== 0) {
        concreteDaily = 0;

        for (let i = 0; i < input.length; i++) {
            if (input[i] < 30) {
                input[i]++;
                concreteDaily += 195;
                concreteForWall += 195;
                if (input[i] === 30) {
                    crews--;
                }
            }
        }

        totalConcrete.push(concreteDaily);
    }

    costs = concreteForWall * 1900;

    console.log(totalConcrete.join(', '));
    console.log(`${costs} pesos`);
}

buildAWall([21, 25, 28]);
buildAWall([17, 22, 17, 19, 17]);