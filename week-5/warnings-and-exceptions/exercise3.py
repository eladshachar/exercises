try:
   age = int(input("How old are you? "))  

except ValueError:
    print("not a number")

else:
    print("valid value") 