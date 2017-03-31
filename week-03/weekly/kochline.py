from tkinter import *

root = Tk()

canvas = Canvas(root, width='600', height='600')
canvas.pack()

def draw_line(x,y):
    line = canvas.create_line(x,y, x*58,y, fill="blue")

"""
def recursive_lines(x,y):
    draw_hexagon(x,y)
"""

draw_line(10, 400)

root.mainloop()
