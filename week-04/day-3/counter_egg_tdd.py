class Counter:
    def __init__(self, start = 0):
        self.current = start

    def add(self):
        self.current += 1

    def get(self):
        return self.current
