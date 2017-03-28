# Create a method that returns the five most frequent lottery number in a pretty table format

def five_most_frequent(file_name):
    f = open(file_name, "r")
    numbers = ""
    last_numbers = []
    for line in f:
        numbers = line.rstrip().split(";")
        last_numbers += numbers[11:16]
    f.close()
    return last_numbers

print(five_most_frequent("otos sample.csv"))
