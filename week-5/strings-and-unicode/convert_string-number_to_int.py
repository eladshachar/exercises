def string_number_to_int(str):
    num = 0
    
    for c in str:
        if ord(c) < 48 or ord(c) > 57:
           raise Exception("a non-digit character was detected")

        else:
            num = num*10 +  (ord(c) - 48)

    return num

print(string_number_to_int("10"))       # output: 10
print(string_number_to_int("123"))      # output: 123
print(string_number_to_int("99"))       # output: 99
print(string_number_to_int("ABC")) 