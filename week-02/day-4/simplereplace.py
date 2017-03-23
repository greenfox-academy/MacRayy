example = "In a dishwasher far far away"

# I would like to replace "dishwasher" with "galaxy" in this example
# Please fix it for me!
# Expected ouput: In a galaxy far far away

# not recommended solution
print(example.replace("dishwasher", "galaxy"))

# recommended solution
print(example[:5] + "galaxy" + example[15:])
