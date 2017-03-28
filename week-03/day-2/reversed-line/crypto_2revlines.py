# Create a method that decrypts texts/reversed_zen_lines.txt

def decrypt(file_name):
    f = open(file_name, "r")
    text = f.readlines()
    readalble_text = ""
    for i in text:
        readalble_text += i[::-1]
    print(readalble_text)
    f.close()

decrypt("reversed-lines.txt")
