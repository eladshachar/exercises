const validate = require('./main')

test("tests that validates returns the right values", () =>{
    const returnFalse = [false, false, true]
    const returnTrue = [true, true, false]
    const returnError = ['true']

    expect(validate(returnFalse)).toBe(false)
    expect(validate(returnTrue)).toBe(true)
    expect(validate(returnError)).toThrow()
})