# Given base and n that are both 1 or more, compute recursively (no loops)
# the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

def power(base, n):
    if base < 0 or n <= 0:
        return 1
    else:
        return base * power(base, n-1)

print(power(4, 2))
