# Create a method that decrypts the texts/duplicated_chars.txt

def decrypt(file_name):
    f = open(file_name, "r")
    text = f.read()
    readalble_text = ""
    for i in range(0, len(text) + 1, 2):
        readalble_text += text[i]
    print(readalble_text)
    f.close()


decrypt("duplicated-chars.txt")
