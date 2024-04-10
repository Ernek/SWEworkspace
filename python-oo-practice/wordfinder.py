"""Word Finder: finds random words from a dictionary."""

from random import randint

class WordFinder:
    
    def __init__(self, filepath) -> None:
        self.filepath = filepath
        self.word_list = self.list_words()

    def list_words(self):
        word_list = []
        with open(self.filepath, 'r') as wordfile:
            for line in wordfile.readlines():
                word_list.append(line.strip())
        return word_list
    
    def random(self):
        random_number = randint(0,len(self.word_list) -1)
        return self.word_list[random_number]
    
    def __repr__(self) -> str:
        return f"{len(self.word_list)} words read"            
