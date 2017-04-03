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
        print("learnlearnlearn")

    def question(self, teacher): #calls the answer method
        teacher.answer()

class Teacher(object):

    def teach(self, student): #calls the learn method
        student.learn()

    def answer(self):
        print("answer")

Sanyi = Studnet()
Belaba = Teacher()

Sanyi.question(Belaba)

Belaba.teach(Sanyi)
