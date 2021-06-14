function gramophone(bandName, albumName, songName) {
    //find the duration in seconds
    let seconds = (albumName.length * bandName.length) * songName.length / 2;

    //find how many rotations are done
    let rotations = Math.ceil(seconds / 2.5)

    //print results
    console.log(`The plate was rotated ${rotations} times.`);
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs')