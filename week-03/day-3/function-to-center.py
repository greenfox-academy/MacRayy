from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a line from that point to the center of the canvas.
# fill the canvas with lines from the edges, every 20 px, to the center.
def draw_lines(x, y):
    for i in range(0, 301, 20):
        line_1 = canvas.create_line(x,y, 150,150)
        x += 20
    for i in range(0, 301, 20):
        line_2 = canvas.create_line(x,y, 150,150)
        y += 20
    for i in range(0, 301, 20):
        line_3 = canvas.create_line(x,y, 150,150)
        x -= 20
    for i in range(0, 301, 20):
        line_4 = canvas.create_line(x,y, 150,150)
        y -= 20

draw_lines(0,0)

root.mainloop()
