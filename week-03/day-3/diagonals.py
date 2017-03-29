from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# draw the canvas' diagonals in green.
line_1 = canvas.create_line(0,0, 300,300, fill="#54f235")
line_2 = canvas.create_line(300,0, 0,300, fill="#03a308")

root.mainloop()
