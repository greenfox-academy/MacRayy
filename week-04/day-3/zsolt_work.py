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

class CountLetter():
    def __init__(self, string):
        self.word = string

    def count_letter(self):
        dic = {}
        for letter in self.word:
            if letter not in dic:
                dic[letter] = 1
            else:
                dic[letter] += 1
        return dic

class Fibonacci():
    # def __init__(self, num):
    #     self.num = num

    def fibonacci(self, num):
        self.num = num
        if self.num == 0:
            return 0
        elif self.num == 1:
            return 1
        else:
            return self.fibonacci(num-1) + self.fibonacci(num-2)
