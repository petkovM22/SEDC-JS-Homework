function findNumber(array, type) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        const number = array[i];
    if (type === "even" && number % 2 === 0) {
        result.push(number);
    }
    else if (type === "odd" && number % 2 === 1) {
        result.push(number);
    }
    }
    return result;
}

console.log(findNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "even"));

console.log(findNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "odd"));
