"""students = [


]
"""
# create a function that takes a list of students and prints:
# - how many candies are owned by students

# create a function that takes a list of students and prints:
# - Sum of the age of people who have lass than 5 candies

students = [{'name': 'Teodor', 'age': 3, 'candies': 2},
{'name': 'Rezso', 'age': 9.5, 'candies': 2},
{'name': 'Zsombor', 'age': 12, 'candies': 5},
{'name': 'Aurel', 'age': 7, 'candies': 3},
{'name': 'Olaf', 'age': 12, 'candies': 7},
{'name': 'Gerzson', 'age': 10, 'candies': 1}]

for student in students:
    print(student['name'])

def candie_counter(candie):
    total_candies = 0
    for student in students:
        total_candies += student['candies']
    return total_candies

print(candie_counter(students))

def age_counter(age):
    sum_age = 0
    for student in students:
        if student['candies'] < 5:
            sum_age += student['age']
        else:
            continue
    return sum_age

print(age_counter(students))
