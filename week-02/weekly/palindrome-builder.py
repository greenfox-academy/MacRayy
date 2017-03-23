# Create a function named create palindrome following your current language's style guide. It should take a string, create a palindrome from it and then return it.

word = input("Please enter a word and I wll creat a palindrome from it: ")

def create_palindrome(palindrome):
    dorw = word[::-1]
    palindrome = word + dorw
    return palindrome

print(create_palindrome(word))
