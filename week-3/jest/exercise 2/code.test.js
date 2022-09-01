const removeAtLeastOne = require('./code')

test("should remove at least one element from the array `arr`", ()=> {
   let arr = [4,5,6,7,8]
   let initialLength = arr.length
   removeAtLeastOne(arr)
   let postFuncLength = arr.length
   expect(initialLength).toBeGreaterThan(postFuncLength)
})