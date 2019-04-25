'use strict';

function compareArrays(arr1, arr2) {
    if ((arr1 === undefined) || (arr2 === undefined) || (arr1.length != arr2.length)) {            
        return false;
    }
    
    return arr1.every((item, i) => item === arr2[i]);
}

let results = [];

function memorize(fn, limit) {    
        
    return function(...rest) {
        const args = [...rest];        

        const parser = results.find(item => compareArrays(item.args, args));
            
        if (parser) {
            return `Результат из памяти: ${parser.result}`;
        } else {
            console.log(`Вычисляю новое значение функции...`);
            results.unshift({
                args,
                result: fn(...rest)
            })

            if (results.length > limit) {
                results.pop();
            }

            return results;
        }
    }    
}

const sum = function(...rest) {
    let sum = 0;
    for (let i = 0; i < rest.length; i++) {
        sum += rest[i];
    }
    return (sum);
}

const mSum = memorize(sum, 3);

console.log(compareArrays([8, 9], [6]));
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]));
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4]));
console.log(compareArrays([1, 2, 3], [2, 3, 1]));
console.log(compareArrays([8, 1, 2], [8, 1, 2]));

console.log(mSum(3, 4, 5, 6)); //18
console.log(mSum(3, 4, 5, 6)); //18 
console.log(mSum(3, 5, 6)); //14
console.log(mSum(4, 6)); //10
console.log(mSum(32, 68)); //100
console.log(mSum(3, 4, 5, 6)); //18