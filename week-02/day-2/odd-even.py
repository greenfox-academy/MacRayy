# Write a program that reads a number form the standard input,
# Than prints "Odd" if the number is odd, or "Even" it it is even.


user_number = 0

how_many_numbers = 5

for x in range(0, 5):
    user_number = input("enter a number: ")
    if int(user_number) % 2 == 0:
        print("Even")
    else:
        print("Odd")
