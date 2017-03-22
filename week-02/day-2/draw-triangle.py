# Write a program that reads a number from the standard input, then draws a
# triangle like this:
#
# *
# **
# ***
# ****
#
# The triangle should have as many lines as the number was

number = 5 #int(input("enter a number: "))

x = 1
while (x <= number):
    print("*" * x)
    x = x + 1
