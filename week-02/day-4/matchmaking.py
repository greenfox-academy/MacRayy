# Join the two lists by matching one girl with one boy in the order list
# Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

girls = ["Eve","Ashley","Bozsi","Kat","Jane"]
boys = ["Joe","Fred","Bela","Todd","Neef","Jeff"]

order = []
n = len(girls)
for i in range (n):
    order += [girls[i]]
    order += [boys[i]]

order.append(boys[5])

print(order)
