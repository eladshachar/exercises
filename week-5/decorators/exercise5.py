fibonacci_cache = {}


def func_cache(func):
    def wrapper(key):
        
        if key in fibonacci_cache.keys():
            return fibonacci_cache(key)
        else:
            res = func(key)
            fibonacci_cache[key] = res
            return res
    
    return wrapper

@func_cache
def fibonacci(num):
    print(f'calculating: {num}')

    if num <= 0:
        print('please enter a positive number')
    elif num == 1:
        return 0
    elif num == 2:
        return 1
    else:
        n1 = 0
        n2 = 1
        count = 3
        res = 1
        
        while(count <= num):
            res = n1 + n2
            n1 = n2
            n2 = res
            count += 1
        
        return res

print(fibonacci(2))
print(fibonacci(4)) 