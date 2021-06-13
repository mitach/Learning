function centuriesToMinutes(centuries) {
    //centuries to years
    let years = centuries * 100;

    //years to days


    let days = Math.trunc(years * 365.2422);

    //days to hours
    let hours = days * 24;

    //hours to minutes
    let minutes = hours * 60;

    //print result
    console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
}

centuriesToMinutes(1);