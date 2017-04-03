"""
Teacher Student
Create Student and Teacher classes
Student
learn()
question(teacher) -> calls the teachers answer method
Teacher
teach(student) -> calls the students learn method
answer()
"""

class Studnet(object):

    def learn(self):
        pass

    def question(self, teacher): #calls the answer method
        teacher.answer()

class Teacher(object):
    def __init__(self, hair):
        self.hair = hair

    def teach(self, student): #calls the learn method
        pass

    def answer(self):
        print("answer")
        print(self.hair)

Sanyi = Studnet()
Belaba = Teacher("black")
Gabor = Teacher("brown")

Sanyi.question(Belaba)
Sanyi.question(Gabor)
