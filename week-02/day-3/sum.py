# - Write a function called `sum` that sum all the numbers
#   until the given parameter

number_1 = 5
number_2 = 10
number_3 = 3

def summery(*args):
    total = 0
    for a in args:
        total = total + a
    print(total)

summery(number_3 + number_2 + number_1)
