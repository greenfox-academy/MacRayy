# Create a method that decrypts texts/reversed_zen_order.txt

def decrypt(file_name):
    f = open(file_name, "r")
    text = f.readlines()
    readalble_text = ""
    for i in text[::-1]:
        readalble_text += i
    f.close()
    return readalble_text

print(decrypt("revorder.txt"))
