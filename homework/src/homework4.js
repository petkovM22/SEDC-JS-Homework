function sumMaxMin(arr) {
    let min = arr[0];
    let max = arr[0];

    for (i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return {
        min: min,
        max: max,
        sum: min + max
    }
}

let arr = [3, 15, 6, 9, 4];
console.log(sumMaxMin(arr));