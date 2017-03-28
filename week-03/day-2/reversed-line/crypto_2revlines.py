# Create a method that decrypts texts/reversed_zen_lines.txt

# one version
'''
def decrypt(file_name):
    f = open(file_name, "r")
    text = f.readlines()
    readalble_text = ""
    for i in text:
        readalble_text += i[::-1]
    f.close()
    return readalble_text


print(decrypt("reversed-lines.txt"))
'''

# second version
def decrypt(file_name):
    f = open(file_name, "r")
    text = ""
    for line in f:
        text += line.rstrip()[::-1] + '\n'
    print(text)
    f.close()

decrypt("reversed-lines.txt")
