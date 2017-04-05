import unittest
from zsolt_work import *

class TestApple(unittest.TestCase):
    def test_get_apple(self):
        apple = Apple()
        self.assertEqual(apple.get_apple(), "Apple")

class TestSumList(unittest.TestCase):
    def test_sum_list_elements(self):
        list_1 = SumList([1, 2, 3])
        self.assertEqual(list_1.sum_list_elements(), 6)

    def test_sum_empty_list(self):
        list_1 = SumList([])
        self.assertEqual(list_1.sum_list_elements(), 0)

    def test_sum_with_one_number(self):
        list_1 = SumList([55])
        self.assertEqual(list_1.sum_list_elements(), 55)

    def test_sum_with_zero(self):
        list_1 = SumList([0])
        self.assertEqual(list_1.sum_list_elements(), 0)

class TestAnagram(unittest.TestCase):
    def test_anagram(self):
        strings = Anagaram("dog", "god")
        self.assertEqual(strings.anagaram(), True)

class TestCountLetter(unittest.TestCase):
    def test_count_letter(self):
        word = CountLetter("terrier")
        self.assertEqual(word.count_letter(), {"t": 1, "e": 2, "r": 3, "i": 1})

if __name__ == '__main__':
    unittest.main()
