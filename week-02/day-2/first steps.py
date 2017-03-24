how_many_numbers = int(input("How many numbers shall I callculate with? "))

def sum_and_ave():
    user_number = 0
    for x in range(how_many_numbers):
        user_number = user_number + float(input("Enter a number: "))
    Average = user_number / how_many_numbers
    print("Sum of the entered numbers: " + str(user_number))    print("Average of the entered numbers: " + str(Average))

sum_and_ave()
