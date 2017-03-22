# Write a program that reads a number from the standard input, then draws a
# pyramid like this:
#
#
#    *
#   ***
#  *****
# *******
#
# The pyramid should have as many lines as the number was

number = 15 #int(input("enter a number: "))

x = 1
while (x <= number):
    print(("*" * x) - 1)
    x = x + 3
