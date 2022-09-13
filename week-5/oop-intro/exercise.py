class YouTubeLessonManager:
    def __init__(self):
        self.lessons = {}
    
    def save(self, name, url):
        name = name.lower()
        name = name.replace('-', ' ')
        self.lessons.update({name: url})
    
    def get(self, name):
        name = name.lower()
        name = name.replace('-', ' ')
        return self.lessons[name]


lesson_manager = YouTubeLessonManager()
# print(lesson_manager.lessons) 

#lesson_manager = YouTubeLessonManager()
lesson_manager.save("For-Loops", "https://www.youtube.com/watch?v=OnDr4J2UXSA")
# print(lesson_manager.lessons) # outputs: {"For-Loops": "https://www.youtube.com/watch?v=OnDr4J2UXSA"}  
# print(lesson_manager.lessons["For-Loops"]) # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA' 

#print(lesson_manager.get("For-Loops")) # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA' 

#print(lesson_manager.get("for-loops")) # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'
#print(lesson_manager.get("fOr-LooPS")) # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'

print(lesson_manager.get("for-loops")) # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA' 
print(lesson_manager.get("for loops")) # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'