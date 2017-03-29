from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# fill the canvas with a checkerboard pattern.
def draw_square_first_line(y, size):
    x = 0
    for i in range(10):
        if i % 2 == 0:
            square = canvas.create_rectangle(x,y, x+size,y+size, fill="white")
        else:
            square = canvas.create_rectangle(x,y, x+size,y+size, fill="black")
        x += size

def draw_square_second_line(y, size):
    x = 0
    for j in range(10):
        if j % 2 == 0:
            square = canvas.create_rectangle(x,y, x+size,y+size, fill="black")
        else:
            square = canvas.create_rectangle(x,y, x+size,y+size, fill="white")
        x += size

def pattern():
    line_1 = 0
    line_2 = 30
    for line in range(6):
        draw_square_first_line(line_1, 30)
        draw_square_second_line(line_2, 30)
        line_1 += 60
        line_2 += 60

pattern()

root.mainloop()
