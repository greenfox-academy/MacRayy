class Person(object):
    def __init__(self, name, age, gender):
        self.name = name
        self.age = age
        self.gender = gender

    def introduce(self):
        return "Hi, I'm " +  self.name + ", a " + str(self.age) + " year old " + self.gender + "."

    def get_goal(self):
        return "My goal is: Live for the moment!"

person_1 = Person("Jane Doe", 30, "female")
print(person_1.get_goal())
