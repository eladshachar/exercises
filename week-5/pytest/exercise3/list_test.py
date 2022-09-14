from list import *


my_list = ['I', 2, 'Love', 4, 56, 'Coding', "Python", "in", [8,9,10]]

def test_number():
  assert is_in_list(3, my_list) == False, "3 is not in the list" # Should assert if number 3 is in my_list
  assert is_in_list(56, my_list) == True, "56 is on the list" # Should assert if number 56 is in my_list
  
def test_str():
  assert are_in_list(my_list, "I", "Love", "Coding") == True, "all words are on the list" # Should assert if "I", "Love" and "Coding" are in my_list

def test_upper_str():
  assert is_upper(my_list) == False, "lower case is present" # Should assert if all the strings in my_list are in upper case﻿

def test_negative():
  assert missing_val(my_list, 6) == True, "numver 6 is missing" # Should assert if number 6 is no﻿t in﻿ my_list - result should be true