from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

def draw_square(x,y, size):
    x = 10
    y = 10
    size = 10
    for i in range(7):
        square = canvas.create_rectangle(x,y, x+size,y+size, fill="purple")
        x += size
        y += size
        size = size + 10

draw_square(10,10, 10)

root.mainloop()
