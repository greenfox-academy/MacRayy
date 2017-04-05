import unittest
from zsolt_work import Apple

class TestApple(unittest.TestCase):
    def test_get_apple(self):
        apple = Apple()
        self.assertEqual(apple.get_apple(), "Apple")

class SumList(unittest.TestCase):
    def test_sum_list_elements(slef):
        list_1 = SumList()
        self.assertEqual(sum_list_elements(), 6)

if __name__ == '__main__':
    unittest.main()
