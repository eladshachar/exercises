"use strict";
function sum(num) {
    if (Array.isArray(num)) {
        let res = 0;
        num.forEach(n => {
            if (typeof n === 'string') {
                let parsed = parseInt(n);
                if (!isNaN(parsed)) {
                    res += parsed;
                }
            }
            else if (typeof n === 'number') {
                res += n;
            }
        });
        return res;
    }
    else {
        if (typeof num === 'string') {
            return parseInt(num);
        }
        else if (typeof num === 'number') {
            return num;
        }
        else {
            return 0;
        }
    }
}
console.log(sum([3, 3, 3]));
console.log(sum(['1', '1', '7']));
console.log(sum(9));
console.log(sum('9'));
