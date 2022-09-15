from storeTest import *
import pytest


@pytest.fixture
def store():
  items = ("apple", "banana", "orange")
  amount = (2, 2, 1)
  return dict(zip(items, amount)) 


def test_buy_banana(store):
    assert buy_banana(store)['banana'] == 1

def test_buy_two_banana(store):
    assert buy_two_bananas(store)['banana'] == 0