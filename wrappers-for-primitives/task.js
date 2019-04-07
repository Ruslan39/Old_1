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
      percent.includes(' ') || contribution.includes(' ') || amount.includes(' ')) {
        alert(`Для ввода данных используйте только 0123456789 и "." для десятых долей. Например 6.5; 900000`);
    }

  date = new Date(date);
  let currentDate = new Date();
  let millisecondsInMonth = 1000 * 60 * 60 * 24 * 29.3;

  if ((date - currentDate) < 0) {
    return alert('Дата окончания ипотеки уже в прошлом. Проверьте, пожалуйста, правильность ввода даты');
  } else if ((date - currentDate) < millisecondsInMonth) {
    return alert('Минимальный срок ипотеки - 1 месяц. Проверьте, пожалуйста, правильность ввода даты');
  }

  let сredit = +amount - +contribution;
  let monthPercent = (+percent / 100 ) / 12;    
  let n = Math.floor((date - currentDate) / millisecondsInMonth);
  let monthPayment = сredit * (monthPercent + (monthPercent / (Math.pow((1 + monthPercent), n) - 1 ) ) );
  let totalAmount = monthPayment * n;

  console.log(`Общая сумма ипотеки сроком на ${n} месяцев составляет: ${totalAmount.toFixed(2)} руб.`);
  return totalAmount.toFixed(2);
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    name = String(name);

    if ((name.length === 0) || (name == 'undefined') || (name == 'null')) {
        name = 'Аноним';
    }

    console.log(`Привет, мир! Меня зовут ${name}.`);

    let greeting = (`Привет, мир! Меня зовут ${name}.`);
    return greeting;
}