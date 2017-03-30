from tkinter import *

root = Tk()

canvas = Canvas(root, width='600', height='600')
canvas.pack()

def draw_hexagon(x,y):
    square = canvas.create_polygon(x,y, x*2,y, x*2.5,y*1.8, x*2,y*2.5, x,y*2.5, x/2,y*1.8, fill="white", outline="black")

"""def recursive_squares(x,y, size):
    draw_square(x,y, size)
    if size > 5:
        recursive_squares(x+size/3,y, size/3)
        recursive_squares(x,y+size/3, size/3)
        recursive_squares(x+2*size/3,y+size/3, size/3)
        recursive_squares(x+size/3,y+2*size/3, size/3)
"""
draw_hexagon(150,150)

root.mainloop()
