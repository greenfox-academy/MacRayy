# create a function that takes a list of students and prints:
# - Who has got more candies than 4 candies

# create a function that takes a list of students and prints:
#  - how many candies they have on average

students = [
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Zsombor', 'age': 12, 'candies': 5}
]
def gives_names(child):
    for student in students:
        if student['candies'] > 4:
            print(student['name'])

gives_names(students)

def average_of_candies():
    total_candies = 0
    for student in students:
        total_candies += student['candies']
    average = total_candies / len(students)
    print(average)

average_of_candies()
