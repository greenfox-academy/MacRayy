# - Create (dynamically) a two dimensional list
#   with the following matrix. Use a loop!
#
#   1 0 0 0
#   0 1 0 0
#   0 0 1 0
#   0 0 0 1
#
# - Print this two dimensional list to the output

user_1 = int(input("how long matrix do you want to have? "))
user_2 = int(input("and how wide do you want to have it? "))

print("Welcome to the matrix!")

matrix = [" 1 0 0 0", " 0 1 0 0", " 0 0 1 0", " 0 0 0 1"] * user_1
for m in matrix:
    print(m * user_2)
