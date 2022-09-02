const maxVal = 100;
const primes = [2, 3];
let val = 4;
let isPrime = true;
for(val; val < maxVal; val++) {
    for (let index = 0; index < primes.length; index++) {
        const prime = primes[index];
        if(val % prime == 0) {
            isPrime = false;
            break;
        }
    }
    if(isPrime) {
        primes.push(val);
    }
    isPrime = true;
}

console.log(primes.join(', '));