import time

def slow_down(func):
    def wrapper(*args):
        time.sleep(1)
        func(*args)
    
    return wrapper

@slow_down
def add(num1, num2):
    print(num1 + num2) 

add(98, 56)