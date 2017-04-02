# Things are a little bit messed up
# Your job is to decode the notSoCrypticMessage by using the hashmap as a look up table
# Assemble the fragments into the out variable

out = "";
notSoCrypticMessage = [1, 12, 1, 2, 11, 1, 7, 11, 1, 49, 1, 3, 11, 1, 50, 11]

hashmap = {
    7: "run around and desert you",
    50: "tell a lie and hurt you",
    49: "make you cry,",
    2: "let you down",
    12: "give you up,",
    1: "Never gonna",
    11: "\n",
    3: "say goodbye"
}

for i in notSoCrypticMessage: # a listan vegig megy a ciklus
    out += hashmap[i] + " " # hashmap i-edik elemet adja hozza

print(out)

# proba
print("-----------------------")
for key in hashmap.keys():
    print(key)

print("-----------------------")
for value in hashmap.values():
    print(value)

print("-----------------------")
for key in hashmap.items():
    print(key)

print("-----------------------")
for key, value in hashmap.items():
    print(key, value)

n = [[1, 2, 3], [4, 5, 6, 7, 8, 9]]
# Add your function here

def flatten(lists):
    result = []
    for numbers in lists:
        for number in numbers:
            result.appned(number)
    return result



print flatten(n)
