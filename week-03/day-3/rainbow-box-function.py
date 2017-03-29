from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# create a square drawing function that takes 2 parameters:
# the square size, and the fill color,
# and draws a square of that size and color to the center of the canvas.
# create a loop that fills the canvas with rainbow colored squares.
rainbowcolors = ["red", "orange", "yellow", "green", "blue", "purple"]
size = 300

def draw_square(size, color):
    for color in rainbowcolors:
        size -= 45
        square = canvas.create_rectangle((150-size/2,150-size/2, 150+size/2,150+size/2), fill=color)

draw_square(size, rainbowcolors)

root.mainloop()
