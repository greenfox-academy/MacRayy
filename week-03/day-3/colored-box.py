from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# draw a box that has different colored lines on each edge.
line_top = canvas.create_line(50,50 , 150,50, fill="green")
line_right = canvas.create_line(150,50, 150,150, fill="red")
line_bottom = canvas.create_line(150,150, 50,150, fill="yellow")
line_left = canvas.create_line(50,150, 50,50, fill="blue")

root.mainloop()
