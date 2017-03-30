# GUESS MY NUMBER

#Write a program where the program chooses a number between 1 and 100. The player is then asked to enter a guess. If the player guesses wrong, then the program gives feedback and ask to enter an other guess until the guess is correct.
#Make the range customizable (ask for it before starting the guessing).
#You can add lives. (optional)

# UI
import os
os.system("cls" if os.name == "nt" else "clear")
from random import randint

user = input("Hello, what is your name? ")

print("Well, " + user + " let's play! \n But first please tell me the range where I can pick my number. ")



# Loop that checks the input numbers
while True:
    try:
        range_start = float(input("From: "))
        range_end = float(input("To: "))
        if range_start > range_end:
            print("Pick a bigger number!")
            range_end = float(input("To: "))
            continue
        elif range_start == range_end:
            print("It is going to be easy!")
            break
        elif range_start < range_end:
            break
    except ValueError:
        print("It is not a number, please pick a number!")


# Game function
random_num = (randint(range_start, range_end))
def guess_the_number(random_num):
    while True:
        try:
            number = int(input("Can you guess my number? "))
            while number != random_num:
                if number > random_num:
                    print("No, my number is smaller")
                    number = int(input("Guess again! "))
                elif number < random_num:
                    print("No, my number is bigger")
                    number = int(input("Guess again! "))
            if number == random_num:
                print("Well done, you gessed it right!")
                return
        except ValueError:
            print("It is not a number!")

guess_the_number(random_num)
