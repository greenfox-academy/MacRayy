# - Create a function called `factorio`
#   that returns it's input's factorial

def factorio(user_input):
    x = 1
    for y in range(1, user_input + 1):
        x = x * y
    print(x)

factorio(4)
