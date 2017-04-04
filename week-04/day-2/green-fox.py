class Person(object):
    def __init__(self, name, age, gender):
        self.name = name
        self.age = age
        self.gender = gender

    def introduce(self):
        return "Hi, I'm " +  self.name + ", a " + str(self.age) + " year old " + self.gender + "."

    def get_goal(self):
        return "My goal is: Live for the moment!"

class Student(Person):
    def __init__(self, name, age, gender, previous_organization, skipped_days = 0):
        super().__init__(name, age, gender,)
        self.previous_organization = previous_organization
        self.skipped_days = skipped_days

    def get_goal(self):
        return "Be a junior software developer!"

    def introduce(self):
        return "Hi, I'm " +  self.name + ", a " + str(self.age) + " year old " + self.gender + " from " + self.previous_organization + " who skipped " +  str(self.skipped_days) + " days from the course already."

    def skip_days(self, number_of_days):
        self.number_of_days = number_of_days
        self.skipped_days += number_of_days
        return self.skipped_days

class Mentor(Person):
    def __init__(self, name, age, gender, level = "junior"):
        super().__init__(name, age, gender,)
        self.level = level

    def get_goal(self):
        return "Educate brilliant junior software developers."

    def introduce(self):
        return "Hi, I'm " +  self.name + ", a " + str(self.age) + " year old " + self.gender + " " + self.level + " mentor."


person_1 = Mentor("Jane Doe", 30, "female", "intermediate")

print(person_1.introduce())
