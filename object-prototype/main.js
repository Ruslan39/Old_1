'use strict';

function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    let now = new Date();
    let date = new Date(birthday);

    birthday = +date;
    let diff = now - birthday;

    let millesecondsInYear, averageMillesecInYear;
    let sumMillesecInYear = 0;
    let years = 0;
    let age;

    for (let i = date.getFullYear(); i <= now.getFullYear(); i++ ) {
        if (((i % 4 == 0) && (i % 100 != 0)) || ((i % 100 == 0) && (i % 400 == 0))) {
            millesecondsInYear = 1000 * 60 * 60 * 24 * 366;
        } else {
            millesecondsInYear = 1000 * 60 * 60 * 24 * 365;
        }        
        sumMillesecInYear += millesecondsInYear;
        years++;      
    }

    averageMillesecInYear = sumMillesecInYear / years;
    
    age = Math.floor(diff / averageMillesecInYear);
            
    if (age >= 18) {
        console.log(`Вам уже ${age} лет и Вы вправе заказывать что пожелаете!`);
        return true;
    } else {
        console.log(`Сударь, Вам только ${age} лет. Крепче кефира ничего предложить не могу...`);
        return false;
    }    
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {    
    let sound = animal.sound;
    
    if (typeof animal === undefined) {
        return null;
    } else if (typeof animal !== undefined) {
        return sound;
    }    
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    let k = 0;
    let sumMarks = 0;

    for (let mark in marks) {        
        sumMarks += +marks[mark];
        k++;
    }

    let average = sumMarks / k;
    let roundedAverage = Math.round(average);
    
    return roundedAverage;
}