"""Create 5 trees
Store the data of them in variables in your program
for every tree the program should store its'
type
leaf color
age
sex
you can use just variables, or lists and/or maps
"""
trees = [
    {"type": "oak", "leaf_color": "green", "age": 2, "sex": "male"},
    {"type": "pine", "leaf_color": "green", "age": 3, "sex": "female"},
    {"type": "apple", "leaf_color": "green", "age": 1, "sex": "male"},
    {"type": "momiji", "leaf_color": "red", "age": 6, "sex": "fmale"},
    {"type": "birch", "leaf_color": "green", "age": 5, "sex": "male"}]

for tree in trees:
    print(tree["leaf_color"])
