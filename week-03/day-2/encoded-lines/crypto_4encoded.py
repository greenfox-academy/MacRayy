# Create a method that decrypts texts/encoded_zen_lines.txt

def decrypt(file_name):
    f = open(file_name, "r")
    text = f.read()
    readable_text = ""
    for i in text:
        if i != " " and i != "\n":
            readable_text += chr(ord(i) - 1)
        elif i == " ":
            readable_text += " "
        elif i == "\n":
            readable_text += "\n"
    f.close()
    return readable_text

print(decrypt("encoded-lines.txt"))
