var sleepCheck = function(numHours) {
    if (numHours >= 8) {
    //  ^^^^^^^^
        return "You're getting plenty of sleep! Maybe even too much!";
    } else if (numHours < 8) {
    //     ^^  ^^^^^^^^
        return "Get some more shut eye!";
    }
}
console.log(sleepCheck(5));