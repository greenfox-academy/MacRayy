# Write a program that asks for 5 integers in a row,
# then it should print the sum and the average of these numbers like:
#
# Sum: 22, Average: 4.4

user_number = 0

how_many_numbers = int(input("How many numbers?"))

for x in range(0, how_many_numbers):
    #user_number = input("enter a number: ")
    user_number = user_number + int(input("enter a number: "))

Average = user_number / how_many_numbers

print("Sum: " + str(user_number) + " Average: " + str(Average))

'''
user_number_1 = input("enter a number: ")
user_number_2 = input("enter another number: ")
user_number_3 = input("enter another number: ")
user_number_4 = input("enter another number: ")
user_number_5 = input("enter one more number: ")

user_number_1 = int(user_number_1)
user_number_2 = int(user_number_2)
user_number_3 = int(user_number_3)
user_number_4 = int(user_number_4)
user_number_5 = int(user_number_5)

Sum = user_number_1 + user_number_2 + user_number_3 + user_number_4 + user_number_5

Average = Sum / 5

print("Sum: " + str(Sum) + " Average: " + str(Average))
'''
