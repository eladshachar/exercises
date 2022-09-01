const simplify = require('./code')

test("should return a clean string without these symbols: \"!\", \"#\", \".\", \",\", \"'\"", () => {
    let str = '#Hi!'
    str = simplify(str)
    expect(str).not.toContain('#')
    expect(str).not.toContain('!')
})