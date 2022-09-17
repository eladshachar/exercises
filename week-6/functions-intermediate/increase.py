def gen_increase_func(key, amount = 1):
    def inner(obj):
        obj[key] += amount
    
    return inner

employee = {
  "name": "Momo",
  "age": 61,
  "salary": 10000
} 

increase_age = gen_increase_func('age')
increase_salary = gen_increase_func('salary', 1000)

while(employee["age"] < 70):
    increase_age(employee)

    if employee["age"] % 2 > 0:
        increase_salary(employee)
    
print(employee)