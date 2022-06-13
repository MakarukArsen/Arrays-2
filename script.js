// 1. Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел.
const getRandomNumber = function(min, max){
    return Math.floor(Math.random() * (++max - min) + min);
}
const randomArray = getRandomArray(length = 10, min = 1, max = 10);
function getRandomArray (length, min, max) {
    const randomNumbersArr = [];
    for(let i = 0; i < length; i++){
        randomNumbersArr.push(getRandomNumber(min, max));
    }
    return randomNumbersArr;
}
console.log(randomArray);

// 2. Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ 
const getModa = function (numbers){
    let result = [];
    let maxModa = 0;
    let numbersArr = numbers.filter((item) => Number.isInteger(item));
    numbersArr.forEach(item => {
        const numberCount = numbersArr.filter(element => element === item).length;
        if(numberCount > maxModa){
            maxModa = numberCount;
            result = [item];
        } else if(numberCount === maxModa){
            result.push(item);
        }
    });
    let moda = result.filter((element, index) => result.indexOf(element) === index);
    return moda;
}
console.log(getModa(randomArray));

// 3. Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
const getAverage = (...numbers) => {
    let numbersArr = numbers.slice().filter((item) => Number.isInteger(item));
    let result = numbersArr.reduce((previousValue, currentValue) => {
        let result = (previousValue + currentValue);
        return result;
    })
    result /= numbersArr.length;
    return result;
}
console.log(getAverage(3, 2, 7, 2, 2, 2, 7, 4, 9, 1));

// 4 Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
const getMedian = (numbers) => {
    let numbersArr = numbers.slice().sort((a, b) => a - b).filter((item) => Number.isInteger(item));
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
    const numbersArr = numbers.slice().filter((item) => (item % 2) !== 0);
    return numbersArr;
}
console.log(filterEvenNumbers(randomArray));

// 6. Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
const countPositiveNumbers = (numbers) => {
    let counter = 0;
    numbers.forEach((item) => {
        if (item > 0) counter++;
    });
    return counter;
}
console.log(countPositiveNumbers([-1, 0, 5, 7, -2, 14, -7, 0, 8]));

// 7. Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
const getDividedByFive = (numbers) => {
    const numbersArr = numbers.slice().filter((item) => item % 5 === 0);
    if(!numbersArr.length){
        return "В масиві нема чисел які на ціло діляться на 5";
    }
    return numbersArr;
}
console.log(getDividedByFive(randomArray));

//  8. Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*)
const badWords = ["shit", "fuck"];
const replaceBadWords = (string) => {
    const result = string.split(" ").map(item => {
        item = item.toLowerCase();
        badWords.forEach(word => {
            if(item.includes(word)){
                item = item.replaceAll(word, new Array(word.length).fill('*').join(''));
            }
        });
        return item;
    }).join(" ");
    return result;
}
console.log(replaceBadWords("Holyshitshit shit fuckshit shitandFuck! holy shit fuck"));

// 9. Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви. Якщо букв менше трьох – не розбиває. Пробіли завжди видаляються. Рядок приводится до нижнього регістру. 
const divideByThree = (word) => {
    if(word.length < 3){
        return "Слово не може бути менше трьох букв!!!";
    }
    word = word.toLowerCase().split("");
    let result = [];
    for(let i = 0; i < word.length; i + 3){
        result.push(word.splice(0, 3).join(""));
    }
    return result;
}
console.log(divideByThree("Commander"));
