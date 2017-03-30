# We have a number of bunnies and each bunny has two big floppy ears.
# We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

def bunnies_with_ears(bunny):
    if bunny == 1:
        return 2
    else:
        return 2 + bunnies_with_ears(bunny-1)

print(bunnies_with_ears(3))
