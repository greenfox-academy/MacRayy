import unittest
from pirates import *

class TestPirate(unittest.TestCase):
    def test_drink_some_rum(self):
        hook = Pirate()
        self.assertEqual(hook.drink_some_rum(), 1)

    def test_die(self):
        hook = Pirate()
        self.assertEqual(hook.die(), False)

if __name__ == '__main__':
    unittest.main()
