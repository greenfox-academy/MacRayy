# Write a recursive function that takes one parameter: n and counts down from n.

def counter(number):
    print(number)
    if number == 0:
        return 0
    else:
        return counter(number-1)

counter(10)
