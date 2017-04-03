"""
Sharpie Set
Reuse your Sharpie class
Create SharpieSet class
it contains a list of Sharpie
count_usable() -> sharpie is usable if it has ink in it
remove_trash() -> removes all unusable sharpies
"""

class Sharpie():

    def __init__(self, color, width, ink_amount = 100):
        self.color = color
        self.width = float(width)
        self.ink_amount = float(ink_amount)

    def use(self):
        self.ink_amount -= 1
        return self.ink_amount

class SharpieSet():
    def __init__(self):
        self.list_sharpie = []

    def add(self, *sharpies):
        for sharpie in sharpies:
            self.list_sharpie.append(sharpie)

    def count_usable(self):
        counter = 0
        for sharpie in self.list_sharpie:
            if sharpie.ink_amount > 0:
                counter += 1
        return counter

sharpie_1 = Sharpie("green", 50, 0)
sharpie_2 = Sharpie("yellow", 60)
sharpie_3 = Sharpie("blue", 70)

sharpie_set = SharpieSet()

sharpie_set.add(sharpie_1, sharpie_2, sharpie_3)

print(sharpie_set.count_usable())
