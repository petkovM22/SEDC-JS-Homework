
function findNumber(number, array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i] === number){
        count ++;
        }
    }
    return console.log(`There is ${count} occurrences of number ${number} in the array`);
}

let arr = [5, 3, 6, 5, 10, 25, 5, 55, 13, 9]
findNumber(5,arr);

let arr1 = [1, 2, 3, 10, 15, 8, 2, 39, 65, 2, 22, 2]
findNumber(2,arr1);

let arr2 = [2, 13, 7, 7, 32, 10, 25, 7, 23, 9, 4, 50, 7]
findNumber(7,arr2);


// 

/* function findNumber(number, array) {
    let count = 0;
    array.forEach((n) => (n === number && count++));
    return console.log(`There is ${count} occurrences of number ${number} in the array.`)
    }
let arr = [5, 3, 6, 5, 10, 25, 5, 55, 13, 9]
findNumber(5,arr);

let arr1 = [1, 2, 3, 10, 15, 8, 2, 39, 65, 2, 22, 2]
findNumber(2,arr1);

let arr2 = [2, 13, 7, 7, 32, 10, 25, 7, 23, 9, 4, 50, 7]
findNumber(7,arr2);
 */