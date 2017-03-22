# - Create (dynamically) a two dimensional list
#   with the following matrix. Use a loop!
#
#   1 0 0 0
#   0 1 0 0
#   0 0 1 0
#   0 0 0 1
#
# - Print this two dimensional list to the output

arrey = ["0", "0", "0", "0"]

for sor in range(0, len(arrey)):
    for oszlop in range(0, len(arrey)):
        if sor == oszlop:
            arrey[sor] = "1"
    print(str.join(" " , (arrey)))
    arrey = ["0", "0", "0", "0"]



""" eredeti
user_1 = 1#int(input("how long matrix do you want to have? "))
user_2 = 1#int(input("and how wide do you want to have it? "))

print("Welcome to the matrix!")

matrix = [" 1 0 0 0", " 0 1 0 0", " 0 0 1 0", " 0 0 0 1"] * user_1
for m in matrix:
    print(m * user_2)
"""

""" nem megy
matrix = [[1], [0]]

for m in matrix:
    print(matrix[0], matrix[1])
"""

""" neten talaltam
# Creates a list containing 5 lists, each of 8 items, all set to 0
w, h = 4, 4;
matrix = [[0 for x in range(w)] for y in range(h)]

Matrix[0][0] = 1
Matrix[6][0] = 3 # error! range...
Matrix[0][6] = 3 # valid

print Matrix[0][0] # prints 1
x, y = 0, 6
print Matrix[x][y] # prints 3; be careful with indexing!
"""
