# Given a string, compute recursively (no loops) a new string where all the
# lowercase 'x' chars have been changed to 'y' chars.

def change_string(string):
    if string is "":
        return string
    elif string[0] is "x":
        return "y" + change_string(string[1:])
    else:
        return string[0] + change_string(string[1:])

print(change_string("budaxpest"))
