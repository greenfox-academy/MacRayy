# GARDEN APP

class Garden():
    def __init__(self, water_level = 0):
        self.water_level = water_level

    def watering(self, water):
        self.water = water
        self.water = water/(len(dry_flower) + len(dry_tree))
        return self.water

#Plant Parent class
class Plants():
    def __init__(self, name = "colored plant", water_level = 0):
        self.name = name
        self.water_level = water_level

#Flower class
class Flower(Plants):

    def list_dry_flowres(self):
        dry_flower = []
        if self.water_level < 5:
            dry_flower.append(self.name)
        return dry_flower

#Tree class
class Tree(Plants):

    def list_dry_trees(self):
        dry_tree = []
        if self.water_level < 10:
            dry_tree.append(self.name)
        return dry_tree

yellow_flower = Flower("yellow Flower", 0)
blue_flower = Flower("blue Flower", 0)

purple_tree = Tree("purple Tree", 0)
orange_tree = Tree("orange Tree", 0)
