class rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def calculate_area(self):
        return self.width * self.height
    
    def calculate_perimeter(self):
        return 2*self.width + 2*self.height

class Square(rectangle):
    def __init__(self, length):
        super().__init__(length, length)

    def calculate_perimeter(self):
        return 4*self.width

s = Square(2)
print(s.calculate_perimeter()) # outputs: 8
print(s.calculate_area()) # outputs: 4 
