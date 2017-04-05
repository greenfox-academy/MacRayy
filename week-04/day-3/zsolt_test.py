import unittest
from zsolt_work import Apple

class TestApple(unittest.TestCase):
    def test_get_apple(self):
        apple = Apple()
        self.assertEqual(apple.get_apple(), "Apple")

if __name__ == '__main__':
    unittest.main()
