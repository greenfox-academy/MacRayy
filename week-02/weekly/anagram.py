# ANAGRAM

# Create a function named is anagram following your current language's style guide. It should take two strings and return a boolean value depending on whether its an anagram or not.

# Input UI
import os
os.system("cls" if os.name == "nt" else "clear")

input_1 = input("Enter the word: ")
input_2 = input("Enter the word you want to compare: ")

# Function that compares the input words
def anagram(input_1, input_2):
    if len(input_1) != len(input_2):
        return False
    else:
        word = ""
        for letter in input_1:
            if letter in input_2:
                word += letter
            elif letter not in input_2:
                return False
        return True

# Display true or false
output = anagram(input_1, input_2)
if output is True:
    print("The two words are anagrams")
else:
    print("The words are not anagrams")
