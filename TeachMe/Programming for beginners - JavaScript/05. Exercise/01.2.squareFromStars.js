function square(n) {
    for (let row = n; row > 0; row--) {
        let output = "* ".repeat(n);
        console.log(output);
    }
}

square(4);
