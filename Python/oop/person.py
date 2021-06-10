class Person:
  # Why we don't put "friends = []" here:
  # doing so would essentially create a shared friends list for all Persons as "friends" would be pointing
  # to the same memory location for each Person. Putting it in the init function gets around that and makes
  # each friends list unique to that Person
  def __init__(self, name, email, phone):
      self.name = name
      self.email = email
      self.phone = phone
      self.friends = []

  def greet(self, other_person):
    print(f"Hello {other_person.name}, I am {self.name}!")

  def __str__(self):
    return f'''
    ====== name: {self.name} ======
    ====== email: {self.email} ======
    ====== phone: {self.phone} ======
    '''
  
  def add_friend(self, other_person):
    self.friends.append(other_person)
    print("new friend added")
    print(f"debug info: {other_person.name}")