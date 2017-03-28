# write a function that takes a filename and returns the number of lines the
# file contains. It should return zero if the file does not exist.

def decrypt(file_name):
    try:
        f = open(file_name, "r")
        count = file_name.readlines()
        f.close()
        return len(count)
    except FileNotFoundError:
        print("0")

print(decrypt("reversed-lines.txt"))
