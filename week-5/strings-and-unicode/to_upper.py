def to_upper(c):
    
    if ord(c) < 97 or ord(c) > 122:
        print(c)
    
    else:
        print(chr(ord(c) - 32))

to_upper('H')
to_upper('c')