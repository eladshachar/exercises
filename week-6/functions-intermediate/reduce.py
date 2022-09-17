def reduce(function, iterable, initial=None):
    it = iter(iterable)

    if initial is None:
        res = next(it)
    else:
        res = initial
    
    for element in it:
        res = function(res, element)
    
    return res

lst = [1, 2, 3, 4, 5]

print(reduce(lambda a, b: a+b, lst))