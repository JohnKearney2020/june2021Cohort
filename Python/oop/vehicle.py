class Vehicle:
  def __init__(self, make, model, year):
    self.make = make
    self.model = model
    self.year = year
  
  # Add a print_info method to the Vehicle class. It will print out the vehicle's information like so:
  def print_info(self):
    print(f"{self.year} {self.make} {self.model}")