"""
 Write a program that asks for a number. It would ask this many times to enter an integer, if all the integers are entered, it should print the sum and average of these integers like:

Sum: 22, Average: 4.4
"""
# SUM AND AVERAGE COUNTER

import os
os.system("cls" if os.name == "nt" else "clear")

while True:
    try:
        how_many_numbers = int(input("How many numbers shall I callculate with? "))
        if how_many_numbers != 0:
            break
        else:
            print("I cannot divide with zero.")
            continue
    except ValueError:
        print("Sorry, I didn't understand that. Please, enter a number.")

def sum_and_ave():
    user_number = 0
    for x in range(how_many_numbers):
        user_number = user_number + float(input("Enter a number: "))
    Average = user_number / how_many_numbers
    print("Sum of the entered numbers: " + str(user_number))
    print("Average of the entered numbers: " + str(Average))

sum_and_ave()
