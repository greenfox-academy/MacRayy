# Given a string, compute recursively a new string where all the 'x' chars have been removed.

def change_string(string):
    if string is "":
        return string
    elif string[0] is "x":
        return "" + change_string(string[1:])
    else:
        return string[0] + change_string(string[1:])

print(change_string("budaxpest"))
