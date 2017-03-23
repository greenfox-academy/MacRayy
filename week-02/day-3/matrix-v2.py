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
