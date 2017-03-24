# ANAGRAM

# Create a function named is anagram following your current language's style guide. It should take two strings and return a boolean value depending on whether its an anagram or not.

# Input UI

input_1 = "god"#input("word ")
input_2 = "god"#input("word ")

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
print(anagram(input_1, input_2))
