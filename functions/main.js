"use strict";


// ============================== Задание №1 =======================================


function getSolutions(a, b, c) {
  let D = Math.pow(b, 2) - 4 * a * c;    
  let x1, x2;

  if (D < 0) {
    return {        
      D
    };

  } else if (D == 0) {
    x1 = -b/(2 * a);
        
    return {
      roots: [x1],
      D
    };

  } else {

    x1 = (-b + Math.sqrt(D))/(2 * a);
    x2 = (-b - Math.sqrt(D))/(2 * a);
        
    return {
      roots: [x1, x2],
      D       
    };
  }
}

function showSolutionsMessage(a, b, c) {
  let result = getSolutions(a, b, c);

  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);

  if (result.roots == null) {
  console.log(`Уравнение не имеет вещественных корней`);

  
  } else if (result.roots.length == 1) {
  console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);

  } else {    
  console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
  }
}

console.log(showSolutionsMessage(1, 2, 3));
console.log(showSolutionsMessage(7, 20, -3));
console.log(showSolutionsMessage(2, 4, 2));


// ============================== Задание №2 =======================================


function getPersonData(secretData) {
  let NameSurname = {};

  for (let pars in secretData) {
    NameSurname[pars] = getNameSurname(secretData[pars]);
  }

  return {
    firstName: NameSurname.aaa,
    lastName: NameSurname.bbb
  };
}

function getNameSurname(decryption) {
  return (decryption == 0) ? 'Родриго' : 'Эмильо';  
}
  
console.log(getPersonData({aaa: 0, bbb: 0}));
console.log(getPersonData({aaa: 1, bbb: 0}));
console.log(getPersonData({aaa: 0, bbb: 1}));
console.log(getPersonData({aaa: 1, bbb: 1}));


// ============================== Задание №3 =======================================
  

function getAverageScore(data) {  
  
  let averageTable = {};
  let totalDisciplines = 0;
  let sumForAverage = 0;

  for (let discipline in data) {
    averageTable[discipline] = getDisciplineAverage(data[discipline]);
    sumForAverage += averageTable[discipline];
    totalDisciplines++;
  }

  averageTable.average = sumForAverage / totalDisciplines;

  return averageTable;
}

function getDisciplineAverage(marks) {
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  return sum / marks.length;
} 

console.log(getAverageScore({
  algebra: [2, 4, 5, 2, 3, 4],
  geometry: [2, 4, 5],
  russian: [3, 3, 4, 5],
  physics: [5, 5],
  music: [2, 2, 6],
  english: [4, 4, 3],
  poetry: [5, 3, 4],
  chemistry: [2],
  french: [4, 4]  
}));