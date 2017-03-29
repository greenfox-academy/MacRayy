from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

def draw_green_lines(y1 ,x2):
    for i in range(15):
        line_1 = canvas.create_line(0,y1, x2,300, fill="green")
        y1 += 20
        x2 += 20

def draw_purple_lines(x1, y2):
    for i in range(15):
        line_2 = canvas.create_line(x1,0, 300,y2, fill="purple")
        x1 += 20
        y2 += 20

draw_green_lines(0, 20)
draw_purple_lines(0, 0)

root.mainloop()
