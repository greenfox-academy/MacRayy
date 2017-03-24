# SUM AND AVERAGE COUNTER

"""
 Write a program that asks for a number. It would ask this many times to enter an integer, if all the integers are entered, it should print the sum and average of these integers like:

Sum: 22, Average: 4.4
"""

# UI
import os
os.system("cls" if os.name == "nt" else "clear")

# Sum and average function
def average_the_numbers(user_number, how_many_numbers):
    average = user_number / how_many_numbers
    return average

def sum_the_numbers():
    how_many_numbers = int(input("How many numbers shall I callculate with? "))
    user_number = 0
    if how_many_numbers <= 0:
        return "Please enter a bigger number than zero."
    for x in range(how_many_numbers):
        user_number = user_number + float(input("Enter a number: "))
    average = average_the_numbers(user_number, how_many_numbers)
    return user_number, average


print(sum_the_numbers())
