from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a line from that point to the center of the canvas.
# draw 3 lines with that function.

def draw_lines(x, y):
    line_1 = canvas.create_line(x,y, 150,150)

draw_lines(int(input("Enter starting x coordinate:\n")),int(input("Enter starting y coordinate:\n")))
draw_lines(150,290)
draw_lines(290,10)

root.mainloop()
