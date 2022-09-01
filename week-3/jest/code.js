const filterByPriority = function (words) {
    return words.filter(w => w.priorty == "HIGH")
}

module.exports = filterByPriority