function countPrimeNumbers() {
    let count = 0;

    for (let i = 2; i <= 100; i++) {
        if (PrimeNum(i))
            count += 1;
    }
    return count;
}

function PrimeNum(num) {
    for (let j = 2; j < num / 2; j++) {
        if (num % j == 0)
            return false;
    }
    return true;
}

const t0 = performance.now();
countPrimeNumbers();
const t1 = performance.now();

console.log (`Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`);
