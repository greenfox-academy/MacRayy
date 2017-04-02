from tkinter import *

root = Tk()

canvas = Canvas(root, width='600', height='600')
canvas.pack()

def draw_hexagon(x,y):
    square = canvas.create_polygon(x,y, x*2,y, x*2.5,y*1.8, x*2,y*2.5, x,y*2.5, x/2,y*1.8, fill="white", outline="black")

"""
def recursive_hexagon(x,y):
    draw_hexagon(x,y)
    if:
        draw_hexagon(x,y, x*2,y, x*2.5,y*1.8, x*2,y*2.5, x,y*2.5, x/2,y*1.8)
"""
draw_hexagon(150,150)

root.mainloop()
