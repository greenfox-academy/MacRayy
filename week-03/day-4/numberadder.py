# Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

def counter(number):
    if number == 1:
        return 1
    else:
        return number + counter(number-1)

print(counter(7))
