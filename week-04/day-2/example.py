class Shape():
    name = "not set"
    def __init__(self, x, y):
        self.x = x
        self.y = y

class Abstract(Shape):
    def __init__(self, x, y, width, height):
        super().__init__(x, y) #behivja a parent osztaly x es y parametereit
        self.width = width
        self.height = height

class Rectangle1(Shape):
    def __init__(self, width, height):
        super().__init__(0,0) #behivja a parent osztaly x es y parametereit
        self.width = width
        self.height = height

abstr = Abstract(55, 22, 300, 400)

print(abstr.x, abstr.name)
print(abstr.x, abstr.width)

rect = Rectangle1(300, 400)
print(rect.x, rect.name)
print(rect.x, rect.width)

print( isinstance(rect, Rectangle1)) # megmutatja hogy az adott elem a megadott osztalynak az eleme-e
print (issubclass(Rectangle1, Shape)) # megmutatja hogy az adott class a megadott osztalynak a childja-e
