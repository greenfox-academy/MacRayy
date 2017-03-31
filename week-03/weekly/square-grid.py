from tkinter import *

root = Tk()

canvas = Canvas(root, width='600', height='600', bg="#e8ed61")
canvas.pack()

def draw_square(x,y, size, width):
    square = canvas.create_rectangle(x,y, x+size,y+size, outline="darkblue", width=width)

def recursive_squares(x,y, size, width):
    draw_square(x,y, size, width)
    if width > 1:
        recursive_squares(x-size/4,y-size/4, size/2, width/2)
        recursive_squares(x-size/4,y+size*0.75, size/2, width/2)
        recursive_squares(x+size*0.75,y-size/4, size/2, width/2)
        recursive_squares(x+size*0.75,y+size*0.75, size/2, width/2)

recursive_squares(180,180, 250, 20)

root.mainloop()
