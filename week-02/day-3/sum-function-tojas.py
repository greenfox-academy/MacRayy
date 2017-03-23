number = 6

def summ(n):
    out = 0
    for i in range(1, n +1): # 0-val felesleges kezdeni, 1-tol n + 1 -ig (5+1-ig) fut a cuklus
        out += i
    return out # meg kell adni a return valtozot, ezt adja vissza ha meghivjuk a fuggvenyt

print(summ(number)) # n helyere irodik a number
