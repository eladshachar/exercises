count = 0

def count_calls(func):
    def wrapper(*args):
        global count 
        count += 1
        print(f'the number of times the fumction has been called: {count}')
        func(*args)
    
    return wrapper

@count_calls
def add(num1, num2):
    return num1+num2

add(99,55)
add(77,88)
add(77,44)