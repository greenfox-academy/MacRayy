"""
Petrol Station
Create Station and Car classes
Station
gas_amount
refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gas_amount
Car
gas_amount
capacity
create constructor for Car where:
initialize gas_amount -> 0
initialize capacity -> 100
"""

class Station():
    def __init__(self, s_gas_amount = 0):
        self.s_gas_amount = s_gas_amount

    def refill(self, car):
        self.s_gas_amount -= car.capacity
        car.c_gas_amount += car.capacity
        print(car.c_gas_amount)
        print(self.s_gas_amount)

class Car():
    def __init__(self, c_gas_amount = 0, capacity = 100):
        self.c_gas_amount = c_gas_amount
        self.capacity = capacity

car_1 = Car()
mol = Station(500)

mol.refill(car_1)
