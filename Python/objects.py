class Dog:
  # Class Attribute
  species = 'mammal'

  # Initialize / Instance Attributes
  def __init__(self, name, age, breed):
    self.name = name
    self.age = age
    self.breed = breed

  # Instance Method
  def description(self):
    return f"{self.name} is {self.age} years old and a {self.breed}"

  def bark_at(self, other_dog):
    print(f"{self.name} barked furiosly at {other_dog.name}")


# "Nelson" and "3" correspond to "name" and "age" above
nelson = Dog("Nelson", 3, "Poodle")
# print(f"{nelson.name} is {nelson.age} and is a {nelson.species}.")
# use the description method
print(nelson.description())

baxter  = Dog('Baxter', 16, "Rotweiler")
# print(baxter.name)
# print(baxter.description())

nelson.bark_at(baxter)