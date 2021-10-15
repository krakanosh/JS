// //Условия

// let x = 5;
// let y = 5;

// if (/*Условие*/) {
//     /*Код который будет выполнен, если задание верно.*/
// }   else {
//     /*Код который будет выполнен, если задание НЕ верно.*/
// }


// if (x > y) {
//     alert(`x > y`)
// } else if (x === y) {
//     alert(`x = y`);
// } else {
//     (x < y)
//     console.log(`x < y`)
// };


// // SWITCH CASE
// const mark = 5

// switch (mark) {
//     case 1:
//         console.log(`Вы плохо подготовились, Вам Кол!`);
//         break
//     case 2:
//         console.log(`Неудовлетворительно`);
//         break
//     case 3:
//         console.log(`Можно было и лучше`);
//         break
//     case 4:
//         console.log(`Хорошо, постарался!`);
//         break
//     case 5:
//         console.log(`Молодец! Отлично!`);
//         break
//     default:
//         alert(`Такой оценки не существует`);
// }


// Массивы

// const fruit1 = `Яблоко`;
// const fruit2 = `Груша`;
// const fruit3 = `Слива`;
// const fruit4 = `Апельсин`;

// const fruits = [`Яблоко`, `Груша`, `Слива`, `Апельсин`];
// console.log(fruits);
// console.log(fruits[1], fruits[3]);

// const arrayExample = [`Яблоко`, 50, true, `Груша`, false, 200];
// console.log(arrayExample);


// Цикл for

// console.log(`strat`);

// for (let i = 0; i < 10; i++) {
//     console.log(`i =` + i);
// }

// console.log(`finish`);

// Обход массива с помощью цикла for

// const fruits = [`Яблоко`, `Груша`, `Слива`, `Апельсин`];
// console.log(fruits.length);

// console.log(1);
// console.log(2);
// console.log(3);

// for (let i = 0; i <4; i++)
//     console.log(fruits[i]);

// Обход массива с помощью цикла .forEach()

// const fruits = [`Яблоко`, `Груша`, `Слива`, `Апельсин`];
// fruits.forEach(function (value, i) {
//     console.log(`Элемент ${value} имеет индекс ${i}`);
// })

// Функции

// let userName = `Алексей`;
// let greeting = `Привет ${userName}! Как дела?`;
// console.log(greeting);

// function greeting(name) {
//     console.log(`Привет ${name}! Как дела?`);
// }
// greeting(`Юрий`);
// greeting(`Петр`);
// greeting(`Алексей`);


// function calculatSum(x, y) {
//     let result = (x + y);
//     return result;  // Возврат результата(15)
// }
// // let answer = calculatSum(5, 10)  //Если не вернуть результат - будет undefined
// // console.log(answer);

// let res = calculatSum(calculatSum(10, 20), (calculatSum(40, 30)));
// console.log(res);


// Функции function Declaretion
// calculatSum(10, 25) //<В таком виде функцию можно вызывать до её обьявления

// function calculatSum(x, y) {
//     let result = (x + y);
//     console.log(result);
//     return result;
// }
// calculatSum(10,15)  //< И после...


// Функции function Expression

let calculatSum = function (x, y) {
    let result = (x + y);
    console.log(result);
    return result;
}
calculatSum(10, 20)     //<<Такую функцию нельзя вызвать до ее обьявления


// Обьекты  

const petrName = `Petr`;
const petrAge = 28;
const petrSpeciality = `web-designer`;
const petrCity = `Moscow`;

const petr = {
    name: `Petr`,
    age: 28,
    speciality: `html coder`,
    city: `Moscow`
};
console.log(petr);








// dz 11.10

// Задача №1
// let userName = prompt('Как тебя зовут?')
// alert(`Привет, ${userName}`)

// Задача №2
// let user_birthYear = prompt('Какой у тебя год рождения?')
// const birthYear = 2021
// let age = (birthYear - user_birthYear);
// alert(`Тебе, ${age}`)

// Задача №3
// const x = prompt('Введите длину стороны квадрата')
// const y = 4
// let long = (x * y);
// alert(`Периметр такого квадрата равен ${long}`)

// Задача №4
// const r = prompt('Введите радиус окружности')
// const p = 3.1415
// let s = (p * r);
// alert(`Радиус такой окружности равен ${s}`)

// Задача №5
// const s = prompt('Введите расстояние между городами(в киломатрах).')
// const t = prompt('За сколько часов Вы хотите добраться?')
// let v = (s / t);
// alert(`Вам необходимо двигаться со скоростью ${v} км/ч , чтобы
// успеть вовремя.`)

// // Задача №6
// const number = prompt('Сколько долларов вы хотите поменять?')
// const e = 1.15
// let a = (number / e);
// alert(`Вы получите ${a} евро.`)

// Задача №7
// const number = prompt('Укажите обьем флешки в Гб')
// const v = 1024
// const e = 820
// let a = (number * v / e);
// alert(`${a} файлов размером в 820 Мб помещается на флешку.`)

// Задача №8
// const sum = prompt('Сумма денег в кошельке?')
// const price = prompt('Стоимость 1 шоколадки?')
// let a = (sum / price);
// let b = (sum % price);
// alert(`${a} шоколадок можно купить ${b} рублей сдачи останется.`)

// Задача №9
// const sum = prompt('Введите 3-х значное число')
// let a = (sum / price);
// let b = (sum % price);
// let с = (sum % price);
// alert(`${a} ${b} ${b}`)

// Задача №10
