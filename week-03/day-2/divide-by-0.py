# create a function that takes a number,
# divides ten with it,
# and prints the result.
# it should print "fail" if the parameter is 0

while True:
    try:
        print("What number do you want do divide the number?")
        d_number = int(input())
        break
    except ValueError:
        print("Please enter a number")

try:
    result = 100 / d_number
    print("The result is:" + str(result))
except ZeroDivisionError:
    print("I cannot divide with zero")
