'use strict';

function compareArrays(arr1, arr2) {
    if ((arr1 === undefined) || (arr2 === undefined) || (arr1.length != arr2.length)) {            
        return false;
    }
    function isEqual(item, i, arr1) {
        return arr1[i] === arr2[i];
    }
    return arr1.every(isEqual);
}

function memorize(fn, limit) {    
    let results = [];
    
    return function(...rest) {
        const args = [...rest];        

        if (results.length == 0) {           
            results.unshift({
                args,
                result: fn(...rest)
            })
        } else {
            const parser = results.find(item => compareArrays(item.args, args));
            
            if (parser) {
                return parser.result;
            } else {
                results.unshift({
                    args,
                    result: fn(...rest)
                })

                if (results.length > limit) {
                    results.shift();
                }

                return results;
            }
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

const mSum = memorize(sum, 10);

console.log(compareArrays([8, 9], [6]));
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]));
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4]));
console.log(compareArrays([1, 2, 3], [2, 3, 1]));
console.log(compareArrays([8, 1, 2], [8, 1, 2]));

console.log(mSum(3, 4, 5, 6));
console.log(mSum(3, 4, 5, 6));
console.log(mSum(3, 4, 556, 6));
console.log(mSum(3, 4, 556, 6));
console.log(mSum(3, 455, 5, 6));
console.log(mSum(3, 4, 5));
console.log(mSum(3, 5, 6));
console.log(mSum(3));
console.log(mSum(3, 4, 5, 6, 4, 5, 6));
console.log(mSum(32, 42, 25, 6));
console.log(mSum(3, 4, 55, 56));
console.log(mSum(3, 64, 5, 61));
console.log(mSum(3, 74, 5, 67, 123));
console.log(mSum(3, 74, 53, 67, 123));