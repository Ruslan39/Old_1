'use strict';

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    let d = Math.pow(b, 2) - 4 * a * c;
    let x, x1, x2;

    if (d < 0) {
        console.log ('Данное квадратное уравнение корней не имеет!');
    } else if (d == 0) {
        console.log('Квадратное уравнение имеет 1 корень: ' + (x = ((-b + Math.sqrt(d))/(2 * a))));        
    } else {
        x1 = ((-b + Math.sqrt(d))/(2 * a));        
        x2 = ((-b - Math.sqrt(d))/(2 * a));
        console.log('Квадратное уравнение имеет 2 корня: ' + (x = [x1, x2]));        
    }

    return x;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name, dateOfBirthday){
    let age = (new Date().getFullYear() - dateOfBirthday.getFullYear());

    console.log(`Возраст посетителя ${name} - ${age}`);
    
    if (age >= 18) {
        console.log(`Не желаете ли олд-фэшн, ${name}?`);
    } else {
        console.log(`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`);
    }
    
    return age;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    if (marks.length > 5) {
        console.log(`Ученик получил ${marks.length} оценок`);

        for (let i = marks.length; i > 5; i--) {
            marks.pop();
        }
    }

    let sumMarks = 0;

    for (let i = 0; i < marks.length; i++) {
        sumMarks += marks[i];        
    }
    
    let averageMark = sumMarks / marks.length;
    console.log(`Средняя оценка ученика - ${averageMark}`);

    return averageMark;
}