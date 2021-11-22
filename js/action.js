// // Условия

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

// for (let i = 0; i < 4; i++)
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

// let calculatSum = function (x, y) {
//     let result = (x + y);
//     console.log(result);
//     return result;
// }
// calculatSum(10, 20)     //<<Такую функцию нельзя вызвать до ее обьявления


// Обьекты  

// const petrName = `Petr`;
// const petrAge = 28;
// const petrSpeciality = `web-designer`;
// const petrCity = `Moscow`;

// const petr = {
//     name: `Petr`,
//     age: 28,
//     speciality: `html coder`,
//     city: `Moscow`
// };
// console.log(petr);








// // dz 11.10

// // Задача №1
// let userName = prompt('Как тебя зовут?')
// alert(`Привет, ${userName}`)

// Задача №2
// let user_birthYear = prompt('Какой у тебя год рождения?')
// const birthYear = 2021
// let age = (birthYear - user_birthYear);
// alert(`Тебе, ${age}`)

// // Задача №3
// const x = prompt('Введите длину стороны квадрата')
// const y = 4
// let long = (x * y);
// alert(`Периметр такого квадрата равен ${long}`)

// // Задача №4
// const r = prompt('Введите радиус окружности')
// const p = 3.1415
// let s = (p * r);
// alert(`Радиус такой окружности равен ${s}`)

// // Задача №5
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

// // Задача №7
// const number = prompt('Укажите обьем флешки в Гб')
// const v = 1024
// const e = 820
// let a = (number * v / e);
// a = Math.round(a)
// alert(`${a} файлов размером в 820 Мб помещается на флешку.`)

// // Задача №8
// const sum = prompt('Сумма денег в кошельке?')
// const price = prompt('Стоимость 1 шоколадки?')
// let a = (sum / price);
// a = Math.round(a)
// let b = (sum % price);
// alert(`${a} шоколадок можно купить ${b} рублей сдачи останется.`)

// // Задача №9
// let a = prompt(`Введите 3-х значное число`);
// let b, sum = 0;
// let z = a;
// while (a > 0) {
//     b = a % 10;
//     sum = sum * 10 + b;
//     a = parseInt(a / 10);
// }
// alert(sum);


// // Задача №10
// const number = prompt(`Введите число`);
// number % 2 === 0 ? (
//     alert("Число четное")
// ) : (
//     alert("Число не четное")
// );



// DZ 2
// // Задача №1
// let year = prompt('Введите Ваш возраст?', '');

// if (year <= 2) alert('Ребенок');
// if (year >= 12 && year <= 18) alert('Подросток');
// if (year >= 18 && year <= 60) alert('Взрослый');
// if (year >= 60) alert('Пенсионер');

// // Задача №2
// const key = prompt(`Намите на клавишу от 0-9`);
// if (key == 0) alert(')');
// if (key == 1) alert('!');
// if (key == 2) alert('@');
// if (key == 3) alert('#');
// if (key == 4) alert('$');
// if (key == 5) alert('%');
// if (key == 6) alert('^');
// if (key == 7) alert('&');
// if (key == 8) alert('*');
// if (key == 9) alert('(');


// // Задача №3
// const number = +prompt(`Введите 3-х значное число: `);
// const number1 = parseInt(number / 100);
// const number2 = parseInt(number / 100) % 10;
// const number3 = (number % 10);
// if (number1 === number2 || number2 === number3 || number1 === number3)
//     alert(`Есть совпадения цифр!`);
// else
//     alert(`Совпадений не найдено`);


// // Задача №4
// const year = prompt(`Введите год`, `2000`);
// if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) { alert(`${year} год високосный`) }
// else if (year % 400 !== 0 || year % 4 !== 0) alert(`${year} год не високосный`)

// // Задача №5
// let b;
// let c;
// let e;
// let a = +prompt("Введите пятизначное число", "")
// if ((a > 9999) && (a < 100000)) {
//     b = a / 10000;
//     a = a % 10000;
//     c = a / 1000;
//     a = a % 1000;
//     a = a % 100;
//     e = a / 10;
//     a = a % 10;

//     if ((b == a) && (c == e)) {
//         alert("Это число палиндром");
//     }
//     else {
//         alert("Это число не палиндром");
//     }
// }
// else {
//     alert("Вы ввели не пятизначное");
// }


// // Задача №6
// const usdChange = prompt(`Сколько долларов вы хотите поменять?`, 22);
// const usd = 70.93;
// const eur = 82.46;
// const uan = 11.06;
// const azn = 41.71;
// let a = (usdChange * 70.93 / eur);
// alert(`Вы получите ${a} евро.`)
// let b = (usdChange * 70.93 / uan);
// alert(`Вы получите ${b} юаней.`)
// let c = (usdChange * 70.93 / azn);
// alert(`Вы получите ${c} манат.`)

// // Задача №7
// const sumPurch = prompt(`Введите сумму покупки`, 277);
// let thereSale;

// if (sumPurch <= 300 && sumPurch >= 200 || sumPurch >= 300 && sumPurch <= 500) {
//     thereSale = true;
//     sumSale = sumPurch * (3 / 100);
//     sale = sumPurch - sumSale;
// }
// if (sumPurch >= 300 && sumPurch <= 500) {
//     thereSale = true;
//     sumSale = sumPurch * (5 / 100);
//     sale = sumPurch - sumSale;
// }
// if (sumPurch >= 500) {
//     thereSale = true;
//     sumSale = sumPurch * (7 / 100);
//     sale = sumPurch - sumSale;
// }
// else {
//     thereSale = false;
//     alert(`Скидки нету`);
// }
// console.log(thereSale);
// console.log(sale);
// alert(`Сумма к оплате со скидкой ${sale}`);



// // Задача №8
// const longCirle = prompt(`Длина окружности`);
// const longSquare = prompt(`Периметр квадрата`);

// let r = longCirle / (Math.PI * 2) * 2;
// let h = longSquare / 4;

// let message = (r < h) ? `Такая окружность может поместиться в указанный квадрат.` :
//     (r > h) ? `Такая окружность не может поместиться в указанный квадрат!` :
//         '';
// console.log(r);
// console.log(h);
// alert(message);


// // Задача №9 (Не работает!!!!)
// const question1 = confirm(`2+2=4 ?`);
// let balls;
// let a = 2;

// if (question1 == true || question1 == false) {
//     question1 == true ?
//         alert(`Правильный ответ +2 балла. У Вас ${balls = + a} баллов.`) :
//         alert(`Неправильный ответ`);
// }

// const question2 = confirm(`5+5=10 ?`);

// if (question1 == true || question1 == false) {
//     question1 == true ?
//         alert(`Правильный ответ +2 балла. У Вас ${balls = ++ a}баллов.`) :
//         alert(`Неправильный ответ`);
// }

// const question3 = confirm(`6*6=36 ?`);
// if (question1 == true || question1 == false) {
//     question1 == true ?
//         alert(`Правильный ответ +2 балла. У Вас ${balls = + a} баллов.`) :
//         alert(`Неправильный ответ`);
// }
// alert(`Вы набоали ${balls} баллов.`);
// console.log(balls);
// console.log(a);



// // Задача №10
// const d = 15, m = 10, y = 2021;

// if (d && m && y) {
//     n10(d, m, y);
// } else {
//     alert('Плохие данные');
// }

// function n10(d, m, y) {
//     const isVis = y % 400 === 0 || (y % 4 === 0 && y % 100 !== 0);

//     let next = false;

//     switch (m) {
//         case 1:
//         case 3:
//         case 5:
//         case 7:
//         case 8:
//         case 10:
//         case 12:
//             next = d === 31;
//             break;
//         case 4:
//         case 6:
//         case 9:
//         case 11:
//             next = d === 30;
//             break;
//         case 2:
//             next = isVis ? d === 29 : d === 28;
//         default:
//             alert('всё плохо');
//     }

//     if (m === 12 && next) {
//         console.log('01.01.' + (y + 1));
//     } else {
//         next ? console.log('01.' + (m + 1) + '.' + y) : console.log((d + 1) + '.' + m + '.' + y);
//     }
// }


// // DZ 3
// // Задача №1
// let a = +prompt(`Введите число начала отсчета`);
// let b = +prompt(`Введите число конца отсчета`);
// let sum = 0;
// while (a <= b) {
//     sum += a; a++;
// }
// console.log(sum);
// alert(`Сумма всех чисел в данном диапазоне равна ${sum}`);


// // Задача №2
// let a = +prompt(`Введите первое число`);
// let b = +prompt(`Введите второе число`);

// while (a) {

// }


// // Задача №3
// const a = prompt(`Введите число`, 48);
// while (condition) {

// }

// // Задача №4
// let n = +prompt(`Введите число`, 48);
// let i = 1;
// while ((n /= 10) >= 1) { i++ }
// alert(`В этом числе ${i} цифр`);

// // Задача №5
// let number = +prompt(`Введите число`);
// let plus = 0, minus = 0, zero = 0;
// do {
//     if (number > 0) {
//         plus++
//         console.log(plus);
//     }
//     if (number < 0) {
//         alert(`dasf`);
//     }
//     if (number == 0) {
//         alert(`dasf`);
//     }
// }
// while (number > 0 || number > 0 || number == 0)

// // DZ 4
// // Задача №7
// function time(h = `00`, m = `00`, s = `00`,) {
//     let h1 = 0 , m1 = 0 , s1 = 0;
//     if (h > 9) {
//         h1 = h;
//     }
// else if ((h>0) && (h<10)) {
//     h1 = `0` + h
// }
// else {
//     h1 = h;
// }
// console.log(`${h1}:${m1}:${s1}` );
// }
// const a = +prompt(`Часы`);
// time(a);


// // Задача №8



// // Задача №10
// решить задачу переводом в секунды

// // DZ 5
// // Задача №2
// function NOD(a,b) {
//     if ( b===0) return a;
//     if (a>b)
//         return NOD (b, a % b)
//     else
//         return NOD(b, a % b)
// }
// console.log();

// // Задача №3
// const number = `546465`;
// let result = 0;

// for (let i = 0; i > number.length; i++) {
// result = number[i] >= result ? number[i] : result;  
// }
// console.log(result);

// function getMaxNum(number) {
//     if (
//         number.length === 0) return
//         return getMaxNum();
// }







// // DZ 6
// // Задача №1
// const lada = {
//     manufacturer: `vaz`,
//     model: 2101,
//     year: 1970,
//     kph: 70,
// };
// console.log(lada.manufacturer);
// const s = prompt(`Введите расстояние между городами(в киломатрах).`)
// let t = (s / kph);

// alert(`Вам необходимо двигаться со скоростью ${v} км/ч , чтобы
// успеть вовремя.`)
// const s = prompt(`Введите расстояние между городами(в киломатрах).`)

// function isT(lada) {
//     // const s = prompt(`Введите расстояние между городами(в киломатрах).`)
//     let t = s / lada.kph;
//     console.log(t);
// }

// const petr = {
//     name: `petr`,
//     age: 18,
//     speciality: `Fullstack`,
//     city: `Tula`,
//     sayHi: function kid() {
//         console.log(`Привет ${this.name}`);
//     }
// }
// console.log();
// const fruits = [`aplle`, `mango`, `apelsin`]
// console.log(fruits);
// let total = fruits.push(`mandarin`, `сherry`)
// const map = new.Map(fruits)
// console.log(fruits);
// console.log(map);


// let arrNew = [
//     `Ваня`, `Коля`, `Андрей`
// ];
// console.log(arrNew);
// arrNew.splice(0, 1, `Алексей`);
// console.log(arrNew);
// let remuved = arrNew.splice(0, 1);
// console.log(arrNew);
// arrNew.shift();
// console.log(arrNew);
// arrNew.unshift(`Ваня`, `Коля`);
// console.log(arrNew);
// arrNew.push(`Алексей`);
// console.log(arrNew);
// delete arrNew[2];
// console.log(arrNew);
// console.log(arrNew[2]);





// DOM дерево

// const htmlElement = document.documentElement;      //Получение полностью всей страницы
const bodyElement = document.body;                 //Получение отдельных элементов
// const headElement = document.head;              //Получение отдельных элементов
// console.log(htmlElement);
// console.log(bodyElement);
// console.log(headElement);
// const firstChildNode = bodyElement.firstChild;
// const lastChildNode = bodyElement.lastChild;
// console.log(firstChildNode);
// console.log(lastChildNode);

// const childNodes = bodyElement.childNodes;  // Получаем коллекцию всех дочерних узлов, включая текстовые.
// console.log(childNodes);
// console.log(bodyElement.hasChildNodes()); //Для проверки наличия дочерних узлов. true/false
// //Перебор коллекции for of
// for (let node of childNodes) {
//     console.log(node); //Покажет все узлы коллекции
// }

// const previousSiblingNode = bodyElement.previousSibling;    //Получаем предыдущий узел обьекта
// const nextSiblingNode = bodyElement.nextSibling;    //Получаем следующий узел обьекта
// const parentNode = bodyElement.parentNode;  //Получаем родителя обьекта
// console.log(previousSiblingNode);
// console.log(nextSiblingNode);
// console.log(parentNode);

// const bodyChildren = bodyElement.children;  // Получаем коллекцию всех дочерних елементов.
// console.log(bodyChildren);

// const firstChild = bodyElement.firstElementChild;  //Получаем первый дочерний елемент
// const lastChild = bodyElement.lastElementChild;    //Получаем последний дочерний елемент
// console.log(firstChild);
// console.log(lastChild);

// const previousSibling = bodyElement.previousElementSibling; //Получаем предыдущий елемент
// const nextSibling = bodyElement.nextElementSibling; //Получаем следующий елемент
// const parent = bodyElement.parentElement;   //Получаем родительский елемент
// console.log(previousSibling);
// console.log(nextSibling);
// console.log(parent);

// const elementOne = document.querySelectorAll(`.red__square`);   //Поиск по классу
// console.log(elementOne);
// const elementTwo = document.querySelectorAll(`div`);    //Поиск по тегу
// console.log(elementTwo);
// const elementThree = document.querySelectorAll(`div.container`); //Поиск по тегу и классу
// console.log(elementThree);
// const elementFour = document.querySelectorAll(`.page-wrapper>div`); //Поиск по тегу первого уровня вложенности
// console.log(elementFour);
// const elementFive = document.querySelectorAll(`.header, .footer`); //Поиск по нескольким классам
// console.log(elementFive);
// const elementSixe = document.querySelectorAll(`.page-wrapper .landing-page`); //Поиск по вложенным классам
// console.log(elementSixe);
// const elementSeven = document.querySelectorAll(`#qwerty`); //Поиск по ID
// console.log(elementSeven);
// const elementEight = document.querySelectorAll(`[data-item]`); //Поиск по атрибуту
// console.log(elementEight);
// const elementNine = document.querySelectorAll(`[data-item="10"]`); //Поиск по атрибуту
// console.log(elementNine);

//querySelectorAll - статичная коллекция!

// const element = document.querySelectorAll(`li`);    //Получение конкретного элемента коллекции
// for (const item of element) {
//     console.log(item);
// }

// element.forEach(item => {
//     console.log(item);
// });

// const helloList = document.querySelectorAll(`.hello__list`);
// const helloList = document.querySelector
// const helloListItems = helloList[0].querySelectorAll(`li`);
// console.log(helloListItems);

// const helloList = document.querySelectorAll(`.hello__list`)[0];
// // const helloList = document.querySelector(`.hello__list`);
// console.log(helloList);


//Поиск произвольного элемента
//Возвращает живую коллекцию!!!

// document.getElementById и document.getElementsBy..!!!!!! РАЗНЫЕ ВЕЩИ!!!!

// const elem = document.getElementById(`qwerty`);
// console.log(elem);

// const elem = document.getElementsByTagName(`section`);
// console.log(elem);

// const elem = document.getElementsByClassName(`footer__nav`);
// console.log(elem);

// const listStatic = document.querySelectorAll(`.hello__list`);   //Стаитичная коллекция
// const listLive = document.getElementsByClassName(`hello__list`);    //Живая коллекция
// console.log(listStatic);
// console.log(listLive);

// const elem = document.querySelector(`.good__bye`);
// const parentList = elem.closest(`.container`);
// console.log(parentList);

const menuButton = document.querySelector(`.content__style`);
const dropDown = document.getElementById(`drop__down`);
const contentView = document.querySelector(`.content__hidden`);
// console.log(dropDown);
console.log(contentView);

menuButton.addEventListener(`mouseover`, function () {
    contentView.classList.toggle(`content__hidden`)
    console.log(`показать`);
});
dropDown.addEventListener(`mouseout`, function () {
    contentView.classList.toggle(`content__hidden`)
    console.log(`скрыть`);
});