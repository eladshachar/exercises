def my_enumerate(iterable, start=0):
    for i in range(start, len(iterable)):
        yield (i, iterable[i])
