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

const form = document.querySelector(".feedback-form");
const email = document.querySelector(".feedback-form input");
const textarea = document.querySelector(".feedback-form textarea");

const STORAGE_KEY = "feedback-form-state";

const formData = {
    email: " ",
    message: " ",
};
  
const saveRes = JSON.parse(localStorage.getItem(STORAGE_KEY));

if (saveRes) {
    textarea.value = saveRes.message;
    email.value = saveRes.email;
    formData.email = email.value;
    formData.message = textarea.value; 
}

email.addEventListener("input", throttle(onInputEmail, 500));
textarea.addEventListener("input", throttle(onInputTextarea, 500));
form.addEventListener("submit", onSubmit);

function onInputEmail(event) {
    formData.email = event.target.value;
    console.log(formData.email);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function onInputTextarea(event) {
    formData.message = event.target.value;
    console.log(formData.message);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function onSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
    formData.email = " ";
    formData.message = " ";
};
