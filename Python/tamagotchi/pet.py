class Pet:
  def __init__(self, name, fullness=50, happiness=30, hunger=5, mopiness=5):
    self.name = name
    self.fullness = fullness
    self.happiness = happiness
    self.hunger = hunger
    self.mopiness = mopiness
    self.toys = []

  def eat_food(self):
    self.fullness += 10

  def get_love(self):
    self.happiness += 10

  def be_alive(self):
    self.fullness -= self.hunger
    self.happiness -= self.mopiness
    # use each toy
    for toy in self.toys:
      self.happiness += toy.use()

# any time we try to print the Pet object it will automatically use this method
# we are trying to turn an object into a string and Python will recognize that
  def __str__(self):
    return f'''
    ====== Pet: {self.name} ======
    ====== Happiness: {self.happiness} ======
    ====== Hunger: {self.fullness} ======
    '''

  def is_alive(self):
    return self.fullness > 0 and self.happiness > 0

  def give_toy(self, toy):
    self.toys.append(toy)


# cujo = Pet('Cujo the Dog')
# print(cujo.name)