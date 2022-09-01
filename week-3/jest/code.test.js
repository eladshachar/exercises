const { exportAllDeclaration } = require('@babel/types')
const filterByPriority = require('./code')

test("should remove all BUGs from list of code", () => {
    
    let words = [
        {text: "important", priority: "HIGH"},
        {text: "urgent", priority: "HIGH"},
        {text: "negligible", priority: "LOW"}
    ]

    let filteredWords = filterByPriority(words)
    
    filteredWords.forEach(w => {
        exportAllDeclaration(w.priority).toBe("HIGH")
    })
})