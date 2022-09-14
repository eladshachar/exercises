def CircleIter(lst, num):
    count = 0
    i = 0

    while(count < num):
        yield lst[i]

        if i == len(lst)-1:
            i = 0
        else:
            i += 1
        
        count += 1

