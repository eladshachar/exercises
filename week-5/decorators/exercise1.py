from time import time

def func_runtime(func):
    def wrapper(*args):
        
        start = time()
        func(*args)
        print(f'function runtime:{time()-start}')
    
    return wrapper

@func_runtime
def sum(num1, num2):
    return num1 + num2

sum(1000000, 807087807)