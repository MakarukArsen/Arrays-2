// 1. Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел.
const randomArray = getRandomArray(10, 1, 10);
function getRandomArray (length, min, max) {
    const getRandomNumber = function(min, max){
        const RandomNumber = Math.floor(Math.random() * (++max - min) + min);
        return RandomNumber;
    }
    const randomNumbersArr = [];
    for(let i = 0; i < length; i++){
        randomNumbersArr.push(getRandomNumber(min, max));
    }
    return randomNumbersArr;
}
console.log(randomArray);

// 2. Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// const getModa = function (numbers){
//     let numbersArr = numbers.slice();
//     numbersArr.sort((a, b) => a - b)
//     let moda = [];
//     let numberOnTest = 0;
//     let numberCounter;
//     console.log(numbersArr)
//         for(let i = 0; i < numbersArr.length; i++){
//             numberOnTest = numbersArr[i];
//             numberCounter = 0;
//             for(let j = 0; j < numbersArr.length; j++){
//                 if(numberOnTest === numbersArr[j]){
//                     numberCounter++;
//                 }
//             }
//             if(numberCounter >= 2){
//                 moda.push(numberOnTest);
//             }
//     }
//     return moda
// }
// console.log(getModa(randomArray));

// 3. Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
const getAverage = (numbers) => {
    let numbersArr = numbers.slice().filter((item) => Number.isInteger(item));
    let result = numbersArr.reduce((previousValue, currentValue) => {
        let result = (previousValue + currentValue);
        return result;
    })
    result = result / numbers.length;
    return result;
}
console.log(getAverage(randomArray));

// 4 Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
const getMedian = (numbers) => {
    numbersArr = numbers.slice().sort((a, b) => a - b);
    numbersArr = numbersArr.filter((item) => Number.isInteger(item));
    let nextIndex = numbersArr[Math.ceil(numbersArr.length / 2)];
    let prevIndex = numbersArr[Math.floor(numbersArr.length / 2) - 1];
    if(numbersArr.length % 2 !== 0){
        return numbersArr[Math.ceil(numbersArr.length / 2) - 1];
    } else {
        return (nextIndex + prevIndex) / 2;
    }
}
console.log(getMedian(randomArray));

// 5. Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції
const filterEvenNumbers = (numbers) => {
    const numbersArr = numbers.slice().filter((item) => (item % 2) !== 0);;
    return numbersArr;
}
console.log(filterEvenNumbers(randomArray));

// 6. Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
const countPositiveNumbers = (numbers) => {
    let counter = 0;
    let numbersArr = numbers.forEach((item) => {
        if (item > 0) counter++
        
    });
    return counter;
}
console.log(countPositiveNumbers([-1, 0, 5, -2, 14, -7, 0, 8]));

// 7. Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
const getDividedByFive = (numbers) => {
    const numbersArr = numbers.slice().filter((item) => item % 5 === 0)
    if(!numbersArr.length){
        return "В масиві нема чисел які на ціло діляться на 5"
    }
    return numbersArr
}
console.log(getDividedByFive(randomArray));

//  8. 