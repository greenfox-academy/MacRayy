from tkinter import *

root = Tk()

canvas = Canvas(root, width='600', height='600')
canvas.pack()

def draw_square(x,y, size):
    for i in range(7):
        square = canvas.create_rectangle(x,y, x+size,y+size)



draw_square(10,10, 580)

root.mainloop()
