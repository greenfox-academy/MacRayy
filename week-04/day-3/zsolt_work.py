class Apple():
    def get_apple(self):
        return "Apple"

class SumList():
    def __init__(self, listt = []):
        self.list = listt

    def sum_list_elements(self):
        summ = 0
        for element in self.list:
            summ += element
        return summ
