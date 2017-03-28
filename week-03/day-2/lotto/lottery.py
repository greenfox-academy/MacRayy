# Create a method that returns the five most frequent lottery number in a pretty table format
def five_most_frequent(file_name):
    f = open(file_name, "r")
    numbers = ""
    for line in f:
        numbers += line.rstrip() + '\n'
    f.close()
    return numbers

print(five_most_frequent("otos sample.csv"))
