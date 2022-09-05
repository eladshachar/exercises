"use strict";
let concat = function (text, print) {
    if (print === 1 || print === true) {
        let str = "";
        if (Array.isArray(text)) {
            text.forEach(t => str += t);
        }
        else {
            str = text;
        }
        console.log(str);
    }
};
concat("gigi", 1);
concat(["haha", "dudu"], true);
concat("fofo", 0);
