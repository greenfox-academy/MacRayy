# Write a program that reads a number form the standard input,
# If the number is zero or smaller it should print: Not enough
# If the number is one it should print: One
# If the number is two it should print: Two
# If the number is more than two it should print: A lot

user_number = input("enter number: ")
if int(user_number) <= 0:
    print("Not enough")
elif int(user_number) == 1:
    print("One")
elif int(user_number) == 2:
    print("Two")
elif int(user_number) > 2:
    print("A lot")
