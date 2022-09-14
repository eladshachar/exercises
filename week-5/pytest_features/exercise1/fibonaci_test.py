import pytest
from fibonaci import *

@pytest.mark.parametrize("index, number", [(2,1), (5,4)])
def test_fibonaci(index, number):
    assert fibonaci(index) == number