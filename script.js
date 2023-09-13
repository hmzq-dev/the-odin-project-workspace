function sortArray(array) {
    let numbersSwitched = false;
    do {
        numbersSwitched = false;
        for (let index = 0; index < array.length; index++) {
            if (array[index] > array[index + 1]) {
                let tmp = array[index];
                array[index] = array[index + 1];
                array[index + 1] = tmp;
                numbersSwitched = true;
            }
        }
    } while (numbersSwitched)

    return array;
}


let arrayToSort = [9, 1, 3, 12, 8, 0, 7, 10, 5, 6, 11, 2, 4];

console.log(sortArray(arrayToSort));