"use strict";
{
    const sumArray = (arr) => {
        let sum = 0;
        arr.forEach((element) => {
            sum = element + sum;
        });
        return sum;
    };
    console.log(sumArray([1, 2, 3, 4, 5]));
}
