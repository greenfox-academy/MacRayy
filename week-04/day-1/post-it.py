"""
Create a PostIt class that has
a backgroundColor
a text on it
a textColor
Create a few example post-it objects:
an orange with blue text: "Idea 1"
a pink with black text: "Awesome"
a yellow with green text: "Superb!"
"""

class PostIt():
    background_color = ""
    text = ""
    text_color = ""

post_it_1 = PostIt()
post_it_1.background_color = "orange"
post_it_1.text_color = "blue"
post_it_1.text = "Idea 1"
print(post_it_1.background_color, post_it_1.text_color, post_it_1.text)

post_it_2 = PostIt()
post_it_2.background_color = "pink"
post_it_2.text_color = "black"
post_it_2.text = "Awesome"
print(post_it_2.background_color, post_it_2.text_color, post_it_2.text)

post_it_3 = PostIt()
post_it_3.background_color = "yellow"
post_it_3.text_color = "green"
post_it_3.text = "Superb"
print(post_it_3.background_color, post_it_3.text_color, post_it_3.text)
