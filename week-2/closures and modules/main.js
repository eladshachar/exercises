const mathOperations = function () {
    const add = function (x, y) {
        return x + y;
    }

    const subtract = function (x, y) {
        return x - y;
    }

    const multiply = function (x, y) {
        return x * y;
    }

    const divide = function (x, y) {
        return x / y;
    }

    return {
        add: add,
        sub: subtract,
        mult: multiply,
        div: divide
    }
}

const m = mathOperations()

console.log(m.mult(7,m.div(36,6)))