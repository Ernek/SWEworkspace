"""Python serial number generator."""

class SerialGenerator:
    """Machine to create unique incrementing serial numbers.
    
    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """

    def __init__(self, start) -> None:
        self.start = start
        self.init = start 
        pass
    
    def generate(self):
        new_start = self.start
        self.start += 1  
        return new_start
    
    def reset(self):
        self.start = self.init 
        pass

