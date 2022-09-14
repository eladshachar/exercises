def fibonaci(num):
    if num < 1:
        raise Exception
    elif num == 1:
        return 0
    elif num == 2:
        return 1
    else:

        prevprev = 0
        prev = 1
        res = 1

        i = 3
        while(i <= num):
            res = prevprev + prev
            prevprev = prev
            prev = res
            i += 1

        return res
