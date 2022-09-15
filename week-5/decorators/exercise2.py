from asyncio.windows_events import NULL


def func_info(func):
    def wrapper(*args, **kwargs):
        
        print(func)
        print(f' args: {args}')
        print(f' kwargs: {kwargs}')
        res = func(*args, **kwargs)
        print(f' return value: {res}')
        print(f' return type: {type(res)}')
    
    return wrapper


@func_info
def add(*args, **kwargs):
    sum = 0

    for arg in args:
        sum += arg if type(arg) == int else NULL
    
    for value in kwargs.values():
        sum += value if type(value) == int else NULL
    
    return sum

add(1, 2, age=3, text="hello") 
