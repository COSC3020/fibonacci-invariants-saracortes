function fib(n) {
    if (n === 0) {
        return [0];
    } 
    if (n === 1) {
        return [0, 1];
    }
    let prevFib = fib(n - 1);
    prevFib.push(prevFib[prevFib.length - 1] + prevFib[prevFib.length - 2]);

    return prevFib;

}
