from random import randint
from pirates import Pirate

class Ship(object):
    def __init__(self, name):
        self.name = name
        self.crew = []
        self.captain = None
        self.alive_crew = []

    def fill_ship(self, pirate):
        if self.captain == None:
            pirate = Pirate()
            self.captain = pirate
            self.crew.append(pirate)
        else:
            pirate = Pirate()
            self.crew.append(pirate)

    def remove_dead_mates(self):
        for pirate in self.crew:
            if pirate.alive:
                self.alive_crew.append(pirate)
        return self.alive_crew

    def get_ship_status(self):
        if self.captain.alive:
            print("Captain's consumed " + str(self.captain.toxic_o_mater) + " bottles of rum, and Passed out: " + str(self.captain.passed_out))
        else:
            print("Captain is dead")
        print("Alive crew members: " + str(len(self.remove_dead_mates())))

    def battle(self, other_ship):
        other_ship = Ship(other_ship)
        ship_score = len(self.remove_dead_mates()) - self.captain.toxic_o_mater
        other_ship_score = len(other_ship.remove_dead_mates()) - other_ship.captain.toxic_o_mater
        if ship_score > other_ship_score:
            for pirate in self.alive_crew:
                pirate.drink_some_rum(randint(1, 5))
            for enemy_pirate in other_ship.alive_crew[::(randint(1, len(other_ship.alive_crew)))]:
                enemy_pirate.die()
            return True
        elif ship_score < other_ship_score:
            for enemy_pirate in other_ship.alive_crew:
                enemy_pirate.drink_some_rum(randint(1, 5))
            for pirate in self.alive_crew[::(randint(1, len(self.alive_crew)))]:
                pirate.die()
            return False


black_death = Ship("Black Death")

black_death.fill_ship("dirty_fred")
black_death.fill_ship("mr_heinz")
black_death.fill_ship("jim_hawkins")
black_death.fill_ship("long_john_silver")

black_death.get_ship_status()
