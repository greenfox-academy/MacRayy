from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a line from that point to the center of the canvas.
# fill the canvas with lines from the edges, every 20 px, to the center.
def draw_lines(x, y):
    for i in range(16):
        line_1 = canvas.create_line(i*20,y, 150,150)
        line_2 = canvas.create_line(x,i*20, 150,150)
        line_3 = canvas.create_line(i*20,y+300, 150,150)
        line_1 = canvas.create_line(x+300,i*20, 150,150)

draw_lines(0,0)

root.mainloop()
