let sumOfSquares = 0;

for (let i = 101; i <= 150; i++) {
    let square = Math.pow(i, 2);
    sumOfSquares += square;
    console.log(`The square of ${i} is ${square}.`);
}

console.log(sumOfSquares);

