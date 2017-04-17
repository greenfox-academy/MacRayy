from random import randint

class Pirate(object):
    def __init__(self):
        self.toxic_o_mater = 0
        self.alive = True
        self.passed_out = False

    def drink_some_rum(self):
        self.toxic_o_mater += 1
        return self.toxic_o_mater

    def hows_it_going_mate(self):
        if self.toxic_o_mater < 4:
            print("Aye lad, Pour me anudder!")
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

class Ship(object):
    def __init__(self, name):
        self.name = name
        self.crew = []
        self.captain = None

    def fill_ship(self, pirate):
        if self.captain == None:
            pirate = Pirate()
            self.captain = pirate
            self.crew.append(pirate)
        else:
            pirate = Pirate()
            self.crew.append(pirate)

    def get_ship_status(self):
        if self.captain.alive:
            print("Captain's consumed " + str(self.captain.toxic_o_mater) + " bottles of rum, and Passed out: " + str(self.captain.passed_out))
        else:
            print("Captain is dead")
        print("Alive crew members:")
        alive_crew = []
        for pirate in self.crew:
            if pirate.alive:
                alive_crew.append(pirate)
        print(len(alive_crew))



black_death = Ship("Black Death")

black_death.fill_ship("dirty_fred")
black_death.fill_ship("mr_heinz")
black_death.fill_ship("jim_hawkins")
black_death.fill_ship("long_john_silver")

black_death.get_ship_status()
