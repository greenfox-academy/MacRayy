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
        

if __name__ == '__main__':
    unittest.main()
