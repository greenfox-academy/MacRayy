from random import randint

class Pirate(object):
    def __init__(self):
        self.toxic_o_mater = 0
        self.alive = True
        self.passed_out = False

    def drink_some_rum(self, bottles):
        self.toxic_o_mater += bottles
        return self.toxic_o_mater

    def hows_it_going_mate(self):
        if self.toxic_o_mater < 4:
            print("Aye lad, Pour me anudder!")
            self.passed_out = False
            self.drink_some_rum()
            return self.toxic_o_mater
        else:
            print("Arghh, I'ma Pirate. How d'ya d'ink its goin?")
            self.passed_out = True
            self.toxic_o_mater = 0
            return self.passed_out, self.toxic_o_mater

    def die(self):
        self.alive = False
        return self.alive

    def brawl(self, other_pirate):
        other_pirate = other_pirate
        other_pirate = Pirate()
        if other_pirate.alive:
            dice = randint(1, 3)
            print(dice)
            if dice == 1:
                self.die()
            elif dice == 2:
                other_pirate.die()
            elif dice == 3:
                self.passed_out = True
                other_pirate.passed_out = True
                return self.passed_out, other_pirate.passed_out
