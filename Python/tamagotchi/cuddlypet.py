from pet import Pet

# CuddlyPet inherits from Pet
class CuddlyPet(Pet):
  def __init__(self,name):
    super().__init__(name)
    self.hunger += 2

  def cuddle(self, other_pet):
    other_pet.get_love()
  # Change the behavior of the be_alive method in Pet to this instead
  # It's different for cuddly pets only
  def be_alive(self):
      self.fullness -= self.hunger
      self.happiness -= self.mopiness/2
      # use each toy
      for toy in self.toys:
        self.happiness += toy.use()