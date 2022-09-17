num_calls = 0

def func(*args):
    global num_calls

    if len(args) > num_calls:
        num_calls = len(args)
    
    return num_calls

print(func())           # 0
print(func(1,2,3,7))    # 4
print(func(9,2))        # 4
print(func(1,2,3,4,5))  # 5 