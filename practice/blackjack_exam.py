# Create a Card class, that has a color and a value
# Create a constructor for setting those values
# Card should be represented as string in this format:
# 9 Hearts
# Jack Diamonds
# Create a Deck class, that has a list of cards in it
# Create a constructor that takes a whole number as parameter
# The constructor should fill the list with the number of different cards using at least 4 different colors (except if the number given is smaller than four, than all cards should have different colors)
# We should be able to shuffle the deck, which randomly orders the cards
# We should be able to draw the top card which returns the drawn card and also removes it from the deck
# Deck should be represented as string in this format:
# 12 cards -  3 Clubs, 3 Diamonds, 3 Hearts, 3 Spades
import random

class Card(object):
    def __init__(self, color, value):
        self.color = color
        self.value = value

    # def display_card(self):
    #     print (str(self.value) + " " + self.color)

class Deck(object):
    colors = ["Hearts", "Spades", "Diamonds", "Clubs"]
    values = ["2", "3", "4", "5", "6", "7", "8", "9", "10" "Jack", "Queen", "King", "Ace"]

    def __init__(self, number_of_cards):
        self.number_of_cards = int(number_of_cards)
        self.list_of_cards = []
        self.create_deck()

    def create_deck(self):
        color = ""
        value = ""
        card = None
        while len(self.list_of_cards) != self.number_of_cards:
            color = random.choice(self.colors)
            value = random.choice(self.values)
            if self.validation_card(color, value):
                card = Card(color, value)
                self.list_of_cards.append(card)
            else:
                pass
        for card in self.list_of_cards:
            print(card.color + card.value)

    def validation_card(self, color, value):
        for card in self.list_of_cards:
            if len(self.list_of_cards) < 4:
                if card.color == color:
                    return False
            elif card.color != color or card.value != value:
                return True
            else:
                return False
        return True

    def shuffle_deck(self):
        pass

    def draw_card(self):
        pass

    def print_deck(self):
        pass


deck = Deck(12)
# print(deck)
# Should print out:
# 12 cards -  3 Clubs, 3 Diamonds, 3 Hearts, 3 Spades
# top_card = deck.draw()
# print(top_card)
# print(deck)
# Should print out:
# Queen Spades
# 11 cards - 3 Clubs, 3 Diamonds, 3 Hearts, 2 Spades
