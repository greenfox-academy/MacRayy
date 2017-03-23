# ANAGRAM

# Create a function named is anagram following your current language's style guide. It should take two strings and return a boolean value depending on whether its an anagram or not.

import sys

# Input UI

input_1 = "dog" #input("word")
input_2 = "god" #input("word")

# Function that compares the input words
def compare_length_words():
    while True:
        if len(input_1) == len(input_2):
            break
        else:
            print("False")
            sys.exit()

def anagram():
    if "".join(sorted(input_1)) == "".join(sorted(input_2)):
        print("True")
    else:
        print("False")

# Display true or false
compare_length_words()
anagram()
