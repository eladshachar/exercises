const isEven = require('./code')

test("should return true if n is even, false otherwise", () => {
    let res1 = isEven(3)
    let res2 = isEven(4)
    expect(res1).toBeFalsy()
    expect(res2).toBeTruthy()
}) 