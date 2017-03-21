# Write a program that asks for two numbers and prints the bigger one

user_number_1 = input("enter a number: ")
user_number_2 = input("enter another number")

if int(user_number_1) > int(user_number_2):
    print(user_number_1)
elif int(user_number_1) < int(user_number_2):
    print(user_number_2)
    
