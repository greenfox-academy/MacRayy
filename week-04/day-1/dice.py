import random

class Dice():

    def __init__(self):
        self.dice = [0, 0, 0, 0, 0, 0]

    def roll(self):
        for i in range(len(self.dice)):
            self.dice[i] = random.randint(1,6)
        return self.dice

    def getCurrent(self, index=None):
        if index != None:
            return self.dice[index]
        else:
            return self.dice

    def reroll(self, index=None):
        if index != None:
            self.dice[index] = random.randint(1,6)
        else:
            self.roll()


dice = Dice()
print(dice.getCurrent())
dice.roll()
print(dice.getCurrent())
dice.reroll(3)
print(dice.getCurrent(3))
print(dice.getCurrent())
