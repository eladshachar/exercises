from re import T


def is_in_list(num, lst):
    return num in lst

def are_in_list(lst, *args):
    for item in args:
        if item not in lst:
            return False
    
    return True

def is_upper(lst):
    for word in lst:
        if isinstance(word, str):
            for c in word:
                if c.islower():
                    return False
         
    return True

def missing_val(lst, val):
    for value in lst:
        if value == val:
             return False
    
    return True