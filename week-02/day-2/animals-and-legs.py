# Write a program that asks for two integers
# The first represents the number of chickens the farmer has
# The seconf represents the number of pigs the farmer has
# It should print how many legs all the animals have

number_of_chickens = input("How many chickens has the farmer got? ")

number_of_pigs = input("How many pigs has the farmer got? ")

number_of_chickens = int(number_of_chickens) * 2

number_of_pigs = int(number_of_pigs) * 4

total_legs = number_of_chickens + number_of_pigs

print("The animals have " + str(total_legs) + " legs in total.")
