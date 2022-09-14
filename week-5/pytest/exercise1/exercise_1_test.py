def func_to_test():
    return 38

def test_func_to_test1():
    assert func_to_test() == 38, "wrong number returned"

def test_func_to_test2():
    assert func_to_test() == 39, "wrong number returned"