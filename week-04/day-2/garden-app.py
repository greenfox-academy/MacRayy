# GARDEN APP

class Garden():
    def __init__(self, name = "unknown color", water_level = 0):
        self.name = name
        self.water_level = water_level

    def watering(self, water):
        self.water = self.water/(len(dry_flower) + len(dry_tree))
        return self.wate

#Flower class
class Flower(Garden):

    def check_water_level(self):
        dry_flower = []
        if self.water_level < 5:
            dry_flower.append(self.name)
        return dry_flower

#Tree class
class Tree(Garden):

    def check_water_level(self):
        dry_tree = []
        if self.water_level < 10:
            dry_flower.append(self.name)
        return dry_flower

yellow_flower = Flower("yellow Flower", 0)
blue_flower = Flower("blue Flower", 0)

purple_tree = Tree("purple Tree", 0)
orange_tree = Tree("orange Tree", 0)
