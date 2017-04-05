# AIRCRAFT CARRIER

#Aircraft class
class Aircraft():
    def __init__(self, typee, ammo, max_ammo, base_dmg):
        self.type = ""
        self.ammo = 0
        self.max_ammo = max_amm
        self.base_damage = base_damage

    def flight(self):
        dmg = self.base_damage
        self.ammo = 0
        return dmg

    def refill(self):
        pass

#F16 class(Aircraft)
class F16(Aircraft):
    ef __init__(self, typee, ammo, max_ammo, base_dmg):
        super().__init__
        self.typee = "F16"
        self.ammo = ammo
        self.max_ammo = 8
        self.base_damage = 50

#F35 class(Aircraft)
