# - Create a function called `printer`
#   which prints the input parameters
#   (can have multiple number of arguments)

def printer(*args):
    for a in args:
        print(a)

printer("there", "is no", "try")
