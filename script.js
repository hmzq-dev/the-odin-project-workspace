function getPrimeNumbers(end) {
    const primeNumbers = [];
    primeLoop: 
    for (let num = 2; num <= end; num++) {
        for (let divisor = 2; divisor < num; divisor++) {
            if (num % divisor === 0) {
                continue primeLoop;
            }
        }
        primeNumbers.push(num)
    }
    return primeNumbers;
}

console.log(getPrimeNumbers(100).join(", "))
