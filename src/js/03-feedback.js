// В HTML есть разметка формы.Напиши скрипт который будет сохранять значения полей в локальное хранилище 
// когда пользователь что - то печатает.
// Разбей его на несколько подзадач:
// 1.Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email 
// и message, в которых сохраняй текущие значения полей формы.Пусть ключом для хранилища будет 
// строка "feedback-form-state".
// 2.При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы. 
// В противном случае поля должны быть пустыми.
// 3.При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message и текущими 
// их значениями в консоль.
// 4.Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд.Для этого добавь в проект 
// и используй библиотеку lodash.throttle.

import throttle from 'lodash.throttle';
// console.log(throttle);

// const form = document.querySelector(".feedback-form");

// form.addEventListener("input", onInput);
// form.addEventListener("textarea", onTextarea);
// form.addEventListener("button", onButton);

// function onInput(event) {
//     localStorage.getItem("feedback-form-state")
// };

// function onTextarea(event) {

// };

// function onButton(event) {

// };