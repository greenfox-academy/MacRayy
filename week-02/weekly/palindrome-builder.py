# Create a function named create palindrome following your current language's style guide. It should take a string, create a palindrome from it and then return it.

import os
os.system("cls" if os.name == "nt" else "clear")

print("Welcome, I am Pali, the Palindrome Creator!")

word = input("Please enter a word and I will creat a palindrome from it: ")

def create_palindrome(palindrome):
    dorw = word[::-1]
    palindrome = word + dorw
    return palindrome

print(create_palindrome(word))
