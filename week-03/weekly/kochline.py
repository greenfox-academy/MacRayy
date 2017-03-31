from tkinter import *

root = Tk()

canvas = Canvas(root, width='600', height='600')
canvas.pack()

def draw_line(x,y, lenght):
    line = canvas.create_line(x,y, lenght/3,y, lenght/2,y/1.5, 2*(lenght/3),y, lenght,y, fill="blue")


def recursive_lines(x,y, lenght):
    draw_line(x,y, lenght)
    if lenght > 50:
        draw_line(x,y, lenght*3**0.5)


recursive_lines(10,400, 580)

root.mainloop()
