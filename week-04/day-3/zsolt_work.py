class Apple():
    def get_apple(self):
        return "Apple"

class SumList():
    def __init__(self, listt):
        self.list = listt

    def sum_list_elements(self):
        summ = 0
        for element in self.list:
            summ += element
        if summ == 0:
            return 0
        else:
            return summ

class Anagaram():
    def __init__(self, word_1, word_2):
        self.word_1 = word_1
        self.word_2 = word_2

    def anagaram(self):
        if "".join(sorted(self.word_1)) == "".join(sorted(self.word_2)):
            return True
        else:
            return False
