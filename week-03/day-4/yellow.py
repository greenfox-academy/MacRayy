from tkinter import *

root = Tk()

canvas = Canvas(root, width='600', height='600')
canvas.pack()

def draw_square(x,y, size):
    square = canvas.create_rectangle(x,y, x+size,y+size, fill="yellow")

def recursive_squares(x,y, size):
    draw_square(x,y, size)
    if size > 5:
        recursive_squares(x+size/3,y, size/3)
        #recursive_squares(x+2/3*size,y, size/3)
        #recursive_squares(x,y+2/3*size, size/3)
        #recursive_squares(x+2/3*size,y+2/3*size, size/3)

recursive_squares(10,10, 580)

root.mainloop()
