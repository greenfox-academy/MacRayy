# Write a program that asks for 5 integers in a row,
# then it should print the sum and the average of these numbers like:
#
# Sum: 22, Average: 4.4

user_number = 0

how_many_numbers = int(input("How many numbers?"))

for x in range(0, how_many_numbers):
    user_number = user_number + int(input("enter a number: "))

Average = user_number / how_many_numbers

print("Sum: " + str(user_number) + " Average: " + str(Average))
