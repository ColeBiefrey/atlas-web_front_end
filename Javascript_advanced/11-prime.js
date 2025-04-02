function countPrimeNumbers() {
    let count = 0;
    
    function isPrime(n) {
        if (n < 2) return false;
        for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) return false;
        }
        return true;
    }
    
    for (let num = 2; num <= 100; num++) {
        if (isPrime(num)) count++;
    }
    
    return count;
}

setTimeout(() => {
    const startTime = performance.now();
    for (let i = 0; i < 100; i++) {
        countPrimeNumbers();
    }
    const endTime = performance.now();
    console.log(`Execution time of printing countPrimeNumbers was ${endTime - startTime} milliseconds.`);
}, 0);