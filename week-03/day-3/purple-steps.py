from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

def draw_square(x,y, size):
    x = 10
    y = 10
    for i in range(20):
        square = canvas.create_rectangle(x,y, x+size,y+size, fill="purple")
        x += size
        y += size

draw_square(10,10, 10)


root.mainloop()
