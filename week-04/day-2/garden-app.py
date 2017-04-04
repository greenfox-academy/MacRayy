# GARDEN APP

class Garden():

    def watering(self, water, dry_flower, dry_tree):
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

    def list_dry_plants(self):
        dry_flower = []
        if self.water_level < 5:
            dry_flower.append(self.name)
            print("Needs watering: " + str(dry_flower))
        else:
            print("Don't need watering: " + str(dry_flower))
        return dry_flower

#Tree class
class Tree(Plants):

    def list_dry_plants(self):
        dry_tree = []
        if self.water_level < 10:
            dry_tree.append(self.name)
            print("Needs watering: " + str(dry_tree))
        else:
            print("Don't need watering: " + str(dry_tree))
        return dry_tree

garden = Garden()

plants = []
yellow_flower = Flower("yellow Flower", 0)
plants.append(yellow_flower)
blue_flower = Flower("blue Flower", 0)
plants.append(blue_flower)
purple_tree = Tree("purple Tree", 0)
plants.append(purple_tree)
orange_tree = Tree("orange Tree", 0)
plants.append(orange_tree)


yellow_flower.list_dry_plants()
blue_flower.list_dry_plants()


#garden.watering(40, list_dry_trees(), list_dry_flowres())
