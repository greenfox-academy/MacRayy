#AIRCRAFT CARRIER

class Aircraft(object):

    def __init__(self, plane_type):
        self.ammo = 0
        self.max_ammo = 0
        self.base_damage = 0
        self.plane_type = plane_type

    def fight(self):
        damage = self.ammo * self.base_damage
        self.ammo = 0
        return damage

    def refill(self, fill_ammo):
        if fill_ammo < self.max_ammo:
            self.ammo += fill_ammo
            fill_ammo -= self.ammo
            return fill_ammo
        else:
            self.ammo = self.max_ammo
            fill_ammo -= self.max_ammo
            return fill_ammo

    def get_type(self):
        return self.plane_type

    def get_status(self):
        damage = self.figth()
        status = "Type " + self.plane_type + ", Ammo: " + str(self.ammo) + " Base Damage: " + str(self.base_damage) + ", All Damage: " + str(damage)
        return status

class F16(Aircraft):
    def __init__(self, plane_type):
        super().__init__(plane_type)
        self.ammo = 0
        self.max_ammo = 8
        self.base_damage = 30

class F35(Aircraft):
    def __init__(self, plane_type):
        super().__init__(plane_type)
        self.ammo = 0
        self.max_ammo = 12
        self.base_damage = 50

class Carrier(object):
    def __init__(self, ammo_store = 2500, hp = 4000):
        self.ammo_store = ammo_store
        self.health_point = hp
        self.hangar = []

    def add_aircraft(self, airplane_type):
        if airplane_type == "F16":
            f16 = F16("F16")
            self.hangar.append(f16)
        elif airplane_type == "F35":
            f35 = F35("F35")
            self.hangar.append(f35)
        else:
            print("Cannot add othan than F16 or F35")

    def fill(self):
        if self.ammo_store > 0:
            for plane in self.hangar:
                while plane.plane_type == "F35" and plane.ammo == 0:
                    plane.refill(self.ammo_store)
                    self.ammo_store -= plane.ammo
                    if self.ammo_store <= 0:
                        break
            for plane in self.hangar:
                while plane.plane_type == "F16" and plane.ammo == 0:
                    plane.refill(self.ammo_store)
                    self.ammo_store -= plane.ammo
                    if self.ammo_store <= 0:
                        break
        else:
            print("Not enough ammo to refill")

    def fight(self, enemy):
        self.enemy = enemy
        self.enemy = Carrier()
        self.total_damage = 0
        for plane in self.hangar:
            self.total_damage += plane.fight()
            self.enemy.health_point -= plane.fight()
        return self.total_damage

    def get_status(self):
        print("Aircraft count: " + str(len(self.hangar)) + ", Ammo Storage: " + str(self.ammo_store) + ", Total damage: " + str(self.total_damage))
        for plane in self.hangar:
            print("Type " + plane.plane_type + ", Ammo: " + str(plane.ammo) + ", Base Damage: " + str(plane.base_damage) + ", All Damage: " + str(plane.fight()))


enterprise = Carrier(55, 4000)
enterprise.add_aircraft("F16")
enterprise.add_aircraft("F35")
enterprise.add_aircraft("F16")
enterprise.add_aircraft("F35")
enterprise.fill()
enterprise.fight("Lexington")
enterprise.get_status()
enterprise.fill()
enterprise.get_status()
