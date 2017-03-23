# Check if the list contains "7" if it contains print "Hoorray" otherwise print "Noooooo"

numbers = [1, 2, 3, 4, 5, 6, 8];

def in_list():
    a = "Noooooo!"
    for i in numbers:
        if i == 7:
            a = "Hoooooray!"

    return a

print(in_list())
