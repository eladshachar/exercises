from sum import *
import pytest


def test_sum_is_five():
    assert sum(2,3) == 5

@pytest.mark.low3
def test_sum_is_two():
    assert sum(1,1) == 2