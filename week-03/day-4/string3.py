# Given a string, compute recursively a new string where all the
# adjacent chars are now separated by a "*".

def change_string(string):
    if string is "":
        return string
    else:
        return string[0] + "*" + change_string(string[1:])

print(change_string("budapest"))
