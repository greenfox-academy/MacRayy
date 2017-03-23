"""
Palindome Kata The Kata has two part, the first one is mandatory for everybody, the second is just for students, who already know programming.

1st Part:

Create a function that takes a string and creates a palindrome from it. It should work like this:

output = create_palindrome('pear')

print(output) # it prints: pearraep
2nd Part:

Create a function that searches for all the palindromes in a string that are at least than 3 characters, and returns a list with the found palindromes. Example:

output = search_palindromes('dog goat dad duck doodle never')
print(output) # it prints: ['og go', ' dad ', 'd d', 'dood', 'eve']
"""
# 1.st Part

word = "pear"

def palindrome(word):
    dorw = word[::-1]
    print(word + dorw)

palindrome(word)
