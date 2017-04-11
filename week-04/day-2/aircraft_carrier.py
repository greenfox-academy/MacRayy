#AIRCRAFT CARRIER

class Aircraft(object):

    def __init__(self, plane_type, max_ammo = 0, base_damage = 0, ammo = 0):
        self.ammo = ammo
        self.max_ammo = max_ammo
        self.base_damage = base_damage
        self.plane_type = plane_type

    def figth(self):
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
    def __init__(self, plane_type, max_ammo, base_damage, ammo = 0):
        super().__init__(plane_type, ammo)
        self.max_ammo = 8
        self.base_damage = 30

class F35(Aircraft):
    def __init__(self, plane_type, max_ammo, base_damage, ammo = 0):
        super().__init__(plane_type, ammo)
        self.max_ammo = 12
        self.base_damage = 50

class Carrier(object):

    def __init__(self, ammo_store, hp, hangar = []):
        self.ammo_store = ammo_store
        self.health_point = hp
        self.hangar = hangar

    def add_aircraft(self, plane_type):
        self.hangar.append(plane_type)

    def fill(self):
        pass

    def fight(self):
        pass

    def get_status(self):
        pass


aircraft_1 = F16("F16", 8, 30)
aircraft_2 = F35("F35", 12, 50)

print(aircraft_1.refill(5))
print("\n")
print(aircraft_1.figth())
print("\n")
print(aircraft_1.refill(100))
print("\n")
print(aircraft_1.get_type())
print("\n")
print(aircraft_1.get_status())
