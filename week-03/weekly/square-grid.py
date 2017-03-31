from tkinter import *

root = Tk()

canvas = Canvas(root, width='600', height='600')
canvas.pack()

def draw_square(x,y, size, width):
    square = canvas.create_rectangle(x,y, x+size,y+size, outline="darkblue", width=width)
'''
def recursive_squares(x,y, size, width):
    draw_square(x,y, size, width)
    if size > 5:
        recursive_squares(x+size/3,y, size/3, "width")
        recursive_squares(x,y+size/3, size/3, "w")
        recursive_squares(x+2*size/3,y+size/3, size/3, "width")
        recursive_squares(x+size/3,y+2*size/3, size/3, "width")
'''
draw_square(10,10, 580, 10)

root.mainloop()
