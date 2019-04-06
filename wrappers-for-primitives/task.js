"use strict";

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {

    if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || 
        percent.length == 0 || contribution.length == 0 || amount.length == 0 ||
        percent.length == ' ' || contribution.length == 0 || amount.length == 0)  {
        alert(`Повторите ввод`);
    }
    
    //|| )

    //return totalAmount;
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    //return greeting;
}

/*Проконтролируйте корректность введенных данных.
Посчитайте сумму, которую необходимо вернуть банку. (сумма кредита минус первоначальный взнос)
Ежемесячная оплата рассчитывается по формуле: Платеж=S*(P+P/(((1+P)^n)-1)), где: S - сумма кредита, 
P - 1/12 процентной ставки (от 0 до 1), n - количество месяцев ^ - возведение в степень
Посчитайте общую сумму, которую придется заплатить клиенту.
Выведите результат в консоль, а также верните его из функции.*/