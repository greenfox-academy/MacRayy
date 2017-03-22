# - Create variable named `al` and assign the value `Greenfox` to it
# - Create a function called `greet` that greets it's input parameter
#     - Greeting is printing e.g. `Greetings, dear Greenfox`
# - Greet `al`

al = "Greenfox"

user_name = input("What is your name? ")

def greet():
    print("Dear " + user_name + ", welcome at " + al + "!")

greet()
