function arrayManipulator(nums, commands) {

    for (let line of commands) {
        let tokens = line.split(' ');
        let command = tokens[0];

        if (command === 'add') {
            let [index, element] = [Number(tokens[1]), Number(tokens[2])];
            nums.splice(index, 0, element)
        } else if (command === 'addMany') {
            let index = Number(tokens[1]);
            tokens.splice(0, 2);
            let numsToAdd = tokens.map(Number)
            nums.splice(index, 0, ...numsToAdd);
        } else if (command === 'contains') {
            let element = Number(tokens[1]);
            // if (nums.includes(element)) {
            //     console.log(nums.indexOf(element));
            // } else {
            //     console.log(-1);
            // }
            console.log(nums.indexOf(element));
        } else if (command === 'remove') {
            let index = tokens[1];
            nums.splice(index, 1);
        } else if (command === 'shift') {
            let positions = Number(tokens[1]);
            // let shiftNums = nums.splice(0, positions);
            // nums.push(...shiftNums);
            for (let i = 0; i < positions; i++) {
                nums.push(nums.shift());
            }
        } else if (command === 'sumPairs') {
            let newArr = [];
            if (nums.length % 2 !== 0) {
                nums.push(0);
            }
            for (let i = 0; i < nums.length; i += 2) {
                let sum = nums[i] + nums[i + 1]
                newArr.push(sum);
            }
            nums = newArr;
        } else if (command === 'print') {
            console.log(`[ ${nums.join(', ')} ]`);
            return;
        }
    }

}

arrayManipulator([1, 8, 2, 4, 5, 6, 7], ['sumPairs', 'print']);