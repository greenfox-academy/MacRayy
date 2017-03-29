from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# create a square drawing function that takes 1 parameter:
# the square size
# and draws a square of that size to the center of the canvas.
# draw 3 squares with that function.
def draw_square(size):
    square = canvas.create_rectangle(150-size/2,150-size/2, 150+size/2,150+size/2, fill="pink")

draw_square(200)
draw_square(100)
draw_square(50)



root.mainloop()
