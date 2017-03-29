from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# draw four different size and color rectangles.
rectangle_1 = canvas.create_rectangle(50,50, 100,100, fill="red")
rectangle_2 = canvas.create_rectangle(100,100, 175,175, fill="yellow")
rectangle_3 = canvas.create_rectangle(175,50, 300,100, fill="blue")

root.mainloop()
