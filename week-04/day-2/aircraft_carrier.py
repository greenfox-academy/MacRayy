#AIRCRAFT CARRIER

class Aircraft(object):
    def __init__(self, max_ammo, base_damage, ammo = 0):
        self.ammo = ammo
        self.max_ammo = max_ammo
        self.base_damage = base_damage

    def figth(self):
        pass

    def refill(self):
        pass

    def get_type(self):
        pass

    def get_status(self):
        pass

class F16(Aircraft):
    def __init__(self):
        super().__init__(max_ammo, base_damage, ammo)

class F35(Aircraft):
    def __init__(self):
        super().__init__(max_ammo, base_damage, ammo)
