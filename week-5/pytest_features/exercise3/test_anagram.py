import pytest


def convert_to_dictionary(string):
    dictionary = {}

    for letter in string:
        if letter in dictionary.keys():
            dictionary[letter] += 1
        else:
            dictionary[letter] = 1
    
    return dictionary


def anagram(str1, str2):
    return True if convert_to_dictionary(str1) == convert_to_dictionary(str2) else False


@pytest.mark.parametrize("str1, str2, result", [("elbow", "below", True), ("meteor", "remote", True), ("car", "cat", False)])
def test_anagram(str1, str2, result):
    assert anagram(str1, str2) == result