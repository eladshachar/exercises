def my_accumulate(my_list):
    
    sum = 0

    for i in range(0, len(my_list)):
        sum += my_list[i]
        yield sum
