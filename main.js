// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
//
// console.log(str1.length);
// console.log(str2.length);
// console.log(str3.length);




// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
//
// console.log(str1.toUpperCase());
// console.log(str2.toUpperCase());
// console.log(str3.toUpperCase());



// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str1 = 'HELLO WORLD';
// let str2 = 'LOREM IPSUM';
// let str3 = 'JAVASCRIPT IS COOL';
//
// console.log(str1.toLowerCase());
// console.log(str2.toLowerCase());
// console.log(str3.toLowerCase());



// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// let str1 = str.trim();
// str = str1;
// console.log(str);




// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
//
// function stringToarray(str) {
//     console.log(str.split(' '));
// }
//
// let arr = stringToarray(str);




// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
//
// let map = arr.map(value => value + '');
// arr = map;
// console.log(arr);




// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let numb = [11, 21, 3];
//
//
// function sortNums(numb, text) {
//     if (text === 'ascending') {
//         numb.sort((numb1, numb2) => numb1 - numb2);
//         console.log(numb);
//     }
//
//     else if (text === 'descending') {
//         numb.sort((numb1, numb2) => numb2 - numb1);
//         console.log(numb);
//     }
// }
//
// sortNums(numb,'descending');



// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// coursesAndDurationArray.sort((coursesAndDurationArray1, coursesAndDurationArray2) => coursesAndDurationArray1.monthDuration - coursesAndDurationArray2.monthDuration);
// console.log(coursesAndDurationArray);
//
//
//
// let f = [];
//     for (let key of coursesAndDurationArray) {
//         if (key.monthDuration > 5) {
//             f.push(key)}
//         }
// console.log(f);



// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let obj = [
    {id: 8, cardSuit: 'spade', value: 'ace', color: 'black'},
    {id: 1, cardSuit: 'diamond', value: 6, color: 'red'},
    {id: 2, cardSuit: 'heart', value: 7, color: 'black'},
    {id: 3, cardSuit: 'clubs', value: 8, color: 'red'},
    {id: 5, cardSuit: 'clubs', value: 10, color: 'black'},
    {id: 1, cardSuit: 'diamond', value: 6, color: 'red'},
    {id: 7, cardSuit: 'clubs', value: 'king', color: 'black'},
    {id: 9, cardSuit: 'clubs', value: 'joker', color: 'black'},
    {id: 6, cardSuit: 'spade', value: 'queen', color: 'black'},
    {id: 4, cardSuit: 'diamond', value: 9, color: 'red'},
]

let reduce = obj.reduce(function (accumulator, user) {
    if (user.value === 'ace') {
        accumulator.blackAce.push(user);
    }
    if (user.value === 6 ) {
        accumulator.$666.push(user);
    }
    if (user.color === 'red') {
        accumulator.colorRed.push(user);
    }
    if (user.cardSuit === 'diamond') {
        accumulator.diamond.push(user);
    }

    // ****************one***************

    if (user.cardSuit === 'clubs') {
        if (user.id > 3) {
            accumulator.clubs9.push(user);
        }
    }

    // ****************two***************

    // if (user.cardSuit === 'clubs') {
    //     if (user.value > 8 || user.value.length > 2) {
    //         accumulator.clubs9.push(user);
    //     }
    // }

    // ***********************************

    return accumulator;
}, {blackAce: [], $666: [], colorRed: [], diamond: [], clubs9: []});
console.log(reduce);








// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// let obj = [
//     {cardSuit: 'spade', value: 'ace', color: 'black'},
//     {cardSuit: 'diamond', value: '6', color: 'red'},
//     {cardSuit: 'heart', value: '7', color: 'black'},
//     {cardSuit: 'clubs', value: '8', color: 'red'},
//     {cardSuit: 'spade', value: '10', color: 'black'},
//     {cardSuit: 'diamond', value: 'jack', color: 'black'},
//     {cardSuit: 'heart', value: 'king', color: 'red'},
//     {cardSuit: 'clubs', value: 'joker', color: 'black'},
//     {cardSuit: 'spade', value: 'queen', color: 'black'},
//     {cardSuit: 'diamond', value: '9', color: 'red'},
// ]
//
// let reduce = obj.reduce(function (accumulator, user) {
//     if (user.cardSuit === 'spade') {
//         accumulator.spade.push(user);
//     }
//     else if (user.cardSuit === 'diamond' ) {
//         accumulator.diamond.push(user);
//     }
//     else if (user.cardSuit === 'heart') {
//         accumulator.heart.push(user);
//     }
//     else {
//         accumulator.clubs.push(user);
//     }
//     return accumulator;
// }, {spade: [], diamond: [], heart: [], clubs: []});
// console.log(reduce);