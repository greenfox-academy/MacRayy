"""
// Write a program that stores a number, and the user has to figure it out.
// The user can input guesses, after each guess the program would tell one
// of the following:
//
// The stored number is higher
// The stried number is lower
// You found the number: 8
"""

from random import randint
random_num = (randint(0,10))

user = input("Hello, what is your name? ")

print("Well, " + user + " let!s play!")

def guess_the_number():
    number = int(input("Can you guess my number? "))
    while number != random_num:
        if number > random_num:
            print("No, my number is smaller")
            number = int(input("Guess again! "))
        elif number < random_num:
            print("No, my number is bigger")
            number = int(input("Guess again! "))

    if number == random_num:
        print("Well done, you gessed it right! Now let me be.")

guess_the_number()
